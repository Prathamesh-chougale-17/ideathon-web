"use client";

import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 mt-auto w-full border-t border-border/40">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              HomeBrew
            </h3>
            <p className="text-sm text-muted-foreground/80 max-w-xs leading-relaxed">
              Making technology accessible and empowering developers to build
              the future.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                Live
              </a>
              <a
                href="#"
                className="text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                History
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Resources
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                API Reference
              </a>
              <a
                href="#"
                className="text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                Support
              </a>
              <a
                href="#"
                className="text-muted-foreground/80 hover:text-primary transition-all duration-200 hover:translate-x-1"
              >
                Community
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground/80">
              Subscribe to our newsletter for updates and news.
            </p>
            <form
              className="flex flex-col space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
              />
              <Button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 py-4">
          <p className="text-sm text-muted-foreground/70">
            © 2025 HomeBrew. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground/70 hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground/70 hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground/70 hover:text-primary transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
