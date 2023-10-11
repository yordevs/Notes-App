import styles from './app.module.css';
import { useState, useEffect } from 'react'

interface Note {
  title: string;
  content: string
  inEdit: boolean
}
interface NoteInput {
  note: Note;
  idx: number;
  del: (i : number) => void;
  edit: (i : number) => void;
}

interface NoteEditInput {
  note: Note;
  idx: number;
  save: (i : number, n: Note) => void;
}

function Note({note, idx, del, edit} : NoteInput) {
  return (
    <div className={styles.note}>
      <div className={styles.note_info}>
        <h2 className={styles.note_title}>{note.title}</h2>
        <p className={styles.note_content}>{note.content}</p>
      </div>
      <div className={styles.note_buttons}>
        <button onClick={() => del(idx)}>Delete</button>
        <button onClick={() => edit(idx)}>Edit</button>
      </div>
  </div>
  )
}

function EditableNote({note, idx, save}: NoteEditInput) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content); 
  return (
    <div className={styles.editable_note}>
    <input className={styles.title} placeholder='Title' onChange={e => setTitle(e.target.value)} value={title}></input>
    <textarea className={styles.content} placeholder='Content' onChange={e => setContent(e.target.value)} value={content}></textarea> 
    <div className={styles.note_buttons}>
    <button onClick={() => save(idx, {title, content, inEdit: false})}>Save</button>
    </div>
  </div>
  )
}

export function App() {
  const localNotesRaw = localStorage.getItem("notes")
  const localNotes: Note[] = localNotesRaw ? JSON.parse(localNotesRaw) : [];
  const [notes, setNotes] = useState(localNotes);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  
  const deleteNote = (i : number) => {
    const newNotes = [...notes]
    newNotes.splice(i,1);
    setNotes(newNotes);
  }
  const editNote = (i : number) => {
    const newNotes = [...notes]
    const note = newNotes[i]
    note.inEdit = true;
    newNotes.splice(i,1,note);
    setNotes(newNotes);
  }
  const saveNote = (i : number, n: Note) => {
    const newNotes = [...notes]
    newNotes.splice(i,1,n);
    setNotes(newNotes);
  }
  return (
    <div className={styles.main}>
      <h1> Notes App</h1>
      <div className={styles.notes}>
      {notes.length ?
        notes.map((note: Note, i: number) => 
          note.inEdit 
          ? <EditableNote note={note} idx={i} save={saveNote} /> 
          : <Note note={note} idx={i} del={deleteNote} edit={editNote} />
        
        )
      : <h2>No Notes left</h2>
      }
      </div>
      <div className={styles.add_note}>
        <input className={styles.title} placeholder='Title' onChange={e => setInputTitle(e.target.value)} value={inputTitle}></input>
        <textarea className={styles.content} placeholder='Content' onChange={e => setInputContent(e.target.value)} value={inputContent}></textarea>
        <div>
          <button onClick={
            () => {
                if (!inputTitle || !inputContent) {
                  alert("Put in a title and content for the note!")
                  return
                }
                setNotes([...notes, {title:inputTitle, content:inputContent, inEdit: false}])
                setInputTitle("")
                setInputContent("")
              }
            }>
            Add Note
            </button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
