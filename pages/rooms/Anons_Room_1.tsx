import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="https://media.licdn.com/dms/image/D4E0BAQF6gMSNL5xYCA/company-logo_200_200/0/1692892036736/scroll_io_logo?e=2147483647&v=beta&t=lN1d9ETN4PIIvDN4cWIaKzhzIp8DJMt3WxkOru6OBMA" alt="User Picture" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
          <div style={{ fontStyle: 'italic', color: 'Cyan', fontFamily: 'Concert One', fontSize: '20px'  }}>Anon 1's Community Name</div>
        </div>
        <div style={{ border: '2px solid cyan', backgroundColor: '#fff', width: '400px', height: '500px', overflow: 'hidden', borderRadius: '15px',  }}>
          <div style={{ height: '400px', overflowY: 'auto', padding: '10px' }}>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            style={{ width: '100%', padding: '10px', border: 'none', outline: 'none', backgroundColor: '#eee'  }}
          />
          <button onClick={handleSendMessage} style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: 'cyan', 
            color: 'white', 
            border: 'none', cursor: 'pointer' ,}}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
