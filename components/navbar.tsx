'use client'

import Image from "next/image"
import { useState } from "react"
import fromage_1 from '@/public/fromage_1.png'
import {
    Navbar,
    NavBody, 
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from '@/components/ui/resizable-navbar'
import Link from "next/link"

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navItems = [
        {
            name: "Reservations",
            link: "/reservations"
        },
        {
            name: "Menu",
            link: "/menu"
        },
        {
            name: "Order Online",
            link: "/order-online"
        },
        {
            name: "Wine Tasting",
            link: "/wine-tasting"
        },
        {
            name: 'Catering',
            link: '/catering'
        }
    ]
    return (
        <div className=" w-full p-2 border-border sticky top-0 z-50 ">
            <Navbar>
                <NavBody>
                    <NavbarLogo/>
                    <NavItems items={navItems} className="text-lg font-serif" />
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo/>
                        <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

                    </MobileNavHeader>
                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={()=> setIsMobileMenuOpen(false)} className="bg-background">
                        {navItems.map((item, idx) => (
                            <Link
                            key={idx}
                            href={item.link}
                            className="relative font-serif"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                    </MobileNavMenu>

                </MobileNav>
            </Navbar>
        </div>
    )
}
