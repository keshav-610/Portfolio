import { Typography, Box } from "@mui/material";
import Skillcard from "./components/Skillcard";
import Figma_Logo from "../assets/Figma_Logo.png";
import React_Logo from "../assets/React_Logo.png";
import Python_Logo from "../assets/Python_Logo.png";
import Java_Logo from "../assets/Java_Logo.png";
import MY_SQL_Logo from "../assets/MY_SQL_Logo.png";
import Node_JS from "../assets/Node_JS.png";
import C_Logo from "../assets/C_Logo.png";
import Angular_Logo from "../assets/Angular_Logo.png";

const Skills = () => {
  return (
    <section id="skills">
      <Box
        sx={{
          height: "auto",
          backgroundColor: "white",
          backgroundImage: `linear-gradient(#cbcdd1 1px, transparent 1px), linear-gradient(90deg, #cbcdd1 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        <Box sx={{padding:"15px"}}>
          <Typography variant="h6" sx={{
            textAlign:"center"
          }}>
            SKILLS
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "10px" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SF Pro Display Heavy, sans-serif",
              fontStyle: "italic",
              fontWeight: "900",
              textAlign: "center",
              textDecoration: "underline",
              textDecorationColor: "#1f53c2",
              textUnderlineOffset: "10px",
              fontSize: { xs: "32px", md: "50px" },
              "&:hover": {
                textDecorationColor: "#ff5a5f",
              },
            }}
          >
            Technical Expertise
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            marginTop: "20px",
            columnGap:{
              md: 10,
            }
          }}
        >
          <Skillcard imgSrc={React_Logo} altText="React_Logo" header="React" percent={80} />
          <Skillcard imgSrc={Node_JS} altText="Node JS" header="Node JS" percent={75} />
          <Skillcard imgSrc={Python_Logo} altText="Python_Logo" header="Python" percent={80} />
          <Skillcard imgSrc={Angular_Logo} altText="Angular Logo" header="Angular JS" percent={75} />
          <Skillcard imgSrc={C_Logo} altText="C Logo" header="C" percent={75} />
          <Skillcard imgSrc={Java_Logo} altText="Java_Logo" header="Java" percent={80} />
          <Skillcard imgSrc={MY_SQL_Logo} altText="My SQL Logo" header="My SQL" percent={75} />
          <Skillcard imgSrc={Figma_Logo} altText="Figma_Logo" header="Figma" percent={85} />
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
