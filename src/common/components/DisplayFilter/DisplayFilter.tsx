import {DisplayFilterProps} from "common/types/Button/DisplayFilterProps.ts";
import {Button} from "common/components/Button/Button.tsx";

export const DisplayFilter = (props: DisplayFilterProps) => {
    const mappedMoney = props.filteredMoney.map((money, index)=> {
        return (
            <li key={index}>
                <span>{money.banknote}: </span>
                <span>{money.nominal} - </span>
                <span>{money.number}</span>
            </li>
        )
    })

    return (
        <div>
            <ul>
                {mappedMoney}
            </ul>
            <Button onClick={()=> props.onClick && props.onClick("All")}>All</Button>
            <Button onClick={()=> props.onClick && props.onClick("Dollar")}>Dollar</Button>
            <Button onClick={()=> props.onClick && props.onClick("Ruble")}>Ruble</Button>
        </div>
    );
};
