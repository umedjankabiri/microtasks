import {FC, useEffect, useState} from "react";
import stl from "./styles/Prices.module.css";
import {Button} from "common/components/Button/Button.tsx";
import { useSearchParams } from "react-router-dom";

export const Prices: FC = () => {
    const sneakers = [
        {
            manufacturer: "Adidas",
            name: "Adidas Yeezy Boost 350",
            price: 300,
            onSale: false
        },
        {
            manufacturer: "Adidas",
            name: "Adidas Ultraboost 21",
            price: 180,
            onSale: true
        },
        {
            manufacturer: "Puma",
            name: "Puma Suede Classic",
            price: 65,
            onSale: true
        },
        {
            manufacturer: "Puma",
            name: "Puma RS-X",
            price: 110,
            onSale: false
        },
        {
            manufacturer: "Abibas",
            name: "Abibas Alphabounce",
            price: 60,
            onSale: true
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
                    <th className={stl.thStyle}>Name</th>
                    <th className={stl.thStyle}>Price</th>
                    <th className={stl.thStyle}>On Sale</th>
                </tr>
                </thead>
                <tbody>
                {filteredSneakers.map((sneaker, index) => (
                    <tr key={index}>
                        <td className={stl.tdStyle}>{sneaker.manufacturer}</td>
                        <td className={stl.tdStyle}>{sneaker.name}</td>
                        <td className={stl.tdStyle}>${sneaker.price}</td>
                        <td className={stl.tdStyle}>{sneaker.onSale ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
