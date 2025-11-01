import { Redirect } from 'wouter-preact';
import { Routes } from '@/config/routes';

export function HomePage() {
  return <Redirect to={Routes.dashboard} replace />;
}
