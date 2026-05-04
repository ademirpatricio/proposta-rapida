import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // 👈 ADICIONA ISSO
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

        {/* HOTJAR */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6704577,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

      </body>
    </html>
  );
}