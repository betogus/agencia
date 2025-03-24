import React from "react";

import { CSSProperties } from "react";
import themes from "../utils/themes";
import CompanyCard from "./CompanyCard";
import Img from "../assets/companyImg.png";
import Icon from "../assets/ellipse.png";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "2em",
  },
  title: {
    fontSize: themes.fontSizes.title,
    fontStyle: "italic",
    color: themes.colors.dark,
    fontFamily: themes.fonts.main,
    fontWeight: themes.fontWeights.bold,    
  },
  companies: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  company: {
    width: "200px",
    height: "100px",
    margin: "1em",
  },
};

interface CompanyContent {
  name: string;
  title: string;
  description: string;
  img: string,
  icon: string
}

const companyContents: CompanyContent[] = [
  {
    name: "Mariano Menendez",
    title: "Coldwell Banker Audacity | Inmobiliaria",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: Img,
    icon: Icon
  },
  {
    name: "",
    title: "",
    description: "",
    img: "",
    icon: ""
  },
  {
    name: "",
    title: "",
    description: "",
    img: "",
    icon: ""
  }
] 

const Companies = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Empresas que confían en nuestro trabajo</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
      {companyContents.map((content, index) => (
        <CompanyCard key={index} content={content} />
      ))}
      </div>
    </div>
  );
};

export default Companies;
