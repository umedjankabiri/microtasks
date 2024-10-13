import {createBrowserRouter} from "react-router-dom";
import {PATH, RoutingApp} from "common/components/Routing/Pages/RoutingApp.tsx";
import {Error404} from "common/components/Routing/Error/Error404.tsx";
import {Adidas} from "common/components/Routing/Pages/Adidas.tsx";
import {PB} from "common/components/Routing/Pages/PB.tsx";
import {Puma} from "common/components/Routing/Pages/Puma.tsx";
import {Prices} from "common/components/Routing/Pages/Prices.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RoutingApp />,
        errorElement: <Error404 />,
        children: [
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
            }
        ]
    }
])
