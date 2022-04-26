import React from "react";
import Writer from "../components/Writer";
import GoBack from "../components/GoBack";
import { Box } from "@mui/material";

const Write:React.FC = () => {
    return(
        <div className="write">
            <Writer />
            <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
            <GoBack />
            <GoBack />
            </Box>
            
        </div>
    );
}

export default Write;