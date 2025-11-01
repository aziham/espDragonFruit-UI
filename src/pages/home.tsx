import { Routes } from '@/config/routes';
import { Redirect } from 'wouter-preact';

export function HomePage() {
  return <Redirect to={Routes.dashboard} replace />;
}
