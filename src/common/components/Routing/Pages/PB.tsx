import {FC} from "react";
import {SneakersItems} from "common/types/Routing/SneakerProps.ts";
import croppedPbRetro from "assets/pb/croppedPbRetro.webp";
import croppedPbBasic from "assets/pb/croppedPbBasic.webp";
import croppedPbKalin from "assets/pb/croppedPbKalin.webp";
import stl from "common/components/Routing/Pages/styles/sneakersStyles.module.css";
import {Link} from "react-router-dom";
import {PATH} from "common/components/Routing/Pages/RoutingApp.tsx";

export const pbSneakerModels: SneakersItems[] = [
    {
        id: 1,
        model: 'PULL&BEAR',
        collection: 'Retro',
        price: '3500$',
        picture: croppedPbRetro,
    },
    {
        id: 2,
        model: 'PULL&BEAR',
        collection: 'Basic',
        price: '3300$',
        picture: croppedPbBasic
    },
    {
        id: 3,
        model: 'PULL&BEAR',
        collection: 'Kalin',
        price: '1080$',
        picture: croppedPbKalin
    }
]

export const PB: FC = () => {

    return (
        <div className={stl.sneakerWrapper}>
            <h2>Pull&Bear</h2>
            <div className={stl.sneakerImage}>
                {
                    pbSneakerModels.map(sneaker =>
                        <Link key={sneaker.id} to={`${PATH.PB}${PATH.MODEL}/${sneaker.id}`}>
                            <img src={sneaker.picture} alt={sneaker.model} title={sneaker.collection}/>
                        </Link>
                    )
                }
            </div>
            <div className={stl.textInfo}>
                <h3>What is Lorem Ipsum?</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <h3>Why do we use it?</h3>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their
                    infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                </p>

                <h3>Where does it come from?</h3>
                <p>
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
