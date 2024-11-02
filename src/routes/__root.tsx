import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { Home as HomeIcon, Info as InfoIcon } from '@mui/icons-material';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="flex space-x-6 p-4 bg-purple-600 text-white shadow-md">
        <Link to="/" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition">
          <HomeIcon fontSize="small" />
          <span>Home</span>
        </Link>
        <Link to="/about" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition">
          <InfoIcon fontSize="small" />
          <span>About</span>
        </Link>
      </nav>
      <Outlet />
    </>
  ),
});
