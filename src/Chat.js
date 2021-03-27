import React from 'react'
import './Chat.css'

function Chat() {
    return (
        <div className="chat">

            <p className={`chat_msg ${true && 'chat_receive'}`}>
                <span className="chat_name">User1</span>
                hello
                <span className="chat_time">4:00pm</span>
            </p>

            <p className={`chat_msg ${false && 'chat_receive'}`}>
                <span className="chat_name">User2</span>
                hello, How are you ??
                <span className="chat_time">4:02pm</span>
            </p>



        </div>
    )
}

export default Chat
