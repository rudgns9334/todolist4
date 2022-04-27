import React, { useState } from "react";
import { Box, Typography, Button, Card, CardHeader, CardContent } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import { ListProps } from "../components/List";

type ReadProps = {
    item: ListProps[];
}

const Read:React.FC<ReadProps> = ({ item }) => {
    const { itemId } = useParams();
    const [value, setValue] = useState<string>(item.filter(i=>i.id === itemId)[0].title);
    const [content, setContent] = useState<string>(item.filter(i=>i.id === itemId)[0].content);

    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <GoBack />
            <Box m={2} pt={3}>
            <Card sx={{width:"1000px"}}>
                <CardHeader title={value} />
                <CardContent>
                    <Typography variant="body2">{content}</Typography>
                </CardContent>
            </Card>
            </Box>
            <Box m={2} pt={3}>
                <Link to={`/update/${itemId}`} style={{textDecoration : 'none'}}>
                    <Button size="large">수정</Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Read;