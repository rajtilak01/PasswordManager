import { Eye, Fingerprint, Globe, Lock, RefreshCw, Smartphone } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export default function Features() {
    return (
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
    )
}