import {useState} from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import {IconButton} from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {selectThemeMode} from "../../app/app-slice.ts";
import {getTheme} from "../theme/theme.ts";

type Props = {
    value: string
    onSearch: (query: string) => void
    textFieldSx?: object
    buttonSx?: object
    onChange?: (value: string) => void
    onClear?: () => void
};

export const SearchBar = ({onClear, value, onSearch, onChange, buttonSx }: Props) => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    const [query, setQuery] = useState(value)

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setQuery(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }

    const handleClear = () => {
        setQuery("")
        if (onChange) {
            onChange("")
        }
        if(onClear){
            onClear()
        }
    }

    return (
        <Box display="flex" alignItems="center" gap={2}>


            <TextField
                sx={{
                    color: theme.palette.mode === "light" ? "black" : "white",
                    backgroundColor: theme.palette.mode === "light" ? "white" : "black",
                    height: "50px",
                    width: "430px",
                    borderRadius: "40px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #d3d3d3",
                        borderRadius: "50px",
                        transition: "all 0.2s ease",   // плавный переход
                    },
                    "& .MuiInputBase-input::placeholder": {
                        color: theme.palette.mode === "light" ? "black" : "white",
                        opacity: 1,
                    },
                    "& .MuiOutlinedInput-root": {
                        height: "50px",
                        alignItems: "center",
                        "&:hover fieldset": {
                            borderColor: "#d3d3d3", // убираем hover‑эффект
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "transparent",   // убираем цвет основной рамки
                            borderWidth: "3px",
                            boxShadow: "0 0 0 4px #2563eb", // увеличиваем spread → создаётся зазор
                        }
                    },
                }}
                placeholder="Search for a movie"
                variant="outlined"
                value={query}
                onChange={handleChange}
                fullWidth

                slotProps={{
                    input: {
                        endAdornment: query && (
                            <IconButton onClick={handleClear} size="small">
                                <ClearIcon />
                            </IconButton>
                        ),
                    },
                }}

            />



            <Button
                style={buttonSx}
                variant="contained"
                onClick={handleSearch}
                disabled={query === '' ? true : false}
            >
                Search
            </Button>
        </Box>
    );
};
