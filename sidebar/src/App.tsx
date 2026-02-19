import { useState, useEffect } from 'react';

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const update = () => setPathname(window.location.pathname);

    // single-spa fires these on route changes
    window.addEventListener('popstate', update);
    window.addEventListener('single-spa:routing-event', update);

    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('single-spa:routing-event', update);
    };
  }, []);

  return pathname;
}

export default function App() {
  return (
    <aside className="min-h-screen h-full bg-gray-800 text-gray-100 p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
        Sidebar
      </h2>
      <NavLink href="/page1">📄 Page 1</NavLink>
      <NavLink href="/page2">📄 Page 2</NavLink>
      <NavLink href="/page3">📄 Page 3</NavLink>
    </aside>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.pushState(null, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
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
