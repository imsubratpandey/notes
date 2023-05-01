import React from "react";
import NotesItem from "./NotesItem";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export default function Notes({ notes, onDelete, setCurrentNote, setHideViewWindow }) {
    let message;
    const messageStyle = { padding: "1rem", fontSize: "1rem", fontWeight: "bold", textAlign: "center" };
    if (!notes.length) { message = <p style={messageStyle}>Notes you add appear here</p>; }
    else { message = ""; }

    return (
        <NoteBox>
            {notes.map((note) => {
                return (
                    <NotesItem noteItem={note} onDelete={onDelete} setCurrentNote={setCurrentNote} setHideViewWindow={setHideViewWindow} key={uuidv4()} />
                )
            })}
            {message}
        </NoteBox>
    )
}

const NoteBox = styled.div`
margin: auto;
width: 75vw;
@media screen and (min-width: 0px) and (max-width: 700px) {
    width: 100vw;
  }
`;