import {FC} from "react";
import {ModelProps} from "common/types/Routing/ModelProps.ts";

export const Model: FC<ModelProps> = (props) => {

    return (
        <div>
            {
                props.brands.map(sneaker =>
                    <div>
                        <div>{sneaker.model}</div>
                        <div>{sneaker.collection}</div>
                        <div>{sneaker.price}</div>
                        <div>{sneaker.picture}</div>
                    </div>
                )}
        </div>
    );
};
