import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import CreateNote from './component/CreateNote';
import Header from './component/Header';
import Note from './component/Note';
import { NoteObj } from './models/note';

function App() {
  const [notes,setnotes] = useState<NoteObj[]>([]);

  useEffect(()=>{
    if(sessionStorage.getItem("notes")){
      setnotes(JSON.parse(sessionStorage.getItem("notes") as string))
    }
  },[])
  const addNotes = (note:NoteObj) =>{
    setnotes([note,...notes]);
    sessionStorage.setItem("notes",JSON.stringify([note,...notes]))
  }
  const deleteNote = (id:number) => {
    const updatedNotes = notes.filter(note=>note.id !==id);
    setnotes(updatedNotes)
    sessionStorage.setItem("notes",JSON.stringify(updatedNotes))
  }
  return (
   <>
   <Header/>
   <Box style={{padding:20}}>
    <CreateNote addNotes={addNotes}/>
    <Note notes={notes} deleteNote={deleteNote}/>
   </Box>
   </>
  );
}

export default App;
