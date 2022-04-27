import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const GoBack:React.FC = () => {
    return(
        <Box display="flex" justifyContent="center">
            <Link to=".." style={{textDecoration : 'none'}}>
                <Button variant="outlined" color="primary">뒤로 가기</Button>
            </Link>
        </Box>
    )
}

export default GoBack;