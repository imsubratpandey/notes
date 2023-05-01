import React from "react";
import styled from "styled-components";

export default function NotesItem({ noteItem, onDelete, setCurrentNote, setHideViewWindow }) {

  const deleteButtonStyle = { border: "0px", padding: "0rem 0rem 1rem 0rem", fontSize: "1rem", fontWeight: "bold", backgroundColor: "rgba(25, 255, 255, 0)", color: "red", cursor: "pointer" };
  const viewButtonStyle = { border: "0px", padding: "0rem 1rem 0rem 0rem", fontSize: "1rem", fontWeight: "bold", backgroundColor: "rgba(0, 0, 255, 0)", color: "blue", cursor: "pointer" };

  return (
    <Note>
      <h3 className="truncate">{noteItem.title}</h3>
      <p className="truncate">{noteItem.note}</p>
      <button onClick={() => { setCurrentNote(noteItem); setHideViewWindow() }} style={viewButtonStyle}>View</button>
      <button onClick={() => onDelete(noteItem)} style={deleteButtonStyle}>Delete</button>
    </Note>
  )
}

const Note = styled.div`
padding: 1rem;
height: 4.8rem;
overflow: hidden;
text-align: justify;
h3 {
  font-size: 1.2rem;
}
p {
  font-size: 1rem;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;
