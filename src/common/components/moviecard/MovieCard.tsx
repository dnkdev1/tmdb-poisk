import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type MovieCardProps = {
    title: string;
    posterPath: string;
};

export const MovieCard = ({ title, posterPath }: MovieCardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w185${posterPath}`;

    return (
        <Card sx={{ maxWidth: 200, margin: 2 }}>
            <CardMedia
                component="img"
                height="280"
                image={imageUrl}
                alt={`${title} poster`}
            />
            <CardContent>
                <Typography variant="subtitle1" noWrap>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};
