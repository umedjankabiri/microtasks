import {ButtonProps} from "common/types/Button/ButtonProps.ts";

export const Button = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.onClick?.()
    }

    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    );
};