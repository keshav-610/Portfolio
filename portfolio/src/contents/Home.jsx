import { ToastContainer } from "react-toastify";
import Name from "./Name";
import { Box } from "@mui/material";

function Home() {
  return (
    <section id="home">
      <Box
        sx={{
          height: {
            md: "86vh",
            xs: "auto"
          },
          background: `linear-gradient(to right, rgba(127, 126, 126, 0.1) 1px, transparent 1px),
                     linear-gradient(to bottom, rgba(154, 152, 152, 0.1) 1px, transparent 1px),
                     rgb(27, 27, 26)`,
          backgroundSize: "40px 40px",
          padding: "20px",
          marginTop: "64px",
        }}
      >
        <Name />
        <ToastContainer />
      </Box>
    </section>
  );
}

export default Home;
