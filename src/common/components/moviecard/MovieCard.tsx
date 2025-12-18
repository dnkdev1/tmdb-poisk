import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type MovieCardProps = {
    title: string;
    posterPath: string;
};

export const MovieCard = ({ title, posterPath }: MovieCardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w185${posterPath}`;

    return (
        <Card sx={{ maxWidth: 200, margin: 2, borderRadius: "15px", boxShadow: "none"}}>
            <CardMedia
                component="img"
                height="280"
                image={imageUrl}
                alt={`${title} poster`}
                sx={{
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}
            />
            <CardContent>
                <Typography variant="subtitle1">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};
