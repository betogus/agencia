import React from "react";
import { Box, Typography } from "@mui/material";
import themes from "../utils/themes";

interface CompanyCardProps {
  content: {
    name: string;
    title: string;
    description: string;
    img: string;
    icon: string;
  };
}

const CompanyCard : React.FC<CompanyCardProps> = ({content}) => {
  return (
    <Box
      sx={{
        margin: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "15em",
        
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -20,
          right: -20,
        }}
      >
        {content.icon ? (
          <img src={content.icon} alt="Icon" width={80} height={80} />
        ) : (
          <></>
        )}
      </Box>

      <Box
        sx={{
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "5px solid red",
          borderRadius: "20px",
          textAlign: "center",
          height: "20em",
          width: "100%",
        }}
      >
        {content.img && (
          <img src={content.img} alt="Company" width={"fit-content"} style={{width: "90%"}} />
        )}

        <Typography
          sx={{
            fontSize: themes.fontSizes.body,
            fontWeight: "bold",
            marginTop: "0.5em",
          }}
        >
          {content.name}
        </Typography>

        <Typography sx={{ fontSize: "0.9em", color: "gray" }}>
          {content.title}
        </Typography>
        <Typography sx={{ ffontSize: themes.fontSizes.body,
            marginTop: "0.5em"}}>
          {content.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CompanyCard;
