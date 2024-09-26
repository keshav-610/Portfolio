import { Card,CardMedia,CardContent,Typography } from "@mui/material"
const ExperienceCard = ({imageSrc,header,description,duration}) => {
    return (
        <Card sx={{
            maxWidth: "375px",
            minHeight:{md:"385px"},
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            marginBottom: "20px",
            mx: { xs: "40px", md: "0" }
        }}>
            <CardMedia component="img" height={140} image={imageSrc} sx={{display:{xs:"none",md:"block"}}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{
                    fontWeight: 700,
                    fontFamily: "SF Pro Display, sans-serif",
                    fontStyle: "italic",
                    color: "#333"
                }}>{header}</Typography>
                <Typography gutterBottom variant="body2" sx={{ color: "#555" }}>{description}</Typography><br />
                <Typography gutterBottom variant="subtitle2" sx={{fontWeight:"600"}}>Date : {duration}</Typography>
            </CardContent>
        </Card>
    )
}

export default ExperienceCard