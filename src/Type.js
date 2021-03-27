import React,{useState} from 'react';
import './Type.css';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function Type() {

    const [input,setInput] = useState('');

    const sendMsg = (e) =>{
        e.preventDefault();
        console.log(input);
        setInput("");
    }


    return (
        <div className="type">
            <div className="type_body">
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text"></input>
                    <button onClick={sendMsg} type="submit">Send a Message</button>
                </form>
                <IconButton>
                    <SendIcon style={{color:'#00BCD4'}}></SendIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default Type
