"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

function shouldStartTransition(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0) {
    return false;
  }
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }

  const target = event.target as HTMLElement | null;
  const link = target?.closest("a");
  if (!link) {
    return false;
  }
  if (link.target === "_blank" || link.hasAttribute("download")) {
    return false;
  }

  const href = link.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  const next = new URL(link.href, window.location.href);
  const current = new URL(window.location.href);
  if (next.origin !== current.origin) {
    return false;
  }
  if (next.pathname === current.pathname && next.search === current.search) {
    return false;
  }

  return true;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!shouldStartTransition(event)) {
        return;
      }
      document.documentElement.classList.add("route-is-changing");
    }

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.documentElement.classList.remove("route-is-changing");
    };
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      document.documentElement.classList.remove("route-is-changing");
    }, 340);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div className="route-transition-root">
      <div key={pathname} className="route-frame">
        {children}
      </div>
      <div className="route-curtain" aria-hidden="true" />
      <div className="route-progress" aria-hidden="true" />
    </div>
  );
}
