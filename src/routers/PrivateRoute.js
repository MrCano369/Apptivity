import { Redirect, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "./routes";

export default function PrivateRoute(props) {
  const { isLogged } = useAuth();
  if (!isLogged()) return <Redirect to={routes.login} />;
  return <Route {...props} />;
}
