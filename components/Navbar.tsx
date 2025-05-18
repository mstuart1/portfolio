'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/previous', label: 'Previous Careers' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow">
      <nav className="max-w-4xl mx-auto flex justify-between p-4">
        <span className="font-semibold text-xl">Michelle Stuart</span>
        <ul className="flex gap-4 text-sm">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link 
                href={href}
                className={
                  pathname === href
                    ? 'font-medium text-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}