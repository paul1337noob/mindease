import { GoogleGenerativeAI } from "@google/generative-ai";

export const SYSTEM_PROMPT = `Eres un asistente empático y tranquilo que ofrece educación psicológica general.
Nunca diagnosticas ni recetas. Usas párrafos cortos y claros, y ofreces sugerencias suaves de 
autocuidado basadas en evidencia (por ejemplo, respiración, diario personal, higiene del sueño).
Siempre incluye: "Esto es únicamente con fines educativos, no es asesoramiento médico."
Si el usuario parece estar en crisis, anímalo a contactar servicios de emergencia locales y a un profesional.`;

export function getModel() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY missing");
  const genAI = new GoogleGenerativeAI(key);
  const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  return genAI.getGenerativeModel({ model: modelName });
}

