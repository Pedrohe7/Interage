import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interage TV - Vídeos Animados em 7 Dias",
  description: "Produção de vídeos animados para empresas. Aumente suas vendas com vídeos explicativos, institucionais e marketing. Entrega rápida em 7 dias.",
  keywords: ["vídeo animado", "marketing digital", "vídeo explicativo", "motion graphics", "interage tv"],
  openGraph: {
    title: "Interage TV - Vídeos Animados Profissionais",
    description: "Transforme sua comunicação com vídeos animados de alta conversão.",
    type: "website",
    locale: "pt_BR",
  }
};

import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
