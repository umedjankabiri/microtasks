import {SneakersItems} from "common/types/Routing/SneakerProps.ts";
import resizedAdidasAlpha from "assets/adidas/resizedAdidasAlpha.webp";
import resizedAdidasRacer from "assets/adidas/resizedAdidasRacer.webp";
import resizedAdidasDaily from "assets/adidas/resizedAdidasDaily.webp";
import stl from "common/components/Routing/Pages/styles/sneakersStyles.module.css";

export const Adidas = () => {
    const AdidasSneakerModels: SneakersItems[] = [
        {
            model: 'ADIDAS',
            collection: 'new collection',
            price: '2500$',
            picture: resizedAdidasAlpha,
        },
        {
            model: 'ADIDAS',
            collection: 'new collection',
            price: '2250$',
            picture: resizedAdidasRacer
        },
        {
            model: 'ADIDAS',
            collection: 'new collection',
            price: '1180$',
            picture: resizedAdidasDaily
        }
    ]

    return (
        <div className={stl.sneakerWrapper}>
            <h2>Adidas</h2>
            <div className={stl.sneakerImage}>
                {
                    AdidasSneakerModels.map((sneaker, index) =>
                        <img key={index} src={sneaker.picture} alt={sneaker.model}/>)
                }
            </div>
            <div className={stl.textInfo}>
                <p>
                    <h3>What is Lorem Ipsum?</h3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.

                    <h3>Why do we use it?</h3>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
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
