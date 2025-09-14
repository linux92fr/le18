import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackButton from "@/components/BackButton";
import ScrollToTop from "@/components/ScrollToTop";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
            <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
            <a href="/" className="text-primary underline hover:text-primary/80">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default NotFound;
