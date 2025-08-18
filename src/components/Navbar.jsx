import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#what-we-fix", label: "What We Fix" },
  { href: "#mail-service", label: "Mail Service" },
  { href: "#repairs", label: "Repairs" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navigationLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = link.href.replace("#", "");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(href.replace("#", ""));
  };

  return (
    <header className="sticky top-0 z-50 border-b px-4 md:px-6 w-full lg:px-24 xl:px-32 bg-black text-white">
      <div className="flex h-20 justify-between gap-4">
        {/* Left side */}
        <div className="flex gap-2">
          {/* Mobile menu */}
          <div className="flex items-center md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group size-8" variant="ghost" size="icon">
                  {/* burger icon */}
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-in-out group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-in-out group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-in-out group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-36 p-2 bg-card border-1 border-secondary md:hidden"
              >
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-1 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem
                        key={index}
                        className="w-full  transition-colors duration-200"
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleClick(e, link.href)}
                          className={`py-1.5 w-full block border-primary
                            ${
                              activeSection === link.href.replace("#", "")
                                ? "text-red-500 border-b-2 border-b-red-500"
                                : "text-white"
                            }
                            hover:text-secondary`}
                        >
                          {link.label}
                        </a>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center gap-8">
            <a href="#home" onClick={(e) => handleClick(e, "#home")}>
              <Logo />
            </a>
            <NavigationMenu className="h-full max-md:hidden">
              <NavigationMenuList className="h-full flex gap-4">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem
                    key={index}
                    className="h-[90%] font-semibold"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className={`text-white hover:text-secondary 
                        border-b-2 border-transparent hover:border-b-secondary 
                        ${
                          activeSection === link.href.replace("#", "")
                            ? "text-red-500 border-b-red-500"
                            : ""
                        }
                        bg-transparent active:bg-transparent focus:bg-transparent 
                        h-full justify-center rounded-none py-1.5 font-medium hover:bg-transparent`}
                    >
                      {link.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="text-sm bg-secondary text-gray-300 py-4 hover:text-secondary"
          >
            <a
              href="#mail-service"
              onClick={(e) => handleClick(e, "#mail-your-device")}
            >
              Mail Your Device
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
