import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SocialMediaImg from "../assets/social-media.jpg";
import DesignImg from "../assets/design.jpg";
import UXUIImg from "../assets/ux-ui.jpg";
import WebDevImg from "../assets/web-dev.jpg";
import themes from "../utils/themes";

const CardsContents = [
  {
    title: "SOCIAL MEDIA",
    description:
      "Desarrollo de planes de comunicación y estrategias a través de contenido relevante, creativo y alineado a los objetivos de la marca.",
    image: SocialMediaImg,
  },
  {
    title: "DISEÑO GRÁFICO",
    description:
      "Creación de piezas visuales atractivas y funcionales para transmitir mensajes, desde logotipos hasta publicaciones para redes sociales.",
    image: DesignImg,
  },
  {
    title: "DISEÑO UX UI",
    description:
      "Desarrollo de la estructura visual y experiencia de usuario (UX/UI) de sitios web, asegurando estética y funcionalidad.",
    image: UXUIImg,
  },
  {
    title: "DESARROLLO WEB",
    description:
      "Programación y construcción técnica de sitios web funcionales, optimizados y adaptables a diferentes dispositivos.",
    image: WebDevImg,
  },
];

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0",
  };
  return (
    <div
      style={{
        backgroundColor: themes.colors.primary,
        paddingTop: "2em",
        paddingBottom: "2em",
      }}
    >
      <div style={{ margin: "0 10%" }}>
        <Slider {...settings}>
          {CardsContents.map((card, index) => (
            <div key={index}>
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
