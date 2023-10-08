import styles from './app.module.css';
import { useState } from 'react'

export function App() {
  const [notes, setNotes] = useState([{title: 'Note 1', content: 'Make notes app'}]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  return (
    <div>
      <h1> Notes App</h1>
      <div>
      {
        notes.map(note => (
          <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        
        ))
      }
      </div>
      <div>
        <input placeholder='Title' onChange={e => setInputTitle(e.target.value)} value={inputTitle}></input>
        <input placeholder='Content' onChange={e => setInputContent(e.target.value)} value={inputContent}></input>
        <button onClick={
          () => {
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
