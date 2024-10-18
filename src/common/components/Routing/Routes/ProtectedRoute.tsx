import {Navigate, Outlet} from "react-router-dom";
import {PATH} from "common/components/Routing/RoutingApp.tsx";

export const ProtectedRoute = () => {
    const isAuth: boolean = false;

    return isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
};
