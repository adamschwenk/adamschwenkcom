"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-primary"}`}>
              AS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => {
                const isHashLink = link.href.includes("#")
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (isHashLink && pathname === "/") {
                        e.preventDefault()
                        const element = document.querySelector(link.href.split("/").pop() || "")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isScrolled ? "text-foreground/70 hover:text-primary" : "text-foreground/80 hover:text-primary"
                    } ${pathname === link.href ? (isScrolled ? "text-primary" : "text-primary") : ""}`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Button asChild className="ml-4 bg-white text-zinc-900 hover:bg-zinc-200">
                <a href="/Adam_Schwenk_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={isScrolled ? "text-foreground" : "text-primary"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isHashLink = link.href.includes("#")
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false)
                    if (isHashLink && pathname === "/") {
                      e.preventDefault()
                      const element = document.querySelector(link.href.split("/").pop() || "")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:text-primary hover:bg-secondary/10 ${
                    pathname === link.href ? "text-primary bg-secondary/10" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="pt-2">
              <Button asChild className="w-full bg-white text-zinc-900 hover:bg-zinc-200">
                <a href="/Adam_Schwenk_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

