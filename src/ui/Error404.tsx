import {Button} from "@mui/material";

export const Error404 = () => {
    return (
        <>
        <div>
            Error404
        </div>

            <Button
                variant="contained"
                href={"/"}
                sx={{
                    width: '100px',
                    height: '40px',
                    borderRadius: "20px",
                    textTransform: "none",
                    padding: "2px",
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? 'white' : '#27354f',
                    color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                }}
            >
                to homepage
            </Button>
            </>
    );
};