import { Shield } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
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
    )
}