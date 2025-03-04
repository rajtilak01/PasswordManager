import { ArrowRight } from "lucide-react";
import { SecurityFeature } from "./SecurityFeature";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Security(){
    return (
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
    )
}