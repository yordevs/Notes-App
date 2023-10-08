import styles from './app.module.css';
import { useState } from 'react'

export function App() {
  const [notes, setNotes] = useState([{title: 'Note 1', content: 'Make notes app'}]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  return (
    <div>
      <h1> Notes App</h1>
      <div className={styles.notes}>
      {
        notes.map(note => (
          <div className={styles.note}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        
        ))
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
              setNotes([...notes, {title:inputTitle, content:inputContent}])
              setInputTitle("")
              setInputContent("")
            }
          }>Add Note</button>
      </div>
      
    </div>
  );
}

export default App;
