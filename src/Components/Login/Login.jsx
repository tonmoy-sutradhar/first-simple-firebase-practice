import { GoogleAuthProvider } from "firebase/auth/web-extension";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    console.log("Google coming soon");
  };

  return (
    <div className="text-center mt-8">
      <button onClick={handleGoogle} className="btn btn-primary ">
        Login in Google
      </button>
    </div>
  );
};

export default Login;
