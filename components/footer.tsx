"use client";

import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-secondary mt-auto w-full">
      <div className="container px-4 py-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left w-full md:w-auto">
            <h3 className="font-bold text-lg">HomeBrew</h3>
            <p className="text-sm text-muted-foreground">
              Making technology accessible
            </p>
          </div>

          <div className="flex justify-center w-full md:w-auto">
            <div className="flex space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition cursor-pointer"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition cursor-pointer"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition cursor-pointer"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            © 2025 HomeBrew. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-y-2 gap-x-4 md:gap-6">
            <a href="#" className="hover:text-primary transition px-2 py-1">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition px-2 py-1">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition px-2 py-1">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
