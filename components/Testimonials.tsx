import { TestimonialCard } from "./TestimonialCard";

export default function Testimonials () {
    return (
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
    )
}