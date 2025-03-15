"use client";
import { Shield } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const branding = (
    <div className="flex items-center gap-2">
      <Shield className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold">SecureVault</span>
    </div>
  );

  if (!user) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {branding}
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
            <Link href="#security" className="text-sm font-medium hover:text-primary">Security</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">FAQ</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary">Log in</Link>
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16">
        {branding}
        <nav className="flex items-center gap-4">
        <ThemeToggle />
          <Button variant="ghost" onClick={() => router.push('/dashboard')}>Settings</Button>
          <Button variant="outline" onClick={logout}>Log Out</Button>
        </nav>
      </div>
    </header>
  );
}
