import { NextRequest, NextResponse } from "next/server";
import { getModel, SYSTEM_PROMPT } from "@/lib/gemini";
import { isCrisis } from "@/lib/safety";
// import { limit } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    // const limited = await limit(req);
    if (!limited.ok) {
      // return NextResponse.json(
        { error: "Demasiadas solicitudes. Por favor espera un momento e intenta de nuevo." },
        { status: 429 }
      // );
    }

    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Mensaje faltante" }, { status: 400 });
    }

    // Crisis detection (pre-LLM)
    const crisis = isCrisis(message);
    if (crisis.isCrisis) {
      return NextResponse.json({
        reply:
          "Lamento mucho que estés pasando por esto. Si estás en peligro o pensando en hacerte daño, por favor llama a los servicios de emergencia locales ahora mismo. Si puedes, contacta a alguien de tu confianza. Hablar con un profesional certificado puede ayudar. Esto es únicamente con fines educativos y no es asesoramiento médico.",
        safety: crisis,
        meta: { model: null, latencyMs: 0 },
      });
    }

    // Normal flow: call Gemini
    const model = getModel();
    const prompt = `${SYSTEM_PROMPT}\n\nUser: ${message}\nAssistant:`;
    const t0 = Date.now();
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    const reply = result.response.text();
    const latencyMs = Date.now() - t0;

    return NextResponse.json({
      reply,
      safety: crisis,
      meta: {
        model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
        latencyMs,
      },
    });
  } catch (e: any) {
    console.error("Chat API error:", e);
    return NextResponse.json(
      { error: `Error del servidor: ${e.message || "Error desconocido"}` },
      { status: 500 }
    );
  }
}

