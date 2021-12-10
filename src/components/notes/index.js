import React, { useState, useEffect } from 'react';
import '../../styles/notes.scss';
import {reveal as Menu} from 'react-burger-menu'
import { Column, Button } from "rbx";
import List from "../notes/list";
import NoteService from "../../services/notes"

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({title:"", body: "", id:""});


  async function fetchNotes(){
    const response = await NoteService.index();
    console.log(response)
    if (response.data.lenght >=1){
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    }
  }

  const selectNote = (id) => {
    const note = notes.find((note)=>{
      return note._id == id;
    })
    setCurrentNote(note)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return(
      <>
        <Column.Group className="notes" id="notes">
          <Menu
            pageWrapId={"notes-editor"}
            isOpen={props.isOpen}
            onStateChange={(state) => props.setIsOpen(state.isOpen)}
            disableAutoFocus
            outerContainerId={"notes"}
            customBurgerIcon={false}
            customCrossIcon={false}
          >
            <Column.Group>
              <Column size={10} offset={1}>
                Search...
              </Column>
            </Column.Group>
            <List notes={notes} selectNote={selectNote} current_note={currentNote} />
          </Menu>


        <Column size={12} className="notes-editor" id="notes-editor">
          Editor...
        </Column>
      </Column.Group>
      </>
  )
}

export default Notes