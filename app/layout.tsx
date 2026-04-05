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
  title: "Proposta Rápida | Gere propostas profissionais em minutos",
  description:
    "Crie propostas comerciais profissionais em poucos minutos. Simples, rápido e ideal para freelancers e agências.",

  keywords: [
    "proposta comercial",
    "gerador de propostas",
    "orçamento online",
    "freelancer",
    "proposta rápida",
  ],

  authors: [{ name: "Proposta Rápida" }],

  metadataBase: new URL("https://propostarapida.malabares.com.br/"),

  openGraph: {
    title: "Proposta Rápida",
    description:
      "Gere propostas comerciais profissionais em minutos, de forma simples e rápida.",
    url: "https://seudominio.com",
    siteName: "Proposta Rápida",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Proposta Rápida",
    description: "Crie propostas profissionais em minutos.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}