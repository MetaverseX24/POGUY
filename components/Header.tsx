'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: '首页', href: '#home' },
    { name: '特色', href: '#features' },
    { name: '关于我们', href: '#about' },
    { name: '服务', href: '#services' },
    { name: '联系我们', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/letbonk.png" alt="letbonk" width={128} height={128} style={{marginRight:'24px',border:'5px solid #00f',borderRadius:'20px',boxShadow:'6px 6px 20px #0ff',objectFit:'contain',transform:'none'}} />
            <h1 className="text-3xl font-extrabold text-pink-600 drop-shadow-lg tracking-widest animate-pulse">poorguy</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">开始使用</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <button className="btn-primary w-full">开始使用</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 