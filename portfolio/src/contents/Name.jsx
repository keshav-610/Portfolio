import { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IMG_20240905_190702 from "../assets/IMG_20240905_190702.jpg";

const Name = () => {
  const cheers_function = () => {
    toast("Cheers");
  };

  const name_sentences = [
    "A.K.A Kesava Prakash",
    "Final Year Student at Vel Tech",
  ];
  const [displayed_text, set_displayed_text] = useState("");
  const [sentence_index, set_sentence_index] = useState(0);
  const [char_index, set_char_index] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (sentence_index < name_sentences.length) {
      if (typing) {
        if (char_index < name_sentences[sentence_index].length) {
          const time_out = setTimeout(() => {
            set_displayed_text(
              (prev) => prev + name_sentences[sentence_index][char_index]
            );
            set_char_index(char_index + 1);
          }, 20);
          return () => clearTimeout(time_out);
        } else {
          const pause_timeout = setTimeout(() => {
            setTyping(false);
          }, 2000);
          return () => clearTimeout(pause_timeout);
        }
      } else {
        if (char_index > 0) {
          const time_out = setTimeout(() => {
            set_displayed_text((prev) => prev.slice(0, -1));
            set_char_index(char_index - 1);
          }, 20);
          return () => clearTimeout(time_out);
        } else {
          const pause_timeout = setTimeout(() => {
            set_sentence_index(
              (prevIndex) => (prevIndex + 1) % name_sentences.length
            );
            setTyping(true);
          }, 500);
          return () => clearTimeout(pause_timeout);
        }
      }
    }
  }, [char_index, typing, sentence_index]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" }, 
        padding: "20px", // Add padding to ensure content is not too close to the edges
        boxSizing: "border-box", // Include padding in width and height calculations
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: { xs: "20px", sm: "0" }, // Add margin for mobile
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Roboto", "Arial", sans-serif',
            fontWeight: "bold",
            color: "white",
          }}
        >
          Hello,
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: "bold",
            color: "white",
          }}
        >
          I'm <span style={{ color: "yellow" }}>Keshav</span>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            minHeight: "1.5em",
            fontSize: {
              xs: "1.4em",
              sm: "inherit",
            },
          }}
        >
          {displayed_text.includes("Kesava Prakash") ? (
            <>
              A.K.A{" "}
              <span style={{ color: "cyan" }}>{displayed_text.slice(6)}</span>
            </>
          ) : (
            displayed_text
          )}
        </Typography>
        <Button
          variant="outlined"
          onClick={cheers_function}
          sx={{ marginBottom: "20px" }}
        >
          CHEERS
        </Button>
      </Box>

      <Box>
        <img
          src={IMG_20240905_190702}
          alt="My image"
          style={{
            width: "100%",
            maxWidth: "550px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Name;
