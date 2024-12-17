import { Box, Typography } from "@mui/material";
import VTHT_logo from "../assets/VTHT_logo.png";
import SRM_logo from "../assets/SRM_logo.png";
import EducationCard from "./components/EducationCard";

const Education = () => {
  return (
    <section id="education">
      <Box
        sx={{
          padding: "40px 0",
          color: "#ffffff",
          marginBottom: "40px",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "SF Pro Display Black, sans-serif",
              fontStyle: "italic",
              fontWeight: "900",
              textAlign: "center",
              textDecoration: "underline",
              textDecorationColor: "#f5a623",
              textUnderlineOffset: "8px",
              marginBottom: "25px",
              fontSize: { xs: "36px", md: "54px" },
            }}
          >
            Education
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "center", 
            alignItems: "center", 
            gap: "20px", 
            width:"90%",
            margin: "0 auto", 
        }}
        >
          <EducationCard logo={VTHT_logo} name="Vel Tech High Tech" percent="84%" type="IT" duration="2021 - 2025" />
          <EducationCard logo={SRM_logo} name="SRM Nightingale" percent="89%" type="HSC" duration="2020 - 2021" />
          <EducationCard logo={SRM_logo} name="SRM Nightingale" percent="83%" type="SSLC" duration="2018 - 2019" />
        </Box>
      </Box>
    </section>
  );
};

export default Education;
