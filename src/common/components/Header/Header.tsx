import {HeaderProps} from "common/types/nested/HeaderProps.ts";

export const Header = (props: HeaderProps) => {
    return (
        <div>
            {props.title}
        </div>
    );
};