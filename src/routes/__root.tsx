import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="flex space-x-4 p-4 bg-blue-500 text-white">
        <Link to="/" activeProps={activeProps}>
          Home
        </Link>
        <Link to="/about" activeProps={activeProps}>
          About
        </Link>
      </nav>
      <Outlet />
    </>
  ),
});
