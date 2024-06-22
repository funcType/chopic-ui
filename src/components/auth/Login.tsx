import { Link } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";
import Auth from "./Auth";

const Login = () => {
  return (
    <div>
      <Auth submitLabel="Login" onSubmit={async () => { }}>
        <Link to="/signup" style={{ display: "block", textAlign: "center" }}>
          <MaterialLink>Signup</MaterialLink>
        </Link>
      </Auth>
    </div>
  );
};

export default Login;
