import stl from "common/components/Routing/site.module.css"
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "common/components/Routing/Pages/PageOne.tsx";
import {PageTwo} from "common/components/Routing/Pages/PageTwo.tsx";
import {PageThree} from "common/components/Routing/Pages/PageThree.tsx";
import {Error404} from "common/components/Routing/Error/Error404.tsx";

const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    ERROR404: '/error404'
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
                            to={PATH.PAGE1}
                        >Adidas</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={PATH.PAGE2}
                        >Bershka</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? stl.activeNavLink : stl.navLink}
                            to={PATH.PAGE3}
                        >Pull&Bear</NavLink>
                    </div>
                    <div>
                        <Link to={PATH.PAGE3}>Pull&Bear with tag Link</Link>
                    </div>
                    <div>
                        <a href={PATH.PAGE3}>Pull&Bear with tag a</a>
                    </div>
                </div>
                <div className={stl.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/Page1"}/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path={"/*"} element={<Navigate to={"/error404"}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={stl.footer}>abibas 2023</div>
        </div>
    );
};
