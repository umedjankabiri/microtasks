import {BodyProps} from "common/types/nested/BodyProps.ts";

export const Body = (props: BodyProps) => {
    return (
        <div>
            {props.title}
        </div>
    );
};