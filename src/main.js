// const chatBox = document.querySelector('.chat-box');
// const inputField = chatBox.querySelector('input[type="text"]');
// const button = chatBox.querySelector('button');
// const chatBoxBody = chatBox.querySelector('.chat-box-body');

// button.addEventListener('click', sendMessage);
// inputField.addEventListener('keypress',function(event){
//     if(event.key === 'Enter'){
//         sendMessage();
//     }
// });

// function sendMessage(){
//     const message = inputField.value;
//     inputField.value = '';
//     chatBoxBody.innerHTML += `<div className="message">${message}</div>`;
//     scrollToBottom();

//     fetch('http://localhost:3000/message',{
//         method : 'POST',
//         headers : {
//             'content-Type' : 'application/json'
//         },
//         body:JSON.stringify({message})
//     }).then(response => response.json())
//     .then(data => {
//     chatBoxBody.innerHTML += `<div className="response">${data.message}</div>`;
//     scrollToBottom();
//     });
// }

// function scrollToBottom(){
//     chatBoxBody.scrollTo = chatBoxBody.scrollHeight;
// }

