import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}
export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      id="error-page"
    >
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800 animate-bounce">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600">
          Oops! {error.statusText || error.message}
        </p>
        <p className="mt-2 text-md text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        {/* Redirect Button */}
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded shadow hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
