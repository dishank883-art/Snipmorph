import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import UrbanWearHome from "@/pages/urbanwear-home";
import UrbanWearWomen from "@/pages/urbanwear-women";
import UrbanWearMen from "@/pages/urbanwear-men";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/urbanwear" component={UrbanWearHome} />
      <Route path="/urbanwear/women" component={UrbanWearWomen} />
      <Route path="/urbanwear/men" component={UrbanWearMen} />
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
