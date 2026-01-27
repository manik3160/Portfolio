"use client";
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
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skill",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 relative z-50">
            <NavbarButton
              variant="primary"
              onClick={() => {
                window.open('https://drive.google.com/file/d/18VpGX0WNHlYGcckDOQ42bMDj-QZPdUPk/view?usp=sharing', '_blank', 'noopener,noreferrer');
              }}
            >
              Download CV
            </NavbarButton>
          </div>
        </NavBody>

        {}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1o0xG18U9PpTD7-j9Q6k7GEv8aVvUPgxy/view?usp=sharing', '_blank', 'noopener,noreferrer');
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full"
              >
                Download CV
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {}
    </div>
  );
}
