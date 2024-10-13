import {Outlet} from "react-router-dom";

export const Sneakers = () => {
    return (
        <div>
            <div>Header</div>
            <Outlet />
            <div>Footer</div>
        </div>
    );
};
