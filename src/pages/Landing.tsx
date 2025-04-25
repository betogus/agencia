import { useState } from "react";
import Logo from "../assets/logo.png";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { RadioButtonUnchecked, RadioButtonChecked } from "@mui/icons-material";
import themes from "../utils/themes";
import "./Landing.css";

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

const Landing = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleToggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="landing-container">
      <div className="landing-left">
        <img src={Logo} alt="Logo" />
        <h1 className="landing-subtitle">
          ¡Que tu empresa refleje lo que querés comunicar!
        </h1>
      </div>

      <div className="landing-form-container">
        <div className="form-inner">
          <FormControl>
            <TextField
              id="name"
              label="Nombre y Apellido"
              variant="outlined"
              sx={{
                ".MuiOutlinedInput-root": { borderRadius: "20em" },
                marginBottom: "1em",
                width: "100%",
              }}
            />
            <TextField
              id="company"
              label="Razón social o empresa"
              variant="outlined"
              sx={{
                ".MuiOutlinedInput-root": { borderRadius: "20em" },
                marginBottom: "1em",
                width: "100%",
              }}
            />
            <TextField
              id="email"
              label="Correo Electrónico"
              variant="outlined"
              sx={{
                ".MuiOutlinedInput-root": { borderRadius: "20em" },
                marginBottom: "1em",
                width: "100%",
              }}
            />

            <div className="checkbox-group">
              {options.map((option, index) => (
                <div key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleToggleOption(option)}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<RadioButtonChecked />}
                        sx={{
                          color: themes.colors.primary,
                          "&.Mui-checked": {
                            color: themes.colors.primary,
                          },
                        }}
                      />
                    }
                    label={<span style={{ fontWeight: "bold" }}>{option}</span>}
                  />
                </div>
              ))}
            </div>
          </FormControl>

          <Button
            variant="contained"
            sx={{
              padding: "1em 2em",
              backgroundColor: themes.colors.primary,
              color: themes.colors.secondary,
              fontSize: "1em",
              marginTop: "1em",
              cursor: "pointer",
              borderRadius: "20em",
              width: "50%",
              "&:hover": {
                backgroundColor: themes.colors.primary,
                color: themes.colors.secondary,
              },
            }}
          >
            Consultar Presupuesto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
