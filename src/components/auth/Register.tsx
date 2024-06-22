import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Register = () => {
  return (
    <Auth submitLabel="Signup" onSubmit={async () => { }}>
      <Link to="/login" style={{ display: "flex", justifyContent: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Register;
