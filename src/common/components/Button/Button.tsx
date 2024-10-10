import {ButtonProps} from "common/types/Button/ButtonProps.ts";

export const Button = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.onClick?.()
    }

    return (
        <button className={props.className} onClick={onClickHandler}>
            {props.children}
        </button>
    );
};