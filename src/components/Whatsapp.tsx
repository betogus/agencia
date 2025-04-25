import Icon from "../assets/WhatsApp.svg 2.png";
import themes from "../utils/themes";

const Whatsapp = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "3em",
        right: "3em",
        width: "300px",
        height: "80px", // Altura definida para contener ambos elementos
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "25px", 
          backgroundColor: themes.colors.light,
          borderTopLeftRadius: "2rem",
          borderBottomLeftRadius: "2rem",
          height: "60px",
          width: "200px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1, 
        }}
      >
        <p style={{ fontStyle: "italic", fontSize: themes.fontSizes.footer }}>
          ¡Hablemos!
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          backgroundColor: themes.colors.light,
          borderRadius: "50%",
          padding: "1em",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          zIndex: 2, // Encima del "¡Hablemos!"
        }}
      >
        <img
          src={Icon}
          alt="WhatsApp"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
    </div>
  );
};

export default Whatsapp;
