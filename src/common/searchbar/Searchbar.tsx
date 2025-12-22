import {useState} from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import {IconButton} from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"

type Props = {
    value: string
    onSearch: (query: string) => void
    textFieldSx?: object
    buttonSx?: object
    onChange?: (value: string) => void
    onClear?: () => void
};

export const SearchBar = ({onClear, value, onSearch, onChange, textFieldSx, buttonSx }: Props) => {
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
                style={textFieldSx}
                label="Search"
                variant="outlined"
                value={query}
                onChange={handleChange}
                fullWidth
                InputProps={{ endAdornment: query && ( <IconButton onClick={handleClear} size="small">
                            <ClearIcon />
                        </IconButton>
                    ),
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
