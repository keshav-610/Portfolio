import { Card, Typography, CardActionArea, Button, CardMedia, CardContent, Box } from "@mui/material";

const ProjectCard = ({ image, link, header, description, tools_used }) => {
  const handle_navigate = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Card sx={{
      maxWidth: "375px",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      marginBottom: "20px",
    }}>
      <CardActionArea sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight:"440px"
      }} >
        <Box>
          <CardMedia component="img" height="140" image={image} alt={header} />
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{
              fontWeight: 700,
              fontFamily: "SF Pro Display, sans-serif",
              fontStyle: "italic",
              color: "#333"
            }}>
              {header}
            </Typography>
            <Typography gutterBottom variant="body2" sx={{ color: "#555" }}>
              {description}<br /><br />
              <Typography component="span" gutterBottom sx={{ fontWeight: 600, color: "#000" }}>
                Tools used:
              </Typography> {tools_used}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={() => handle_navigate(link)}
            sx={{ fontWeight: "bold", margin: "10px" }}
          >
            Visit GitHub
          </Button>
        </Box>
      </CardActionArea>

    </Card>
  );
}

export default ProjectCard;
