"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, History, Radio } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ModeToggle from "./darkmode";

const routes = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Live",
    icon: Radio,
    href: "/live",
  },
  {
    label: "History",
    icon: History,
    href: "/history",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-b from-background/80 to-background/40 dark:from-background/90 dark:to-background/50 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <Image
                  src="/HomeBrew.png"
                  alt="HomeBrew Logo"
                  width={60}
                  height={60}
                  className="object-contain transition-all duration-300 group-hover:scale-110 dark:invert dark:invert-0"
                />
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-primary to-blue-500 dark:from-purple-400 dark:via-primary dark:to-blue-400 bg-clip-text text-transparent group-hover:opacity-80 transition-all duration-300">
                  HomeBrew
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  "hover:bg-accent hover:text-accent-foreground",
                  "group flex items-center gap-2",
                  pathname === route.href
                    ? "bg-accent/80 text-accent-foreground shadow-sm dark:bg-accent/50"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <route.icon
                  className={cn(
                    "h-4 w-4 transition-all duration-300",
                    "group-hover:scale-110 group-hover:rotate-3",
                    pathname === route.href && "text-primary"
                  )}
                />
                <span>{route.label}</span>
                {pathname === route.href && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0" />
                )}
              </Link>
            ))}
            <div className="ml-6 pl-6 border-l border-border/50">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <div className="flex items-center gap-4 md:hidden">
              <ModeToggle />
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="w-[280px] p-0 bg-background/95 backdrop-blur-xl border-l border-border/50"
            >
              <SheetHeader className="p-6 border-b border-border/50">
                <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-primary to-blue-500 dark:from-purple-400 dark:via-primary dark:to-blue-400 bg-clip-text text-transparent">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-y-3 px-4 py-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                      "hover:bg-accent hover:text-accent-foreground",
                      pathname === route.href
                        ? "bg-accent/80 text-accent-foreground dark:bg-accent/50"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <route.icon
                      className={cn(
                        "h-5 w-5",
                        pathname === route.href && "text-primary"
                      )}
                    />
                    <span className="font-medium">{route.label}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
