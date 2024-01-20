import { useTranslation } from 'react-i18next';

function Lista (){

    const [t, i18n] = useTranslation("global");

    const products = [{name: `${t("ranking_of_offers.book")}` , imageSrc: "/images/ksiazka.jpg"}, 
                    {name: `${t("ranking_of_offers.notebook")}` , imageSrc: "/images/zeszyt.jpg"},
                    {name: `${t("ranking_of_offers.scissors")}` , imageSrc: "/images/nozyczki.jpg"},
                    {name: `${t("ranking_of_offers.pen")}` , imageSrc: "/images/dlugopis.jpg"},
                    {name: `${t("ranking_of_offers.pencil")}` , imageSrc: "/images/olowek.jpg"}];

    const listItems = products.map((product) => (
        <li key={product.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
            <img src={process.env.PUBLIC_URL + product.imageSrc} alt={product.name} width="50" height="50"  style={{ border: '2px solid #000',marginRight: '10px'}}/>
            {product.name}
        </li>)
    )
    return (
        <il>{listItems}</il>
    )
}

export default Lista