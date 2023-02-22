import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';
import Bookings from '../pages/Bookings';
import Dashboard from '../pages/Dashboard';
import Experts from '../pages/Experts';
import Guests from '../pages/Guests';
import Members from '../pages/Members';
import Rooms from '../pages/Rooms';
import Users from '../pages/Users';




export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/members" />, index: true },
        { path: 'users', element: <Users /> },
        { path: 'experts', element: <Experts /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'members', element: <Members /> },
        { path: 'bookings', element: <Bookings /> },
        { path: 'rooms', element: <Rooms /> },
        // { path: 'guests', element: <Guests /> },






      ],
    },
    
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}