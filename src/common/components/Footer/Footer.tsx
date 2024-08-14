import {FooterProps} from "common/types/nested/FooterProps.ts";

export const Footer = (props: FooterProps) => {
    return (
        <div>
            {props.title}
        </div>
    );
};