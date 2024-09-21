import { Typography, Box,Card } from "@mui/material";

const Skills = () => {
  return (
    <section id="skills">
      <Box sx={{
        height: "90vh",
        backgroundColor: "white",
        backgroundImage: `linear-gradient(#abaaa7 1px, transparent 1px), linear-gradient(90deg, #abaaa7 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}>
        <Box sx={{
          paddingTop:"10px",
        }}>
          <Typography variant="h4"
            sx={{
              fontFamily: "SF Pro Display Heavy, sans-serif",
              fontStyle: "italic",
              fontWeight: "900",
              textAlign: "center",
              textDecoration: "underline",
              textDecorationColor: "#1f53c2",
              textUnderlineOffset: "10px",
              fontSize: {
                xs: "32px",
                md: "50px",
              },
              "&:hover": {
                textDecorationColor: "#ff5a5f",
              },
            }}
          >
            Technical Expertise
          </Typography>
        </Box>
        <Box>
             
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
