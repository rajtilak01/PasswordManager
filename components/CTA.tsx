import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CTA() {
    return (
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
    )
}