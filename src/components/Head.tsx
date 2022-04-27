import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Head:React.FC = () => {

    return(
        <Link to="/" style={{textDecoration : 'none'}}>
        <Typography variant="h1" component="h2" align="center">TODOLISTv4</Typography>
        </Link>
    )
}

export default Head;