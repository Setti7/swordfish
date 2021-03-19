export const LoginCard = () => {
  return (
    <div className="border-2 border-accent">
      <div className="flex flex-col justify-items-stretch px-4 py-6">
        <div className="text-center text-primary-100">
          <p className="text-4xl font-bold mb-2">Create account</p>
          <p>
            Already have an account?{" "}
            <a className="hover:underline text-accent" href="#">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
