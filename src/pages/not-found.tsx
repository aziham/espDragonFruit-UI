import { useEffect } from 'preact/hooks';
import { useLocation } from 'wouter-preact';

export function NotFoundPage() {
  const [location, navigate] = useLocation();
  const notFoundUrl = '/404';

  useEffect(() => {
    if (location !== notFoundUrl) navigate(notFoundUrl);
  }, [location, navigate]);

  return <div>404!</div>;
}
