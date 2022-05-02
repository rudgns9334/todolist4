import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GoBack from "../components/GoBack";

type WriterProps = {
    onAddList: (title: string, content: string) => void;
}

const Write:React.FC<WriterProps> = ({ onAddList }: WriterProps) => {
    const [value, setValue] = useState<string>("");
    const [content, setContent] = useState<string>("");

    
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
                        onAddList(value, content);
                        setValue("");
                        setContent("");
                    }}>추가</Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Write;