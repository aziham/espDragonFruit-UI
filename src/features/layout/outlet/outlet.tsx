import { Routes } from '@/config/routes';
import { DashboardPage, HomePage, NotFoundPage, SettingsPage } from '@/pages';
import { Route, Switch } from 'wouter-preact';

export function Outlet() {
  return (
    <Switch>
      <Route path={Routes.home} component={HomePage} />
      <Route path={Routes.dashboard} component={DashboardPage} />
      <Route path={Routes.settings} component={SettingsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
