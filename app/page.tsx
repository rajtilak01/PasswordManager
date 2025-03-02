import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Lock, Smartphone, Globe, CheckCircle2, ArrowRight, Eye, RefreshCw, Fingerprint } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { FeatureCard } from "@/components/FeatureCard"
import { SecurityFeature } from "@/components/SecurityFeature"
import { TestimonialCard } from "@/components/TestimonialCard"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SecureVault</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#security" className="text-sm font-medium hover:text-primary">
              Security
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                Secure Your Digital Life with One Master Password
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Store, generate, and auto-fill passwords across all your devices with military-grade encryption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Try for Free
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  See How It Works
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="SecureVault Password Manager Dashboard"
                  width={800}
                  height={600}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">256-bit Encryption</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-background rounded-lg p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Zero-Knowledge Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">
              TRUSTED BY THOUSANDS OF BUSINESSES AND INDIVIDUALS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-24 bg-muted rounded opacity-50"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Everything You Need in a Password Manager</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                SecureVault combines security with convenience to give you the best password management experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Lock />}
                title="Password Generator"
                description="Create strong, unique passwords with our advanced generator. Customize length and character types."
              />
              <FeatureCard
                icon={<Globe />}
                title="Auto-Fill"
                description="Save time with automatic form filling on websites and apps. Works across all major browsers."
              />
              <FeatureCard
                icon={<Smartphone />}
                title="Cross-Device Sync"
                description="Access your passwords on all your devices. Changes sync automatically and securely."
              />
              <FeatureCard
                icon={<Eye />}
                title="Password Health Check"
                description="Identify weak, reused, or compromised passwords and get suggestions to improve them."
              />
              <FeatureCard
                icon={<RefreshCw />}
                title="Automatic Updates"
                description="Keep your passwords up-to-date with automatic password changing for supported websites."
              />
              <FeatureCard
                icon={<Fingerprint />}
                title="Biometric Authentication"
                description="Unlock your vault quickly and securely with fingerprint or face recognition."
              />
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-20 md:py-32 bg-muted">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Bank-Level Security for Your Passwords</h2>
                <p className="text-lg text-muted-foreground">
                  Your data is encrypted with AES-256, the same encryption standard used by banks and military
                  organizations worldwide.
                </p>
                <ul className="space-y-4">
                  <SecurityFeature title="Zero-Knowledge Architecture">
                    We can't see your passwords. Your data is encrypted and decrypted locally on your device.
                  </SecurityFeature>
                  <SecurityFeature title="Two-Factor Authentication">
                    Add an extra layer of security to your account with 2FA using authenticator apps or security keys.
                  </SecurityFeature>
                  <SecurityFeature title="Biometric Authentication">
                    Unlock your vault with your fingerprint or face on supported devices for quick, secure access.
                  </SecurityFeature>
                </ul>
                <Button variant="outline" className="gap-2">
                  Learn More About Our Security <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 relative">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="SecureVault Security"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Join thousands of satisfied users who have improved their online security with SecureVault.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="SecureVault has completely transformed how I manage my online accounts. I no longer worry about forgetting passwords or using weak ones."
                author="Sarah J."
                role="Marketing Director"
              />
              <TestimonialCard
                quote="As a tech professional, security is my top priority. SecureVault offers the perfect balance of security and usability that I haven't found elsewhere."
                author="Michael T."
                role="Software Engineer"
              />
              <TestimonialCard
                quote="Managing passwords for my entire family was a nightmare until we started using SecureVault. Now everyone has secure access to their accounts."
                author="Lisa M."
                role="Parent & Educator"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Secure Your Digital Life?</h2>
            <p className="text-xl max-w-[800px] mx-auto opacity-90">
              Join thousands of users who trust SecureVault to protect their passwords and sensitive information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-primary-foreground text-foreground" />
              <Button variant="secondary" size="lg">
                Get Started Free
              </Button>
            </div>
            <p className="text-sm opacity-80">Free plan includes basic features. No credit card required.</p>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">SecureVault</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Secure password management for individuals and businesses.
              </p>
              <div className="flex gap-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <Link key={social} href={`#${social}`} className="text-muted-foreground hover:text-primary">
                    <div className="h-5 w-5 rounded-full bg-muted"></div>
                    <span className="sr-only">{social}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                {["Features", "Security", "Pricing", "Business", "Enterprise"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                {["Blog", "Help Center", "Contact", "Partners", "Developers"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {["About", "Careers", "Press", "Legal", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SecureVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}




