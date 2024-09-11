import stl from "common/components/Routing/site.module.css"
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "common/components/Routing/Pages/PageOne.tsx";
import {PageTwo} from "common/components/Routing/Pages/PageTwo.tsx";
import {PageThree} from "common/components/Routing/Pages/PageThree.tsx";
import {Error404} from "common/components/Routing/Error/Error404.tsx";
import {NavWrapper} from "common/components/Routing/_styles.ts";

export const RoutingApp = () => {

    return (
        <div>
            <div className={stl.header}><h1>HEADER</h1></div>
            <div className={stl.body}>
                <div className={stl.nav}>
                    <NavWrapper>
                        <NavLink to={"/Page1"}>Adidas</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={"/Page2"}>Bershka</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={"/Page3"}>Pull&Bear</NavLink>
                    </NavWrapper>
                    <div>
                        <Link to={"/Page3"}>Pull&Bear with tag Link</Link>
                    </div>
                    <div>
                        <a href={"/Page3"}>Pull&Bear with tag a</a>
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
