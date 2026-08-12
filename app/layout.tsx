import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

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
    url: "https://propostarapida.malabares.com.br",
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
    icon: "/favicon.png",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y199g02jus");
          `}
        </Script>
      </body>
    </html>
  );
}
