import React from "react";
import { Box, TextField } from "@mui/material";

const Writer:React.FC = () => {
    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box m={1} pt={3} width={1000}>
                <TextField label="제목"
                                variant="filled"
                                fullWidth />
            </Box>
            <Box m={1} pt={2} width={1000}>
                <TextField label="내용"
                                multiline
                                rows={20}
                                fullWidth
                                variant="outlined" />
            </Box>
        </Box>
    );
}

export default Writer;