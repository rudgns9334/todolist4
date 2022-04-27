import React from "react";
import { ListProps } from "./List";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

type TodoProps = {
    item: ListProps[];
}

const Todolist:React.FC<TodoProps> = ({ item }) => {
    return(
      <List component="nav" sx={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
      }}>
      {item.map(i=>
            <ListItem button component={Link} to={`/read/${i.id}`} key={i.id} sx={{width:"1000px"}}>
                <ListItemText primary={i.title} />
            </ListItem>
        )}
        </List>
    );
}

export default Todolist;