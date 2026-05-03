import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Academic from "./pages/Academic";
import Review from "./pages/Review";
import Policies from "./pages/Policies";
import Mentors from "./pages/Mentors";
import Guide from "./pages/Guide";
import Calendar from "./pages/Calendar";
import MentorDetail from "./pages/MentorDetail";

function Router() {
  const { user } = useAuth();

  // 如果未登录，只显示登录页
  if (!user) {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    );
  }

  // 已登录，显示完整应用
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/academic" component={Academic} />
            <Route path="/review" component={Review} />
            <Route path="/policies" component={Policies} />
            <Route path="/mentors" component={Mentors} />
            <Route path="/mentor/:id" component={MentorDetail} />
            <Route path="/guide" component={Guide} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/404" component={NotFound} />
            {/* Final fallback route */}
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

// NOTE: About Theme
// - Design: Academic Modernism - Light theme with HUST Sociology blue primary color
// - Color palette in index.css uses light background with deep blue accents
// - Theme is not switchable to maintain consistent academic aesthetic

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
