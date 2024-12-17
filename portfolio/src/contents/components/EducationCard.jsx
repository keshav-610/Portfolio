import { Box, Typography } from "@mui/material"
const EducationCard = ({ logo, name, type, duration, percent }) => {
  return (
    <Box>
      <Box sx={{
        border: "1px solid grey", padding: "15px", borderRadius: "20px", transition: "transform 0.3s", cursor: "pointer", "&:hover": {
          transform: "translateY(-10px)"
        }
      }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", gap: "20px" }}>
          <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
            <Box>
              <Typography variant="h4" sx={{ fontFamily: "SF Pro Display Black, sans-serif" }}>
                {name}
              </Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-around"}}>
              <Typography  variant="h6" sx={{fontFamily: "SF Pro Display Medium, sans-serif", fontSize:"22px"}}>
                {type}
              </Typography>
              <Typography  variant="h6" sx={{fontFamily: "SF Pro Display Medium, sans-serif", fontSize:"22px", color:"#26eb33"}}>
                {percent}
              </Typography>
              <Typography  variant="h6" sx={{fontFamily: "SF Pro Display Medium, sans-serif", fontSize:"22px", color:"#5c5c59"}}>
                {duration}
              </Typography>
            </Box>
          </Box>
          <Box>
            <img src={logo} width={100} />
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default EducationCard