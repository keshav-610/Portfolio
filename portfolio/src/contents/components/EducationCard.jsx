import { Box, Typography } from "@mui/material";

const EducationCard = ({ logo, name, type, duration, percent }) => {
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid grey",
          padding: {xs:"15px",md:"15px"},
          borderRadius: "20px",
          transition: "transform 0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(10px)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            gap:{xs:"10px",md:"20px"},
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around",gap:"10px" }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "SF Pro Display Heavy, sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "19px", md: "34px" }, 
                }}
              >
                {name}
              </Typography>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "SF Pro Display Medium, sans-serif",
                  fontSize: { xs: "17px", md: "22px" },
                }}
              >
                {type}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "SF Pro Display Medium, sans-serif",
                  fontSize: { xs: "17px", md: "22px" },
                  color: "#26eb33",
                }}
              >
                {percent}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "SF Pro Display Medium, sans-serif",
                  fontSize: { xs: "17px", md: "22px" },
                  color: "#5c5c59",
                }}
              >
                {duration}
              </Typography>
            </Box>
          </Box>
          <Box>
            <img
              src={logo}
              style={{
                width: "90%",
                maxWidth: "100px",
                maxHeight: "100px",
              }}
              alt={`${name} logo`}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationCard;
