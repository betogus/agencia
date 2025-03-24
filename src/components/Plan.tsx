import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import themes from "../utils/themes";

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  button: {
    padding: "1em 2em",
    backgroundColor: themes.colors.primary,
    color: "#fff",
    fontSize: "1em",
    marginTop: "1em",
    cursor: "pointer",
    borderRadius: "20em",
  },
  tableContainer: {
    width: "50%",
    margin: "auto",
    border: "2px solid red",
    borderRadius: "10px",
    overflow: "hidden",
    maxWidth: "100%",
    minWidth: "fit-content",
  },
  table: {
    borderCollapse: "separate",
    borderSpacing: "0",
  },
  cell: {
    borderRight: "2px solid red",
    borderBottom: "none",
    fontWeight: "bolder",
  },
  lastCell: {
    borderRight: "none",
    borderBottom: "none",
    fontWeight: "bolder",
  },
  titleCell: {
    borderBottom: "none",
    fontSize: "1.5em",
    fontWeight: "bolder",
  },
  titleLastCell: {
    borderBottom: "none",
    fontSize: "1.5em",
    borderRight: "none",
    fontWeight: "bolder",
  },
  recContainer: {
    width: "70%",
    margin: "auto",
    marginTop: "2em",
    display: "grid",
    height: "5vh",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    fontFamily: themes.fonts.recContainer,
    fontSize: themes.fontSizes.subheading,
    fontWeight: themes.fontWeights.normal,
    color: themes.colors.light,
  },
  redRec: {
    backgroundColor: themes.colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blackRec: {
    backgroundColor: themes.colors.dark,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "12em",
  },
  whiteButton: {
    backgroundColor: themes.colors.light,
    color: themes.colors.dark,
    padding: "0.3em 2em",
    fontSize: "2em",
    fontWeight: "bolder",
    marginTop: "1em",
    cursor: "pointer",
    borderRadius: "1em",
  }
};

const plans = [
  {
    feature: "PAUTA EN META",
    base: true,
    classic: true,
    premium: true,
  },
  {
    feature: "ESTRATEGIA DE CONTENIDO",
    base: false,
    classic: true,
    premium: true,
  },
  {
    feature: "PAUTA EN GOOGLE",
    base: false,
    classic: true,
    premium: true,
  },
  {
    feature: "BRANDING",
    base: false,
    classic: true,
    premium: true,
  },
  {
    feature: "OPTIMIZACIÓN SEO",
    base: false,
    classic: false,
    premium: true,
  },
  {
    feature: "DISEÑO WEB",
    base: false,
    classic: false,
    premium: true,
  },
  {
    feature: "DESARROLLO WEB",
    base: false,
    classic: false,
    premium: true,
  },
];

const Plan = () => {
  return (
    <div style={{ textAlign: "center", padding: "2em", overflowX: "auto" }}>
      <Typography variant="h4" gutterBottom>
        ¡ELEGÍ EL PLAN QUE MÁS SE ADAPTE A TU NECESIDAD!
      </Typography>
      <TableContainer component={Paper} style={styles.tableContainer}>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}></TableCell>
              <TableCell align="center" style={styles.titleCell}>
                PLAN BASE
              </TableCell>
              <TableCell align="center" style={styles.titleCell}>
                PLAN CLASSIC
              </TableCell>
              <TableCell align="center" style={styles.titleLastCell}>
                PLAN PREMIUM
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plans.map((plan, index) => (
              <TableRow key={index}>
                <TableCell style={styles.cell}>{plan.feature}</TableCell>
                <TableCell align="center" style={styles.cell}>
                  {plan.base ? (
                    <FaCheck color="green" size={40} />
                  ) : (
                    <ImCross color="red" size={40} />
                  )}
                </TableCell>
                <TableCell align="center" style={styles.cell}>
                  {plan.classic ? (
                    <FaCheck color="green" size={40} />
                  ) : (
                    <ImCross color="red" size={40} />
                  )}
                </TableCell>
                <TableCell align="center" style={styles.lastCell}>
                  {plan.premium ? (
                    <FaCheck color="green" size={40} />
                  ) : (
                    <ImCross color="red" size={40} />
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell style={styles.cell}></TableCell>
              <TableCell align="center">
                <Button variant="contained" style={styles.button}>
                  CONSULTAR
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" style={styles.button}>
                  CONSULTAR
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" style={styles.button}>
                  CONSULTAR
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={styles.buttonContainer}
      >
        <div style={styles.recContainer}>
          <div style={styles.redRec}>
            <h2>¿NO SABÉS POR DÓNDE EMPEZAR?</h2>
          </div>
          <div style={styles.blackRec}>
            <h2>ENCONTRÁ EL SERVICIO IDEAL PARA IMPULSAR TU CRECIMIENTO.</h2>
          </div>
        </div>
        <Button variant="contained" style={styles.whiteButton}>
          ¡HABLEMOS!
        </Button>
      </div>
    </div>
  );
};

export default Plan;
