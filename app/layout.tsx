import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css" // Importa o CSS corrigido
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "EstacioneJá - Sistema de Estacionamento Universitário",
  description: "Gerencie vagas de estacionamento em sua universidade de forma simples e eficiente",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    /* CORREÇÃO: Removido className="dark" e style daqui.
      Deixe o ThemeProvider controlar o tema.
    */
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        {/* CORREÇÃO: defaultTheme="system" é a melhor prática.
          Ele vai usar o tema do seu computador (claro ou escuro).
        */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}