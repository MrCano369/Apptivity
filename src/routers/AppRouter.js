import { Route, Switch } from "react-router-dom";
import Activities from "../pages/Activities";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "./routes";

export default function AppRouter() {
    return (
        <Switch>
            <PublicRoute exact path={routes.home} component={Home}></PublicRoute>
            <PublicRoute exact path={routes.login} component={Login}></PublicRoute>
            <PublicRoute exact path={routes.register} component={Register}></PublicRoute>
            <PrivateRoute exact path={routes.activities} component={Activities}></PrivateRoute>

            <Route path="*" component={NotFound}/>
        </Switch>
    )
}
