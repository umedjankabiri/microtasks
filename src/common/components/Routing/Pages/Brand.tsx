import {FC} from "react";
import {useParams} from "react-router-dom";
import {adidasSneakerModels} from "common/components/Routing/Pages/Adidas.tsx";
import {pumaSneakerModels} from "common/components/Routing/Pages/Puma.tsx";
import {pbSneakerModels} from "common/components/Routing/Pages/PB.tsx";
import {SneakersBrandsProps} from "common/types/Routing/SneakersBrandsProps.ts";
import stl from "common/components/Routing/Pages/styles/brand.module.css"

const sneakersBrands: SneakersBrandsProps = {
    adidas: adidasSneakerModels,
    puma: pumaSneakerModels,
    pb: pbSneakerModels
}

export const Brand: FC = () => {
    const {id, brands} = useParams();
    const sneakerId = Number(id);

    const sneaker = brands ? sneakersBrands[brands].find(sneaker => sneaker.id === sneakerId) : null;

    return (
        <div className={stl.brand}>
            {
                sneaker
                    ?
                    <div>
                        <h2> brand: {sneaker.brand}</h2>
                        <h4>collection: {sneaker.collection}</h4>
                        <h3>price: {sneaker.price}</h3>
                        <img
                            src={sneaker.picture}
                            alt={sneaker.brand}
                            title={sneaker.collection}
                        />
                    </div>
                    : <h2>Модель не найдена</h2>
            }
        </div>
    );
};
