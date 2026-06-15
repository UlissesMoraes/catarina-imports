import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row lg:px-8">
        <p className="font-medium text-foreground">
          catarina <span className="font-light">IMPORTS</span>
        </p>
        <p>{company.address}</p>
        <p>
          © {new Date().getFullYear()} {company.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
