import {FC, useEffect, useState} from "react";
import stl from "./styles/Prices.module.css";
import {Button} from "common/components/Button/Button.tsx";
import { useSearchParams } from "react-router-dom";

export const Prices: FC = () => {
    const sneakers = [
        {
            manufacturer: "Adidas",
            collection: "Adidas Alpha",
            price: 2500,
            onSale: false
        },
        {
            manufacturer: "Adidas",
            collection: "Adidas Racer",
            price: 2250,
            onSale: true
        },
        {
            manufacturer: "Adidas",
            collection: "Adidas Daily",
            price: 1180,
            onSale: true
        },
        {
            manufacturer: "Puma",
            collection: "Puma Daily",
            price: 3500,
            onSale: true
        },
        {
            manufacturer: "Puma",
            collection: "Puma Cavern",
            price: 3300,
            onSale: false
        },
        {
            manufacturer: "Puma",
            collection: "Puma X-ray",
            price: 1080,
            onSale: false
        },
        {
            manufacturer: "PULL&BEAR",
            collection: "PULL&BEAR Retro",
            price: 3500,
            onSale: true
        },
        {
            manufacturer: "PULL&BEAR",
            collection: "PULL&BEAR Basic",
            price: 3300,
            onSale: true
        },
        {
            manufacturer: "PULL&BEAR",
            collection: "PULL&BEAR Kalin",
            price: 1080,
            onSale: false
        }
    ];

    const [searchParams, setUseSearchParams] = useSearchParams({});
    const [filteredSneakers, setFilteredSneakers] = useState(sneakers);

    function handleOnSale() {
        setUseSearchParams({onSale: "true"})
        setFilteredSneakers(sneakers.filter(sneaker => sneaker.onSale));
    }
    function handleReset() {
        setUseSearchParams({});
        setFilteredSneakers(sneakers);
    }

    useEffect(() => {
        searchParams.get("onSale") ? handleOnSale() : handleReset();
    }, [searchParams])

    return (
        <div>
            <Button className={stl.buttonStyle} onClick={handleOnSale}>On sale</Button>
            <Button className={stl.buttonStyle} onClick={handleReset}>Reset filter</Button>

            <table className={stl.tableStyle}>
                <thead>
                <tr>
                    <th className={stl.thStyle}>Manufacturer</th>
                    <th className={stl.thStyle}>Collection</th>
                    <th className={stl.thStyle}>Price</th>
                    <th className={stl.thStyle}>On Sale</th>
                </tr>
                </thead>
                <tbody>
                {filteredSneakers.map((sneaker, index) => (
                    <tr key={index}>
                        <td className={stl.tdStyle}>{sneaker.manufacturer}</td>
                        <td className={stl.tdStyle}>{sneaker.collection}</td>
                        <td className={stl.tdStyle}>${sneaker.price}</td>
                        <td className={stl.tdStyle}>{sneaker.onSale ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
