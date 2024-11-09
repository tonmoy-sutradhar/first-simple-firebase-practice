import { GoogleAuthProvider, signOut } from "firebase/auth";
import auth from "./../../Firebase/Firebase.init";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR-->", error);
        setUser(null);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log("Error LogOut", error);
      });
  };

  return (
    <div className="text-center mt-8">
      {/* <button onClick={handleGoogle} className="btn btn-primary ">
        Login in Google
      </button>
      <button onClick={handleLogOut} className="btn btn-primary ml-6 ">
        LogOut in Google
      </button> */}

      {user ? (
        <button onClick={handleLogOut} className="btn btn-primary ml-6 ">
          LogOut in Google
        </button>
      ) : (
        <button onClick={handleGoogle} className="btn btn-primary ">
          Login in Google
        </button>
      )}

      {user && (
        <div>
          <h3 className="text-2xl font-bold text-white mt-2">
            {user.displayName}
          </h3>
          <p className="text-xl font-bold text-white">{user.email}</p>
          <img
            className="ml-[710px] mt-4"
            src={user.photoURL}
            alt="user.photoURL"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
