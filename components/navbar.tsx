"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react" // Removi o ícone "Car" que não será mais usado na logo
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Lista de links que vamos manter.
const navLinks = [
  { label: "Página Inicial", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
  { label: "Avaliação", href: "/avaliacao" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">

        {/* Logo - CÓDIGO ORIGINAL RESTAURADO AQUI */}
        <Link href="/" className="flex items-center gap-2 ">
          <img
            src="/Logo1.svg"
            alt="Logo"
            className="block dark:hidden h-12 w-auto pl-10"
          />
          <img
            src="/Logo2.svg"
            alt="Logo"
            className="hidden dark:block h-12 w-auto pl-10"
          />
        </Link>

        {/* Navegação para Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botões de Ação e Menu Mobile */}
        <div className="flex items-center gap-2">
          {/* Botões de Login/Cadastro para Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastrar">
              <Button size="sm">
                Cadastrar
              </Button>
            </Link>
          </div>

          {/* Gatilho do Menu Mobile */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex items-center gap-2 pb-4 border-b mb-4">
                  {/* Logo para o menu mobile - Também restaurada */}
                  <img src="/Logo1.svg" alt="Logo" className="block dark:hidden h-10 w-auto" />
                  <img src="/Logo2.svg" alt="Logo" className="hidden dark:block h-10 w-auto" />
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                        pathname === link.href
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                {/* Botões de Login/Cadastro para Mobile */}
                <div className="mt-6 pt-6 border-t flex flex-col gap-2">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Entrar</Button>
                  </Link>
                  <Link href="/cadastrar" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full">Cadastrar</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}