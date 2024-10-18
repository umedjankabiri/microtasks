import {ReactNode} from "react";
import {ProtectedPage} from "common/components/Routing/Pages/ProtectedPage.tsx";
import {Error404} from "common/components/Routing/Pages/Error/Error404.tsx";

type ProtectedRouteProps = {
    children: ReactNode;
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
    const isLoading = props.children ? <ProtectedPage/> : <Error404 />

    return (
        <div>
            {isLoading}
        </div>
    );
};
