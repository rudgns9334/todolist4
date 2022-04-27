import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Read from "../pages/Read";
import Write from "../pages/Write";
import Update from "../pages/Update";
import Todolist from "./Todolist";

export type ListProps = {
    id: string;
    title: string;
    content: string;
}

const List:React.FC = () => {

    const [list, setList] = useState<ListProps[]>([]);

    const AddList = (_title:string, _content:string) => {
        var newId = Math.random().toString(36).substr(2.16);
        var newList = {
            id : newId,
            title: _title,
            content: _content
        }
        setList([...list,newList]);
    }

    const UpdateList = (id:string|undefined, value:string, content:string) => {
        if(id){
            const index = list.findIndex((i)=> i.id===id);
            list[index].title = value;
            list[index].content = content;
            setList([...list]);
        }
    }

    return(
        <Routes>
      <Route path="/" element={
        <>
        <Home />
        <Todolist item={list} />
        </>
      } />
      <Route path="/write" element={<Write onAddList={AddList}/>} />
      <Route path="/read/:itemId" element={<Read item={list}/>} />
      <Route path="/update/:itemId" element={<Update item={list} onUpdateList={UpdateList}/>} />
    </Routes>
    )
}

export default List;