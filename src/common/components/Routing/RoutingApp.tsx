import stl from "common/components/Routing/site.module.css"
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "common/components/Routing/Pages/PageOne.tsx";
import {PageTwo} from "common/components/Routing/Pages/PageTwo.tsx";
import {PageThree} from "common/components/Routing/Pages/PageThree.tsx";
import {Error404} from "common/components/Routing/Error/Error404.tsx";

export const RoutingApp = () => {

    return (
        <div>
            <div className={stl.header}><h1>HEADER</h1></div>
            <div className={stl.body}>
                <div className={stl.nav}>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={"/Page1"}
                        >Adidas</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={"/Page2"}
                        >Bershka</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={"/Page3"}
                        >Pull&Bear</NavLink>
                    </div>
                    <div>
                        <Link to={"/Page3"}>Pull&Bear</Link>
                    </div>
                    <div>
                        <a href={"/Page3"}>Pull&Bear with tah a</a>
                    </div>
                </div>
                <div className={stl.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/Page1"}/>}/>
                        <Route path={"/Page1"} element={<PageOne/>}/>
                        <Route path={"/Page2"} element={<PageTwo/>}/>
                        <Route path={"/Page3"} element={<PageThree/>}/>

                        <Route path={"/Error"} element={<Error404/>}/>
                        <Route path={"/*"} element={<Navigate to={"/error404"}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={stl.footer}>abibas 2023</div>
        </div>
    );
};
