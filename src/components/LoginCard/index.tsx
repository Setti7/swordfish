import { Button } from "../Button";
import { Spinner } from "../Spinner";

export const LoginCard = () => {
  return (
    <div
      className="
        max-w-md
        bg-white rounded-xl
        flex flex-col px-4 py-6"
    >
      {/* Header */}
      <div className="text-center text-primary-text">
        <p className="text-4xl font-bold mb-2">Create account</p>
        <p>
          Already have an account?{" "}
          <a className="font-semibold hover:underline text-accent" href="#">
            Sign in
          </a>
        </p>
      </div>

      {/* Fields */}
      <div className="mt-6 flex flex-col space-y-4">
        <input
          placeholder="Username"
          id="username"
          className="
            p-3
            transition duration-300 
            rounded-md bg-gray-100 placeholder-gray-700
            focus:border-gray-500 focus:bg-white 
            focus:ring-2 focus:outline-none focus:ring-primary"
        />
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <div className="flex flex-row">
          <input
            placeholder="First name"
            id="first-name"
            className="
            p-3 mr-2 
            w-1/2
            transition duration-300 
            rounded-md bg-gray-100 placeholder-gray-700
            focus:border-gray-500 focus:bg-white 
            focus:ring-2 focus:outline-none focus:ring-primary"
          />
          <label htmlFor="first-name" className="sr-only">
            First name
          </label>
          <input
            placeholder="Last name"
            id="last-name"
            className="
            p-3 
            w-1/2
            transition duration-300 
            rounded-md bg-gray-100 placeholder-gray-700
            focus:border-gray-500 focus:bg-white 
            focus:ring-2 focus:outline-none focus:ring-primary"
          />
          <label htmlFor="last-name" className="sr-only">
            Last name
          </label>
        </div>
        <input
          placeholder="Email"
          id="email"
          className="
            p-3
            transition duration-300 
            rounded-md bg-gray-100 placeholder-gray-700
            focus:border-gray-500 focus:bg-white 
            focus:ring-2 focus:outline-none focus:ring-primary"
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
      </div>

      {/* Sign up button */}
      {/* TODO: Add loading animation when clicking on button */}
      <Button className="mt-3 flex justify-center relative">
        <span>Sign up</span>
        <svg
          className="absolute right-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          height={20}
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      {/* Add checkbox for consent */}
      <div className="mt-6 mb-3 flex flex-row justify-items-center">
        <input
          type="checkbox"
          id="consent-check"
          className="mr-3
          h-5 w-5 rounded-md
          bg-gray-200 border-none checked:bg-accent-600 checked:border-transparent focus:outline-none"
        ></input>
        <label htmlFor="consent-check" className="text-sm text-gray-600">
          I have read and agree to the{" "}
          <a className="font-semibold hover:underline text-accent" href="#">
            Terms of Service
          </a>
        </label>
      </div>
    </div>
  );
};
