import {useState} from "react";
import {Button} from "common/components/Button/Button.tsx";

export const DemonstrateUseState = () => {
    let [a, setA] = useState(1)
    const onClickButton = () => {
        setA(++a)
        console.log(a)
    }
    const onClickZero = () => {
        setA(0)
    }

    return (
        <div>
            <h1>{a}</h1>
        <Button onClick={onClickButton}>Click me</Button>
    <Button onClick={onClickZero}>0</Button>
    </div>
);
};
