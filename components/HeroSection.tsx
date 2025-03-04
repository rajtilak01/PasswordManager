import { CheckCircle2, Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function HeroSection(){
    return (
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
    )
}