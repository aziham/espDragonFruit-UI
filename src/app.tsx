import { Route, Switch, Link } from 'wouter-preact';
import { Routes } from '@/config/routes';
import { NotFoundPage, HomePage, DashboardPage, SettingsPage } from '@/pages';

export default function App() {
  return (
    <>
      <nav className='navbar mt-5 flex justify-center'>
        <ul className='flex gap-5'>
          {Object.entries(Routes).map(([name, url]) => (
            <li>
              <Link className={(active) => active && 'underline'} href={url}>
                {name.toUpperCase()}
              </Link>
            </li>
          ))}
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <main className='mt-32 text-7xl flex justify-center'>
        <Outlet />
      </main>
    </>
  );
}

function Outlet() {
  return (
    <Switch>
      <Route path={Routes.home} component={HomePage} />
      <Route path={Routes.dashboard} component={DashboardPage} />
      <Route path={Routes.settings} component={SettingsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
