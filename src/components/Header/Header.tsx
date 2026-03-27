"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";
import { siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";
import styles from "./Header.module.css";
import { menuItems } from "@/src/lib/menuItems";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Helper to check if a nav item is active
    const isActive = (href: string) => {
        // Exact match or startsWith for nested routes
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const getClassName = (href: string) => isActive(href) ? `${styles.navLink} ${styles.activeNavLink}` : `${styles.navLink}`;

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.inner}>
                    {/* Logo */}
                    <Link href={routes.home} className={styles.logoLink}>
                        <Image src="/no-text-logo.png" alt={siteContent.header.logoAlt} width={667} height={164} className={styles.logo} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <Link
                            href={menuItems.services.href}
                            className={getClassName(menuItems.services.href)}
                        >
                            {menuItems.services.label}
                        </Link>
                        <Link
                            href={menuItems.about.href}
                            className={getClassName(menuItems.about.href)}
                        >
                            {menuItems.about.label}
                        </Link>
                        <Link
                            href={menuItems.contact.href}
                            className={getClassName(menuItems.contact.href)}
                        >
                            {menuItems.contact.label}
                        </Link>
                        <Link
                            href={menuItems.office.href}
                            className={styles.ctaLink}
                        >
                            {menuItems.office.label}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.menuButton}
                        onClick={() => toggleMenu()}
                    >
                        {mobileMenuOpen ? <X size={28} className={styles.menuIconOpen} strokeWidth={2.5} /> : <Menu size={28} className={styles.menuIcon} strokeWidth={2.5} />}
                    </button>
                </div>
                <MobileNavigation mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu} />
            </nav>
        </header>
    );
};