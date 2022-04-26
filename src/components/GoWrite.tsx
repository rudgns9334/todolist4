import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const GoWrite:React.FC = () => {
    return(
        <Box display="flex" justifyContent="center">
            <Link to="/write" style={{textDecoration : 'none'}}>
            <Button variant="outlined" color="primary">글쓰기</Button>
            </Link>
        </Box>
       
    )
}

export default GoWrite;