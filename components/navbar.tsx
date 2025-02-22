"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, History, Radio } from "lucide-react";
import Link from "next/link";
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
    <div className="fixed top-0 w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-[60px] md:h-16">
      <div className="flex items-center">
        <h1 className="text-lg md:text-xl font-bold">HomeBrew</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-x-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
              pathname === route.href
                ? "text-primary bg-primary/10"
                : "text-zinc-400"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className="h-5 w-5 mr-3" />
              {route.label}
            </div>
          </Link>
        ))}
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent side="right" className="w-[280px] p-0 bg-secondary">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-y-3 px-3 py-4 h-full">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-primary bg-primary/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className="h-5 w-5 mr-3" />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
