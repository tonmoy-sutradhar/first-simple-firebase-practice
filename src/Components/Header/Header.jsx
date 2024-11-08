import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center text-2xl font-bold ">
      <NavLink className="mr-4" to="/">
        Home
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Header;
