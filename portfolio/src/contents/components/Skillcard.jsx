import { Box, Typography, LinearProgress } from "@mui/material";

const Skillcard = ({ imgSrc, altText, header, percent }) => {
  return (
    <Box
      sx={{
        width: {
          md: "35%",
          xs: "70%"
        },
        display: 'flex',
        flexDirection: "column",
        marginBottom: "35px",
        gap: 1.5

      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={imgSrc} alt={altText} height={40} />
          <Typography
            variant="h5"
            sx={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontFamily: "SF Pro Display, sans-serif",
              fontSize: "26px",
              letterSpacing: "0.1px"
            }}
          >
            {header}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: "20px",
              fontFamily: "SF Pro Display, san-serif",
            }}
          >
            {percent}%
          </Typography>
        </Box>
      </Box>
      <Box>
        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{
            height: "20px",
            borderRadius: "5px",
            backgroundColor: "#e3e4e6",
          }}
        />
      </Box>
    </Box>
  );
};

export default Skillcard;
