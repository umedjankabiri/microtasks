import {ChangeEvent, useState} from "react";
import {FullInputProps} from "common/types/FullInput/FullInputProps.ts";
import {Button} from "common/components/Button/Button.tsx";

export const FullInput = (props: FullInputProps) => {
    const [value, setValue] = useState("");
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.onChange && props.onChange(value)
        setValue('')
    }

    return (
        <>
            <input type="text" value={value} onChange={onChangeInputHandler}/>
            <Button onClick={onClickButtonHandler}>+</Button>
        </>
    );
};
