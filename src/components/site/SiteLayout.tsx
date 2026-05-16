import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileCtaBar } from "./MobileCtaBar";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
