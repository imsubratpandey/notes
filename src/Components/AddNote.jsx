import React, { useState } from "react";
import styled from "styled-components";

export default function AddNote({ hideAddMenu, setHideAddMenu, addNote }) {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const submit = (element) => {
        element.preventDefault();
        addNote(title, note);
        setTitle("");
        setNote("");
        setHideAddMenu({ display: "none" })
    }

    return (
        <div style={hideAddMenu}>
            <AddNotePopup>
                <button className="close" onClick={() => { setHideAddMenu({ display: "none" }); setTitle(""); setNote(""); }}>x</button>
                <div>
                    <h3>Add a note</h3>
                    <form onSubmit={submit}>
                        <input className="title" type="text" placeholder="Title" value={title} minLength="3" maxLength="50" required onChange={(element) => { setTitle(element.target.value) }} />
                        <textarea className="note" type="text" placeholder="Note" value={note} required onChange={(element) => { setNote(element.target.value) }}></textarea>
                        <button className="submit" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </AddNotePopup>
        </div>
    )
}

const AddNotePopup = styled.div`
position: fixed;
z-index: 1;
background-color: rgba(255, 255, 255, 1);
width: 100vw;
height: 100vh;
h3{
    margin: 2rem 0rem 0rem 1rem;
    font-size: 2rem;
}
form{
    margin: 1rem 0rem 2rem 1rem;
    width: 50vw;
    display: flex;
    flex-direction: column;
    .title{
        width: 90vw;
        height: 2rem;
        font-family: Ubuntu;
        margin: 0rem 0rem 0.25rem 0rem;
        padding: 0rem 0rem 0rem 0.25rem;
        &::-webkit-scrollbar {
            width: 0.2rem;
            &-thumb {
              background-color: rgba(84, 83, 83, 1);
              width: 0.1rem;
              border-radius: 1rem;
            }
        }
    }
    .title::placeholder{
        font-family: Ubuntu;
    }
    .note{
        width: 90vw;
        height: 65vh;
        font-family: Ubuntu;
        margin: 0.25rem 0rem 0.25rem 0rem;
        padding: 0.25rem 0.25rem 0.25rem 0.25rem;
        resize: none;
        transition: 0.1s;
        @media screen and (min-height: 0px) and (max-height: 500px) {
            height: 25vh;
          }
        &::-webkit-scrollbar {
            width: 0.2rem;
            &-thumb {
              background-color: rgba(84, 83, 83, 1);
              width: 0.1rem;
              border-radius: 1rem;
            }
          }
    }
    .note::placeholder{
        font-family: Ubuntu;
        padding: 0.1rem 0rem 0rem 0.1rem;
    }
    .submit{
        width: 5rem;
        height: 2rem;
        border: 0px;
        border-radius: 4px;
        padding: 0px;
        margin: 0.25rem 0rem 0rem 0rem;
        font-size: 1rem;
        background-color: rgba(31, 147, 242, 1);
        color: white;
        cursor: pointer;
    }
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