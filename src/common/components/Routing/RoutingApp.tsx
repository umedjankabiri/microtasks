import stl from "common/components/Routing/site.module.css"
import {Route, Routes} from "react-router-dom";
import {PageOne} from "common/components/Routing/Pages/PageOne.tsx";
import {PageTwo} from "common/components/Routing/Pages/PageTwo.tsx";
import {PageThree} from "common/components/Routing/Pages/PageThree.tsx";
import {ErrorPage} from "common/components/Routing/Error/ErrorPage.tsx";

export const RoutingApp = () => {

    return (
        <div>
            <div className={stl.header}><h1>HEADER</h1></div>
            <div className={stl.body}>
                <div className={stl.nav}>
                    Здесь будет навигация
                </div>
                <div className={stl.content}>
                        <Routes>
                            <Route path={"/"} element={<PageOne/>}/>
                            <Route path={"/Page1"} element={<PageOne/>}/>
                            <Route path={"/Page2"} element={<PageTwo/>}/>
                            <Route path={"/Page3"} element={<PageThree/>}/>

                            <Route path={"/*"} element={<ErrorPage/>}/>
                            <Route path={"/Error"} element={<ErrorPage/>}/>
                        </Routes>
                </div>
            </div>
            <div className={stl.footer}>abibas 2023</div>
        </div>
    );
};
