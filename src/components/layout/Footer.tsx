import Link from "next/link";
import { Play, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-4">
          <img src="/logo.svg" alt="Interage TV" className="h-10 w-auto brightness-0 invert" />
        </Link>
          <p className="text-gray-400 text-sm max-w-xs mb-6">
            Especialistas em vídeos animados para internet. Transformamos ideias em resultados através de animações criativas e estratégicas.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Youtube size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#home" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
            <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfólio</Link></li>
            <li><Link href="#processo" className="hover:text-primary transition-colors">Processo</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>(11) 99999-9999</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>contato@interage.tv</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Interage TV. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
