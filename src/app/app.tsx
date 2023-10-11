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
        <button >Delete</button>
        <button >Edit</button>
      </div>
  </div>
  )
}

function EditableNote({note, idx, save}: NoteEditInput) {
  return (
    <div className={styles.editable_note}>
    <input className={styles.title} placeholder='Title'></input>
    <textarea className={styles.content} placeholder='Content'></textarea> 
    <div className={styles.note_buttons}>
    <button>Save</button>
    </div>
  </div>
  )
}

export function App() {
  
  return (
    <div className={styles.main}>
      <h1> Notes App</h1>
      <div className={styles.notes}>

      </div>
      <div className={styles.add_note}>
        <input className={styles.title} placeholder='Title' ></input>
        <textarea className={styles.content} placeholder='Content' ></textarea>
        <div>
          <button>
            Add Note
            </button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
