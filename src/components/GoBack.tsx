import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const GoBack:React.FC = () => {
    return(
        <div>
            <Link to=".." style={{textDecoration : 'none'}}>
                <Button variant="outlined" color="primary">뒤로 가기</Button>
            </Link>
        </div>
    )
}

export default GoBack;