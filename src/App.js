import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import AddNote from "./Components/AddNote";
import ViewNote from "./Components/ViewNote";

function App() {

  const [hideAddMenu, setHideAddMenu] = useState({ display: "none" });
  const [hideViewWindow, setHideViewWindow] = useState({ display: "none" });
  const [currentNote, setCurrentNote] = useState("");

  let initialiseNotes;
  if (localStorage.getItem("notes") === null) {
    initialiseNotes = [];
  } else {
    initialiseNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const addNote = (title, note) => {
    let sno;
    if (notes.length === 0) {
      sno = 1;
    }
    else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const newNote = {
      sno: sno,
      title: title,
      note: note,
    };
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const onDelete = (noteItem) => {
    console.log("delete function");
    setNotes(notes.filter((element) => { return (element !== noteItem) }));
  };

  const [notes, setNotes] = useState(initialiseNotes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  return (

    <>
      <AddNote hideAddMenu={hideAddMenu} setHideAddMenu={setHideAddMenu} addNote={addNote} />
      <ViewNote currentNote={currentNote} setCurrentNote={setCurrentNote} hideViewWindow={hideViewWindow} setHideViewWindow={setHideViewWindow} />
      <Header title="Notes" setHideAddMenu={setHideAddMenu} />
      <Notes notes={notes} onDelete={onDelete} setCurrentNote={setCurrentNote} setHideViewWindow={setHideViewWindow} />
    </>
  );
}

export default App;
