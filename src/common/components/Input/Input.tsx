import {ChangeEvent} from "react";
import {InputProps} from "common/types/Input/InputProps.ts";

export const Input = (props: InputProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(event.currentTarget.value);
    }

    return (
        <input type="text" value={props.value} onChange={onChangeHandler}/>
    );
};