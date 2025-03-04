export default function TrustedBy() {
  return (
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
  );
}
