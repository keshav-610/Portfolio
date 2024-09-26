import { Box, Typography } from "@mui/material";
import ExperienceCard from "./components/ExperienceCard";
import internpe_logo from "../assets/internpe_logo.png";
import MathWorks_Logo from "../assets/MathWorks_Logo.jpg";
import PS_Logo from "../assets/PS_Logo.jpg";

const Experience = () => {
  return (
    <section id="experience">
      <Box sx={{ backgroundColor: "#ddede1", paddingBottom:"50px" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "SF Pro Display Heavy, sans-serif",
              fontStyle: "italic",
              fontWeight: "900",
              textAlign: "center",
              textDecoration: "underline",
              textDecorationColor: "#1f53c2",
              textUnderlineOffset: "15px",
              paddingTop:"35px",
              marginBottom: "35px",
              color: "#000",
              fontSize: { xs: "32px", md: "50px" },
            }}
          >
            Experience
          </Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-around", flexDirection:{xs:"column",md:"row"}, alignItems:{xs:"center",md:"flex-start"}}}>
          <ExperienceCard
            imageSrc={internpe_logo}
            header="Internpe virtual Internship"
            description="This is a 4-week virtual web development internship, understood the concepts of interacting with webpages by developing 4 projects that have assigned."
            duration="Apr 2024 - May 2024"
          />
          <ExperienceCard
            imageSrc={MathWorks_Logo}
            header="MathWorks Virtual Internship"
            description="As an intern, I learned the purpose of MATLAB application and used real-time applications such as AI, ML, Signal Processing through R203A Application and earned Onramp certifications."
            duration="May 2023 - Sep 2023"
          />
          <ExperienceCard
            imageSrc={PS_Logo}
            header="Pantech Solutions"
            description="This is a one-month internship about AI/ML. As an AI/ML intern, I learned the concepts and purpose of AI in real-time applications through Python and datasets interaction."
            duration="Jan 2023 - Feb 2023"
          />
        </Box>
      </Box>
    </section>
  );
};

export default Experience;
