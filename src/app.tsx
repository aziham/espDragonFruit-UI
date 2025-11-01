import { Link } from '@/components/link';
import { Routes } from '@/config/routes';
import { DashboardPage, HomePage, NotFoundPage, SettingsPage } from '@/pages';
import { Info, RouteIcon } from 'lucide-preact';
import { Route, Switch } from 'wouter-preact';

export default function App() {
  return (
    <>
      <nav className='navbar mt-5 flex justify-center'>
        <ul className='flex gap-5'>
          {Object.entries(Routes).map(([name, url]) => (
            <li>
              <Link
                className='flex gap-2'
                activeClassName='border-b pb-1'
                to={url}
              >
                <RouteIcon /> {name.toUpperCase()}
              </Link>
            </li>
          ))}
          <li>
            <Link to='/about' className='flex gap-2'>
              {' '}
              <Info /> About
            </Link>
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
