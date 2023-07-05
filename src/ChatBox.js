// import React, { useState } from 'react';
// import './ChatBox.css';


// function ChatBox({ apiKey }) {
//   const [inputValue, setInputValue] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);

//   const sendMessage = () => {
//     const message = inputValue;
//     setInputValue('');
//     setChatMessages(prevMessages => [
//       ...prevMessages,
//       { role: 'user', content: message },
//     ]);

//     fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + apiKey,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           { role: 'system', content: 'You are a helpful assistant.' },
//           { role: 'user', content: message },
//           ...chatMessages,
//         ],
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         const responseMessage = data.choices[0].message.content;
//         setChatMessages(prevMessages => [
//           ...prevMessages,
//           { role: 'assistant', content: responseMessage },
//         ]);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   const handleInputChange = event => {
//     setInputValue(event.target.value);
//   };

//   const handleKeyPress = event => {
//     if (event.key === 'Enter') {
//       sendMessage();
//     }
//   };

//   return (
//     <div className="chat-box">
//       <div className="chat-box-header">Chatbox</div>
//       <div className="chat-box-body">
//         {chatMessages.map((message, index) => (
//           <Message key={index} role={message.role}>
//             {message.content}
//           </Message>
//         ))}
//       </div>
//       <div className="chat-box-footer">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// const Message = ({ role, children }) => (
//   <div className={`message ${role}`}>
//     <div className="message-content">{children}</div>
//   </div>
// );

// export default ChatBox;


import React, { useState } from 'react';
import './ChatBox.css';

function ChatBox({ apiKey }) {
  const [inputValue, setInputValue] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    const message = inputValue;
    setInputValue('');
    setChatMessages(prevMessages => [
      ...prevMessages,
      { role: 'user', content: message },
    ]);

    setIsLoading(true);

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + apiKey,
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: message },
                ...chatMessages,
              ],
            }),
          });
          

      const data = await response.json();
      const responseMessage = data.choices[0].message.content;
      setChatMessages(prevMessages => [
        ...prevMessages,
        { role: 'assistant', content: responseMessage },
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-box-header">Chatbox</div>
      <div className="chat-box-body">
        {chatMessages.map((message, index) => (
          <Message key={index} role={message.role}>
            {message.content}
          </Message>
        ))}
      </div>
      <div className="chat-box-footer">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

const Message = ({ role, children }) => (
  <div className={`message ${role}`}>
    <div className="message-content">{children}</div>
  </div>
);

export default ChatBox;
