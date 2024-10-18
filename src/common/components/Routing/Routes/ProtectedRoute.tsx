import {ReactNode} from "react";
import { Navigate } from "react-router-dom";
import {PATH} from "common/components/Routing/RoutingApp.tsx";

type ProtectedRouteProps = {
    children: ReactNode;
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
    const isLoading = props.children
        ? props.children
        : <Navigate to={PATH.ERROR404}/>

    return (
        <div>
            {isLoading}
        </div>
    );
};
