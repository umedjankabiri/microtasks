import { FC } from "react";
import { useParams } from "react-router-dom";
import { adidasSneakerModels } from "common/components/Routing/Pages/Adidas.tsx";

export const Model: FC = () => {
    const {id} = useParams();
    const sneakerId = Number(id);

    const sneaker = adidasSneakerModels.find(sneaker => sneaker.id === sneakerId);
    if (!sneaker) {
        return <h2>Модель не найдена</h2>;
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>{sneaker.model}</h2>
            <h4>{sneaker.collection}</h4>
            <h3>{sneaker.price}</h3>
            <img
                src={sneaker.picture}
                alt={sneaker.model}
                title={sneaker.collection}
                style={{width: "600px", height: "auto", marginRight: "10px"}}
            />
        </div>
    );
};
