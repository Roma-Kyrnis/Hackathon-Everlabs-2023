const ws = new WebSocket("ws://localhost:3000");
const datalist = document.getElementById('hints')
let datausers; 
ws.onmessage = function (event) {
    datausers = JSON.parse(event.data) // The received data
    for (i = 0; i < datausers.length; i++) {
        const node = document.createElement("option");
        node.value = "@" + datausers[i].username;
        datalist.appendChild(node);
    }
};


ws.addEventListener("message", function(event) {
    const data = JSON.parse(event.data);
    if (data.type === "message") {
        addMessage(data.message, data.sender);
    }
});

function sendMessage() {
    const message = document.getElementById("message").value;

    if (!message) return false;

    const splitedmsg = message.split(" ");  
    const user = splitedmsg[0].slice(1);
    let userid;
    for (i = 0; i < datausers.length; i++) {
        if (datausers[i].username == user){
            userid = datausers[i].id
        } 
    }
    
    const sender = localStorage.getItem('user')
    ws.send(JSON.stringify({ type: "message", message: message, reseiver_id : userid, sender: JSON.parse(sender)  }));
    addMessage(message, JSON.parse(sender).id);
    document.getElementById("message").value = "";
}

function addMessage(message, user) {
    const node = document.createElement("p");
    const text = document.createTextNode(message);
    if (JSON.parse(localStorage.getItem('user')).id == user){

        node.classList.add('sender')
    }

    node.appendChild(text);

    document.getElementById("chat").appendChild(node);
}

