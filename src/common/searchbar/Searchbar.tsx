import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type Props = {
    onSearch: (query: string) => void
    textFieldSx?: object
    buttonSx?: object
}

export const SearchBar = ({ onSearch, textFieldSx, buttonSx }: Props) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <Box display="flex" alignItems="center" gap={2}>
            <TextField
                style={textFieldSx}
                label="Search"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
            />
            <Button
                style={buttonSx}
                variant="contained"
                // color="primary"
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    );
};
