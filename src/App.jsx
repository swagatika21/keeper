import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from "./CreateArea";

function App()
 {
  const [notes,setNotes]=useState([]);

  function addNote(newnote)
  {
    setNotes(prevnotes=>{
     return [...prevnotes,newnote]
    })
  }

  function deleteNote(id){
  setNotes(prevnotes=>{
    return prevnotes.filter((noteItem,index)=>{
       return index!==id
    })
  })
  }
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      
       {notes.map((noteItem,index)=>{
        return(<Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content} 
        ondelete={deleteNote}
        />
        )
      })} 
      
      <Footer />
    </div>
  );
}

export default App;