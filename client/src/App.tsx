import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import UrbanWearHome from "@/pages/urbanwear-home";
import UrbanWearProducts from "@/pages/urbanwear-products";
import UrbanWearImpact from "@/pages/urbanwear-impact";
import UrbanWearAbout from "@/pages/urbanwear-about";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/urbanwear" component={UrbanWearHome} />
      <Route path="/urbanwear/products" component={UrbanWearProducts} />
      <Route path="/urbanwear/impact" component={UrbanWearImpact} />
      <Route path="/urbanwear/about" component={UrbanWearAbout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
