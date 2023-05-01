import React from "react";
import styled from "styled-components";

export default function ViewNote({ currentNote, setCurrentNote, hideViewWindow, setHideViewWindow }) {
    return (
        <div style={hideViewWindow}>
            <ViewNotePopup>
                <button className="close" onClick={() => { setHideViewWindow({ display: "none" }); setCurrentNote(""); }}>x</button>
                <h3>{currentNote.title}</h3>
                <p>{currentNote.note}</p>
            </ViewNotePopup>
        </div>
    )
}

const ViewNotePopup = styled.div`
position: fixed;
z-index: 1;
background-color: rgba(255, 255, 255, 1);
width: 100vw;
height: 100vh;
overflow: auto;
&::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: rgba(84, 83, 83, 1);
      width: 0.1rem;
      border-radius: 1rem;
    }
}
h3{
    margin: 4rem 1rem 0rem 1rem;
    text-align: justify;
    font-size: 2rem;
}
p{
    margin: 2rem 1rem 4rem 1rem;
    text-align: justify;
}
.close{
    font-size: 1.7rem;
    font-weight: bold;
    float: right;
    padding: 0.6rem 1rem;
    border: 0px;
    background-color: rgba(25, 255, 255, 0);
    cursor: pointer;
}
`;