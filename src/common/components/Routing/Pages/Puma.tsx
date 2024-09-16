import {FC} from "react";
import {SneakersItems} from "common/types/Routing/SneakerProps.ts";
import resizedPuma from "assets/puma/resizedPuma.webp";
import resizedPumaCavern from "assets/puma/resizedPumaCavern.webp";
import resizedPumaXray from "assets/puma/resizedPumaXray.webp";
import stl from "common/components/Routing/Pages/styles/sneakersStyles.module.css";
import {Link} from "react-router-dom";

export const PumaSneakerModels: SneakersItems[] = [
    {
        id: "p1",
        model: 'PUMA',
        collection: 'Daily',
        price: '3500$',
        picture: resizedPuma,
    },
    {
        id: "p2",
        model: 'PUMA',
        collection: 'Cavern',
        price: '3300$',
        picture: resizedPumaCavern
    },
    {
        id: "p3",
        model: 'PUMA',
        collection: 'X-ray',
        price: '1080$',
        picture: resizedPumaXray
    }
]

export const Puma: FC = () => {

    return (
        <div className={stl.sneakerWrapper}>
            <h2>Puma</h2>
            <div className={stl.sneakerImage}>
                {
                    PumaSneakerModels.map(sneaker =>
                        <Link key={sneaker.id} to={`/puma/${sneaker.id}`}>
                            <img src={sneaker.picture} alt={sneaker.model} title={sneaker.collection}/>
                        </Link>
                    )
                }
            </div>
            <div className={stl.textInfo}>
                <p>
                    <h3>What is Lorem Ipsum?</h3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer
                    took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.

                    <h3>Why do we use it?</h3>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their
                    infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).

                    <h3>Where does it come from?</h3>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
                    of the word in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </div>
        </div>
    );
};
