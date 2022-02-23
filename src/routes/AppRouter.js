import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Admin from "../components/Admin"
import Index from "../components/Index"
import LoginForm from "../components/LoginForm"
import Menu from "../components/Menu"
import NotFound from "../components/NotFound"
import Secret from "../components/Secret"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"


export default function AppRouter() {
    return (
        <Router>
            <Menu />
            <Switch>
                <PrivateRoute exact path="/secret" component={Secret} />
                <PrivateRoute exact path="/admin" component={Admin} />
                <PublicRoute exact path="/login" component={LoginForm} />
                <Route exact path="/" component={Index} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}