import { useCallback, useEffect, useState } from 'react';
import { pathToRoute, routeToPath, type RouteId } from '@/lib/routes';

function currentPath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function useRouter() {
  const [route, setRoute] = useState<RouteId>(() => pathToRoute(currentPath()));

  useEffect(() => {
    const onChange = () => setRoute(pathToRoute(currentPath()));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((id: RouteId) => {
    const path = routeToPath(id);
    if (currentPath() !== path) {
      window.location.hash = path;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { route, navigate };
}

export type NavigateFn = (id: RouteId) => void;
