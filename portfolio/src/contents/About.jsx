import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
const About = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Questrial&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="about">
      <Box
        sx={{
          backgroundColor: "#FFFFF0",
        }}
      >
        <Box>
          <br />
          <Box>
            {" "}
            {/* typography box*/}
            <Typography
              variant="h4"
              sx={{
                color: "#1a1919",
                fontFamily: "Questrial, sans-serif",
                fontWeight: "400",
                textAlign: "center",
                fontStyle: "normal",
                fontSize: "50px",
                textDecoration: "underline",
                textDecorationColor: "yellow",
                textUnderlineOffset: "10px", 
              }}
            >
              About Me
            </Typography>
          </Box>
              <br />
          <Box>
            <Typography sx={{
              fontFamily:"SF Pro Display",
              fontSize:"1.1em"
            }}> 
              I am a 21-year-old final year student at Vel Tech, with a strong aspiration to excel in Machine Learning and Full Stack Development. With a solid foundation in UX Design and a passion for creating intuitive user experiences, I am eager to leverage my skills and knowledge in dynamic technologies. As I approach in my academic journey, I am actively seeking opportunities to enhance my expertise and contribute my potential in tech industry.
            </Typography>
          </Box>

          <Box>
                
          </Box>
          
        </Box>
      </Box>
    </section>
  );
};

export default About;
