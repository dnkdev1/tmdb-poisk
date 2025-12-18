import {IconButton} from "@mui/material";

type Props = {
    voteAverage: number
    onClick: () => void
}

export const RatingButton = ({voteAverage, onClick}: Props) => {

    const rounded = Math.ceil(voteAverage * 10) / 10
    const fixedVoiteAverage = rounded.toFixed(1)

    let color
    if (Number(fixedVoiteAverage) >= 7)
        color = '#22c55e'

    if ( Number(fixedVoiteAverage) > 5 && Number(fixedVoiteAverage) < 7)
        color = '#facc15'

    return (
        <IconButton
            sx={{
                position: "absolute",
                top: 250,
                right: 20,
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: `${color}`,
                color: "white",
                fontSize: "14px",
                "&:hover": {backgroundColor: "rgba(0,0,0,0.9)"},
            }}
            onClick={() => onClick()}
        >
            {fixedVoiteAverage}
        </IconButton>
    )
}
