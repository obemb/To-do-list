import { Button, Container, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import './App.css';
function App() {
  const [input,setInput] = useState("")
  const [list,setList] =useState([
    {id:1,value:'Chisom'},
    {id:2,value:'Peter'},
  ])
  function updateInput(e){
    setInput(e.target.value)
  }
  function add(){
      const newList= [...list,{id:list.length+1,value:input}]
      setList(newList)
      setInput("")
  }
  function _delete(id){
    setList(list.filter(x=>x.id!=id))
  }

  return (
    <div>
      <Container maxWidth="xs" className='wrapper'>
        <h2>Simple To-do-list</h2>
        <input type="text" onChange={updateInput} value={input}/>
        <Button onClick={add}>Add</Button>
        {list.map(data=>
          <div>
            <span style={{padding:'8px',width:'100px'}} >{data.value}</span>
            <Button onClick={()=>_delete(data.id)}>Delete</Button>
          </div>
        )}
      </Container>
    </div>
  );
}
export default App;

