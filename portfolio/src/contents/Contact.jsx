import { Typography, Box, TextField, Button } from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import VH11544_Kesava_Prakash_DJ_IT from "../assets/VH11544_Kesava_Prakash_DJ_IT.pdf";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs.send('service_mjssvts', 'template_5pqkgln', templateParams, 'ulGBMdxKs7GWi4dmd')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Failed to send message. Please try again.");
      });
    setEmail("");
    setMessage("");
  };

  const social_link = {
    linked_in: "https://www.linkedin.com/in/kesava-prakash-409825256/",
    instagram: "https://www.instagram.com/_.k3shav._.610._/",
    facebook: "https://www.facebook.com/keshav.prakash.1217",
    x: "https://x.com/k3shav610",
    github: "https://github.com/keshav-610"
  };

  return (
    <section id="contact">
      <Box sx={{ backgroundColor: "#0F1214", paddingTop:5,paddingBottom:8}}>
        <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
          <Typography
            sx={{
              color: "#86e7b8",
              fontFamily: "SF Pro Display, sans-serif",
              fontSize: { md: 40, xs: 30 },
              fontWeight: 600,
              
            }}
          >
            Contact Me
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: 2,
            paddingBottom: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Box sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            padding: 2,
            paddingLeft:10
          }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocalPhoneRoundedIcon sx={{ color: "#86e7b8", fontSize: "2em" }} />
              <Typography variant="h6" sx={{
                color: "#FAF9F6",
                fontSize: "20px",
                fontWeight: 600,
                marginLeft: "10px",
              }}>
                +91 9841787203
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailRoundedIcon sx={{ color: "#86e7b8", fontSize: "2em" }} />
              <Typography variant="h6" sx={{
                color: "#FAF9F6",
                fontSize: "20px",
                fontWeight: 600,
                marginLeft: "10px",
              }}>
                kesavaprakash1610@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 4, width: "auto" }}>
              <a href={social_link.instagram} target="_blank">
                <InstagramIcon sx={{
                  color: "#86e7b8",
                  cursor: "pointer",
                  fontSize: { xs: "2.2em", md: "2em" },
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }} />
              </a>
              <a href={social_link.facebook}>
                <FacebookIcon sx={{
                  color: "#86e7b8",
                  cursor: "pointer",
                  fontSize: { xs: "2.2em", md: "2em" },
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }} />
              </a>
              <a href={social_link.linked_in}>
                <LinkedInIcon sx={{
                  color: "#86e7b8",
                  cursor: "pointer",
                  fontSize: { xs: "2.2em", md: "2em" },
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }} />
              </a>
              <a href={social_link.github}>
                <GitHubIcon sx={{
                  color: "#86e7b8",
                  cursor: "pointer",
                  fontSize: { xs: "2.2em", md: "2em" },
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }} />
              </a>
              <a href={social_link.x}>
                <XIcon sx={{
                  color: "#86e7b8",
                  cursor: "pointer",
                  fontSize: { xs: "2.2em", md: "2em" },
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }} />
              </a>
            </Box>
            <Box>
              <Button
                variant="outlined"
                component="a"
                href={VH11544_Kesava_Prakash_DJ_IT}
                download="Kesava Prakash"
                sx={{
                  color: "#86e7b8",
                  borderColor: "#86e7b8",
                  "&:hover": { borderColor: "#72d0a6", color: "#72d0a6" },
                }}
              >
                Download CV
              </Button>
            </Box>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 3,
              gap: 2,
            }}
          >
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{ style: { color: '#FFF' } }}
              InputLabelProps={{ style: { color: '#86e7b8' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: '#86e7b8' },
                  "&:hover fieldset": { borderColor: '#72d0a6' },
                  "&.Mui-focused fieldset": { borderColor: '#72d0a6' },
                },
                width: "70%",
              }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              InputProps={{ style: { color: '#FFF' } }}
              InputLabelProps={{ style: { color: '#86e7b8' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: '#86e7b8' },
                  "&:hover fieldset": { borderColor: '#72d0a6' },
                  "&.Mui-focused fieldset": { borderColor: '#72d0a6' },
                },
                width: "70%",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#86e7b8",
                color: "#012622",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#72d0a6" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
