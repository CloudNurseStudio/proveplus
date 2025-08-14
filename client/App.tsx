import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyNotice from "./pages/PrivacyNotice";
import CookieNotice from "./pages/CookieNotice";
import TermsOfUse from "./pages/TermsOfUse";
import Accessibility from "./pages/Accessibility";
import LegalWarning from "./pages/LegalWarning";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/cookie-notice" element={<CookieNotice />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/legal-warning" element={<LegalWarning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
