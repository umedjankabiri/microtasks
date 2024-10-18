import stl from "common/components/Routing/Pages/styles/routingApp.module.css"
import {NavLink, Outlet} from "react-router-dom";

export const PATH = {
    ID: "/:id",
    ADIDAS: "/adidas",
    PUMA: "/puma",
    PB: "/pb",
    PROTECTED_ROUTE: "/protected-route",
    PROTECTED_PAGE: "/protected-page",
    BRAND: "/:brands",
    PRICES: "/prices",
    ERROR404: "/error404",
} as const

export const RoutingApp = () => {

    return (
        <div>
            <div className={stl.header}><h1>HEADER</h1></div>
            <div className={stl.body}>
                <div className={stl.nav}>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={PATH.ADIDAS}
                        >Adidas</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={PATH.PUMA}
                        >Puma</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={PATH.PB}
                        >Pull&Bear</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={PATH.PROTECTED_PAGE}
                        >Protected</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={PATH.PRICES}
                        >Prices</NavLink>
                    </div>
                </div>
                <div className={stl.content}>
                    <Outlet/>
                </div>
            </div>
            <div className={stl.footer}>Pull&Bear 2024</div>
        </div>
    );
};
