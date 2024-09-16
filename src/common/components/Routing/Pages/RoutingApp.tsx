import stl from "common/components/Routing/Pages/styles/RoutingApp.module.css"
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Adidas} from "common/components/Routing/Pages/Adidas.tsx";
import {PB} from "common/components/Routing/Pages/PB.tsx";
import {Puma} from "common/components/Routing/Pages/Puma.tsx";
import {Error404} from "common/components/Routing/Error/Error404.tsx";
import {Model} from "common/components/Routing/Pages/Model.tsx";

export const PATH = {
    ID: "/:id",
    ADIDAS: "/adidas",
    PUMA: "/puma",
    PB: "/pb",
    MODEL: "/model",
    ERROR404: "/error404"
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
                </div>
                <div className={stl.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/adidas"}/>}/>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.PB} element={<PB/>}/>
                        <Route path={`${PATH.ADIDAS}${PATH.MODEL}${PATH.ID}`} element={<Model/>}/>
                        <Route path={`${PATH.PUMA}${PATH.MODEL}${PATH.ID}`} element={<Model/>}/>
                        <Route path={`${PATH.PB}${PATH.MODEL}${PATH.ID}`} element={<Model/>}/>

                        <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path={"/*"} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={stl.footer}>Pull&Bear 2024</div>
        </div>
    );
};
