import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import { ListProps } from "../components/List";

type UpdateProps = {
    item: ListProps[];
    onUpdateList: (id: string|undefined, value: string, content: string) => void;
}

const Update:React.FC<UpdateProps> = ({ item, onUpdateList }: UpdateProps) => {
    const { itemId } = useParams<string>();
    const [value, setValue] = useState<string>(item.filter(i=>i.id === itemId)[0].title);
    const [content, setContent] = useState<string>(item.filter(i=>i.id === itemId)[0].content);

    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <GoBack />
            <Box m={1} pt={3} width={1000}>
                <TextField label="제목"
                                variant="filled"
                                fullWidth
                                defaultValue={value}
                                onChange ={(e) => {setValue(e.target.value)}}/>
            </Box>
            <Box m={1} pt={2} width={1000}>
                <TextField label="내용"
                                multiline
                                rows={20}
                                fullWidth
                                variant="outlined"
                                defaultValue={content}
                                onChange={(e)=>{setContent(e.target.value)}} />
            </Box>
            <Box m={2} pt={3}>
                <Link to="/" style={{textDecoration : 'none'}}>
                    <Button size="large" onClick={(e)=>{
                        onUpdateList(itemId, value, content);
                        setValue("");
                        setContent("");
                    }}>추가</Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Update;