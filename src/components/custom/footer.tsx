"use client"

import { Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Clip.Ai</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              A plataforma líder em criação de vídeos com inteligência artificial. 
              Crie conteúdo profissional em mais de 50 idiomas e alcance audiências globais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Links - Produto */}
          <div>
            <h3 className="text-white font-bold mb-4">Produto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Casos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Links - Empresa */}
          <div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Suporte</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Clip.Ai. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
