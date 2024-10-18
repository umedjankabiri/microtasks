import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import {PATH, RoutingApp} from "common/components/Routing/RoutingApp.tsx";
import {Error404} from "common/components/Routing/Pages/Error/Error404.tsx";
import {Adidas} from "common/components/Routing/Pages/Adidas.tsx";
import {PB} from "common/components/Routing/Pages/PB.tsx";
import {Puma} from "common/components/Routing/Pages/Puma.tsx";
import {Prices} from "common/components/Routing/Pages/Prices.tsx";
import {ProtectedPage} from "common/components/Routing/Pages/ProtectedPage.tsx";
import {Login} from "common/components/Routing/Pages/Login.tsx";
import {ProtectedRoute} from "common/components/Routing/Routes/ProtectedRoute.tsx";

const publicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Adidas/>
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>
    },
    {
        path: PATH.PB,
        element: <PB/>
    },
    {
        path: PATH.PUMA,
        element: <Puma/>
    },
    {
        path: PATH.PRICES,
        element: <Prices/>
    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
    {
        path: PATH.ERROR404,
        element: <Error404/>
    }
]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedPage/>
    },
]

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RoutingApp/>,
        errorElement: <Navigate to={PATH.ERROR404} />,
        children: [
            {
                element: <ProtectedRoute/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    }
])
