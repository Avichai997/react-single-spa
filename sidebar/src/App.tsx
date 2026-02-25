import { useState, useEffect, ReactNode, MouseEvent } from 'react';

const usePathname = () => {
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
};

export default function App() {
  return (
    <aside className='flex min-h-screen w-[16rem] flex-col gap-2 bg-gray-800 p-4 text-gray-100'>
      <h2 className='mb-4 border-b border-gray-600 pb-2 text-lg font-semibold'>Sidebar</h2>
      <NavLink href='/page1'>📄 Page 1</NavLink>
      <NavLink href='/page2'>📄 Page 2</NavLink>
      <NavLink href='/page3'>📄 Page 3</NavLink>
      <NavLink href='/cloud'>☁️ Cloud</NavLink>
    </aside>
  );
}

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    history.pushState(null, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`block rounded px-3 py-2 text-sm transition-colors ${
        isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'
      }`}
    >
      {children}
    </a>
  );
};
