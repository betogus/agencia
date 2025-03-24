import React, { CSSProperties } from "react";
import theme from "../utils/themes";
import Logo from "../assets/footer-logo.png";

const styles: { [key: string]: CSSProperties } = {
  container: {
    width: "100vw",
    height: "383px",
    backgroundColor: theme.colors.dark,
    display: "flex",
  },
  leftContent: {
    width: "50%",
    height: "100%",
    backgroundColor: theme.colors.red,
    color: theme.colors.light,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.footer,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftText: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
    padding: "2em",

  },
  middleRedContent: {
    width: 0,
    height: 0,
    borderLeft: "500px solid transparent",
    borderRight: "0px solid transparent",
    borderBottom: "383px solid black",
    backgroundColor: theme.colors.red,
  },
  rightContent: {
    justifyContent: "center",
    alignItems: "end",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    padding: "2em",
    fontStyle: "italic",
    color: theme.colors.light,
  },
};

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftContent}>
        <div style={styles.leftText}>
          <h2>PLANES PERSONALIZADOS PARA TU NEGOCIO</h2>
          <p>
            TE GUIAMOS PARA QUE ELIJAS LA MEJOR ESTRATEGIA, ADAPTADA A TU
            EMPRESA
          </p>
        </div>
      </div>
      <div style={styles.middleRedContent}></div>
      <div style={styles.rightContent}>
        <img src={Logo} alt="Logo" style={styles.img} />
        <h2>Correo electrónico</h2>
        <h2>Whatsapp</h2>
      </div>
    </div>
  );
};

export default Footer;
