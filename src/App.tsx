import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { AutoChatPage } from "./components/AutoChatPage";
import { AutoCheckPage } from "./components/AutoCheckPage";
import { AutoScanPage } from "./components/AutoScanPage";
import { AutoCompanionPage } from "./components/AutoCompanionPage";
import { SettingsPage } from "./components/SettingsPage";

function RequireAuth({ children }: { children: React.ReactNode }) {
  // Add your authentication logic here
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    const from = (location.state as any)?.from?.pathname || "/autochat";
    navigate(from);
  };

  const handleSignup = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/autochat");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case "/autoscan":
        return "AutoScan";
      case "/autochat":
        return "AutoChat";
      case "/autocheck":
        return "AutoCheck";
      case "/autocompanion":
        return "AutoCompanion";
      case "/settings":
        return "Settings";
      default:
        return "";
    }
  };

  if (location.pathname === "/login") {
    return (
      <LoginPage
        onLogin={handleLogin}
        onNavigateToSignup={() => navigate("/signup")}
      />
    );
  }

  if (location.pathname === "/signup") {
    return (
      <SignupPage
        onSignup={handleSignup}
        onNavigateToLogin={() => navigate("/login")}
      />
    );
  }

  return (
    <Layout
      currentPage={location.pathname.slice(1) as any}
      onNavigate={(page) => navigate(`/${page}`)}
      onLogout={handleLogout}
      pageTitle={getPageTitle(location.pathname)}
    >
      <Routes>
        <Route path="/autochat" index element={<AutoChatPage />} />
        <Route path="/autoscan" element={<AutoScanPage />} />
        <Route path="/autocheck" element={<AutoCheckPage />} />
        <Route path="/autocompanion" element={<AutoCompanionPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AppContent />} />
        <Route path="/signup" element={<AppContent />} />
        <Route path="/" element={<Navigate to="/autochat" replace />} />
        <Route
          path="/*"
          element={
            <RequireAuth>
              <AppContent />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
