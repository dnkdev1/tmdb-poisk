import { Box, Skeleton, Typography } from "@mui/material";
import s from './castsswiper.module.css'

interface CastSwiperProps {
    credits: any;
    isMobileResolution: boolean;
}

export const CastsSwiper: React.FC<CastSwiperProps> = ({ credits, isMobileResolution }) => {
    if (!credits?.cast) {
        return (
            <Box sx={{ display: "flex", gap: 2 }}>
                {Array.from(new Array(isMobileResolution ? 3 : 6)).map((_, index) => (
                    <Box key={index} sx={{ position: "relative", margin: 1 }}>
                        <Skeleton
                            variant="rectangular"
                            width={120}
                            height={180}
                            sx={{ borderRadius: "10px" }}
                        />
                        <Skeleton variant="text" width={100} sx={{ mt: 1 }} />
                        <Skeleton variant="text" width={80} />
                    </Box>
                ))}
            </Box>
        );
    }

    return (
        <div className={s.castSection}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
                Cast
            </Typography>

            {isMobileResolution ? (
                <Box
                    sx={{
                        display: "flex",
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        gap: 2,
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {credits.cast.map((actor: any) => (
                        <Box
                            key={actor.id}
                            sx={{
                                flex: "0 0 auto",
                                scrollSnapAlign: "start",
                                position: "relative",
                            }}
                        >
                            <img className={s.castImage}
                                src={
                                    actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                        : "https://placehold.co/120x180/EEE/31343C?font=montserrat&text=no%20poster"
                                }
                                alt={actor.name}
                                style={{
                                    borderRadius: "50%",
                                    width: "160px",
                                    height: "160px",
                                    objectFit: "cover",
                                }}
                            />
                            <Typography variant="subtitle2">{actor.name}</Typography>
                            <Typography variant="caption">{actor.character}</Typography>
                        </Box>
                    ))}
                </Box>
            ) : (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                    {credits.cast.slice(0, 6).map((actor: any) => (
                        <Box key={actor.id} sx={{ position: "relative", margin: 1 }}>
                            <img className={s.castImage}
                                src={
                                    actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                        : "https://placehold.co/120x180/EEE/31343C?font=montserrat&text=no%20poster"
                                }
                                alt={actor.name}
                                style={{
                                    borderRadius: "50%",
                                    width: "160px",
                                    height: "160px",
                                    objectFit: "cover",
                                }}
                            />
                            <Typography variant="subtitle2">{actor.name}</Typography>
                            <Typography variant="caption">{actor.character}</Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </div>
    );
};