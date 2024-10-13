import {createBrowserRouter} from "react-router-dom";
import {PATH, RoutingApp} from "common/components/Routing/RoutingApp.tsx";
import {Error404} from "common/components/Routing/Pages/Error/Error404.tsx";
import React, {lazy, Suspense} from "react";

const Adidas = lazy(() =>
    import('common/components/Routing/Pages/Adidas') as unknown as Promise<{ default: React.ComponentType<any> }>);
const PB = lazy(() =>
    import('common/components/Routing/Pages/PB') as unknown as Promise<{ default: React.ComponentType<any> }>);
const Puma = lazy(() =>
    import('common/components/Routing/Pages/Puma') as unknown as Promise<{ default: React.ComponentType<any> }>);
const Prices = lazy(() =>
    import('common/components/Routing/Pages/Prices') as unknown as Promise<{ default: React.ComponentType<any> }>);

export const LazyRouter = createBrowserRouter([
    {
        path: "/",
        element: <RoutingApp/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Adidas/>
                    </Suspense>
                )
            },
            {
                path: PATH.PB,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PB/>
                    </Suspense>
                )
            },
            {
                path: PATH.PUMA,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Puma/>
                    </Suspense>
                )
            },
            {
                path: PATH.PRICES,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Prices/>
                    </Suspense>
                )
            }
        ]
    }
]);
// useNavigate, useMatches, useRouteError
