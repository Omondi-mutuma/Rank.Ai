import Link from "next/link";
import Button from "./components/ui/Button";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center ">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
      <p className="mt-2 text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link href="/" passHref className="mt-5">
        <Button className=" px-4 py-2 text-white bg-green-600 hover:bg-blue-700 transition rounded-[12px]">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
