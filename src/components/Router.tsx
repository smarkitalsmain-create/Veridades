import React, { createContext, useContext, useState, useEffect } from "react";

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => {
    // Check current pathname or default to "/"
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return "/";
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname || "/");
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handleLocationChange);
    // Custom event to handle programatic navigation within the app
    window.addEventListener("navstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("navstate", handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", to);
      const navEvent = new Event("navstate");
      window.dispatchEvent(navEvent);
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function usePath() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("usePath must be used within a RouterProvider");
  }
  return context.path;
}

export function useNavigate() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useNavigate must be used within a RouterProvider");
  }
  return context.navigate;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  key?: string | number;
  [key: string]: any;
}

export function Link({ to, children, onClick, ...props }: LinkProps) {
  const { navigate } = useContext(RouterContext) || { navigate: () => {} };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  const isActive = typeof window !== "undefined" && window.location.pathname === to;

  return (
    <a
      href={to}
      onClick={handleClick}
      data-active={isActive ? "true" : "false"}
      {...props}
    >
      {children}
    </a>
  );
}
