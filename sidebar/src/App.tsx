export default function App() {
  return (
    <aside className="min-h-screen h-full bg-gray-800 text-gray-100 p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
        Sidebar
      </h2>
      <NavLink href="/page1">📄 Page 1</NavLink>
      <NavLink href="/page2">📄 Page 2</NavLink>
    </aside>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isActive =
    typeof window !== 'undefined' && window.location.pathname.startsWith(href);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use single-spa navigation if available (integrated mode),
    // otherwise fall back to regular navigation (standalone mode)
    try {
      // const singleSpa = (window as any).__SINGLE_SPA_DEVTOOLS__ || (window as any).System;
      // simplest approach: history.pushState + popstate event
      history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`block px-3 py-2 rounded text-sm transition-colors ${
        isActive
          ? 'bg-indigo-600 text-white'
          : 'hover:bg-gray-700 text-gray-300'
      }`}
    >
      {children}
    </a>
  );
}
