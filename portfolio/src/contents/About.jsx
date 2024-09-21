import { Box, Typography } from "@mui/material";
import About_Pic from "../assets/About_Pic.png";

const About = () => {
  return (
    <section id="about">
      <Box
        sx={{
          backgroundColor: "#bce5f7",
        }}
      >
        <Box>
          <br />
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#1a1919",
                fontFamily: "SF Pro Display Heavy, sans-serif",
                fontWeight: "900",
                textAlign: "center",
                fontSize: {
                  xs: "33px",
                  md: "50px",
                },
                textDecoration: "underline",
                textDecorationColor: "#5793f2",
                textUnderlineOffset: "10px",
                transition: "text-decoration-color 0.3s ease",
                fontStyle:"italic",
                
              }}
            >
              About Me
            </Typography>

          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "90%",
                flexDirection: { xs: "column", md: "row" },
                gap: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: { xs: "100%", md: "50%" },
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      md: "1.52em",
                      xs: "1em",
                    },
                    fontFamily: "SF Pro Display, sans-serif",
                    fontStyle:"Italic",
                    fontWeight:800,
                    color: "#08193b",
                    lineHeight: {
                      md: 2.1,
                      xs: 2,
                    },
                  }}
                >
                  I am a 21-year-old final year student at Vel Tech, with a
                  strong aspiration to excel in Machine Learning and Full Stack
                  Development. With a solid foundation in UX Designing and a
                  passion for tech enthusiasm, I am eager to leverage my skills
                  and knowledge in dynamic technologies. As my approach in my
                  academic journey, I am actively seeking opportunities to
                  enhance my expertise and contribute my potential in tech industry.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  alignItems: "center",
                }}
              >
                <img src={About_Pic} alt="About Pic" height={500} />
              </Box>
            </Box>
          </Box>
        </Box>
        <br />
      </Box>
    </section>
  );
};

export default About;
