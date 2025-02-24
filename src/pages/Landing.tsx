import React from "react";
import Logo from "../assets/logo.png";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import themes from "../utils/themes";

const options = [
  "Estrategia y creación de contenido",
  "Diseño gráfico",
  "Diseño UX UI",
  "Desarrollo web",
  "Community Manager",
  "Email Marketing",
  "Locaciones",
  "Posicionamiento SEO",
  "SEM",
  "Organización de Eventos",
];

const styles = {
  container: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  title: {
    fontSize: "2em",
    color: "#333",
    fontFamily: "Arial",
  },
  subtitle: {
    fontSize: "1.5em",
    color: "#333",
    fontFamily: themes.fonts.main,
  },
  button: {
    padding: "1em 2em",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "1em",
    marginTop: "1em",
    cursor: "pointer",
    borderRadius: "20em",
    width: "50%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    border: `1px solid ${themes.colors.primary}`,
    borderRadius: "2rem",
    width: "60%",
    padding: "2em",
  },
};

const Landing = () => {
  return (
    <div style={styles.container}>
      <div>
        <img src={Logo} alt="Logo" />
        <h1 style={styles.subtitle}>
          ¡Que tu empresa refleje lo que querés comunicar!
        </h1>
      </div>
      <div style={styles.formContainer}>
        <FormControl style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <TextField
            id="name"
            label="Nombre y Apellido"
            variant="outlined"
            sx={{
              ".MuiOutlinedInput-root": {
                borderRadius: "20em",
              },
              marginBottom: "1em",
              width: "100%",
            }}
          />
          <TextField
            id="company"
            label="Razón social o empresa"
            variant="outlined"
            sx={{
              ".MuiOutlinedInput-root": {
                borderRadius: "20em",
              },
              marginBottom: "1em",
              width: "100%",
            }}
          />
          <TextField
            id="email"
            label="Correo Electrónico"
            variant="outlined"
            sx={{
              ".MuiOutlinedInput-root": {
                borderRadius: "20em",
              },
              marginBottom: "1em",
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              border: `1px solid ${themes.colors.primary}`,
              borderRadius: "2rem",
              padding: "1em",
            }}
          >
            {options.map((option, index) => (
              <div key={index} style={{ flexBasis: "48%" }}>
                {" "}
                <FormControlLabel control={<Checkbox />} label={option} />
              </div>
            ))}
          </div>
          <Button variant="contained" style={styles.button}>
            Contactanos
          </Button>
        </FormControl>
      </div>
    </div>
  );
};
export default Landing;
