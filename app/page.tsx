import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">MindEase</h1>
            <p className="mt-2 text-gray-600">
              Orientación de bienestar mental asistida por IA
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Un espacio tranquilo para la reflexión
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            MindEase ofrece conversaciones educativas y de apoyo impulsadas por IA.
            Está diseñado para ayudarte a reflexionar y encontrar pequeños pasos a seguir.
            Esta herramienta no es un servicio médico.
          </p>
        </div>

        {/* Chatbot Card */}
        <div className="mb-8">
          <Chatbot />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600 space-y-2">
            <p>
              <strong>Aviso:</strong> Este sitio proporciona información general
              y educativa, y no es un sustituto de la atención profesional de
              salud mental.
            </p>
            <p>
              Si estás en crisis o considerando autolesionarte, llama a los
              servicios de emergencia locales inmediatamente.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              &copy; {new Date().getFullYear()} MindEase. Únicamente con fines
              educativos.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

