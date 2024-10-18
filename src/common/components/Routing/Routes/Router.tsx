import {createBrowserRouter} from "react-router-dom";
import {PATH, RoutingApp} from "common/components/Routing/RoutingApp.tsx";
import {Error404} from "common/components/Routing/Pages/Error/Error404.tsx";
import {Adidas} from "common/components/Routing/Pages/Adidas.tsx";
import {PB} from "common/components/Routing/Pages/PB.tsx";
import {Puma} from "common/components/Routing/Pages/Puma.tsx";
import {Prices} from "common/components/Routing/Pages/Prices.tsx";
import {Brand} from "common/components/Routing/Pages/Brand.tsx";
import {ProtectedPage} from "common/components/Routing/Pages/ProtectedPage.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RoutingApp/>,
        errorElement: <Error404/>,
        children: [
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
                path: PATH.PROTECTED,
                element: <ProtectedPage/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            },
            {
                path: `${PATH.BRAND}${PATH.ID}`,
                element: <Brand/>
            }
        ]
    }
])
