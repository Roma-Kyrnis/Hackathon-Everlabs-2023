const ws = new WebSocket("ws://localhost:3000");
const datalist = document.getElementById('hints')
let datausers; 
ws.onmessage = function (event) {
    
    datausers = JSON.parse(event.data) // The received data
    for (i = 0; i < datausers.length; i++) {
        const node = document.createElement("option");
        node.value = "@" + datausers[i].name;
        node.custom = datausers[i]
        datalist.appendChild(node);
    }
};


ws.addEventListener("message", function(event) {
    const data = JSON.parse(event.data);

    if (data.type === "message") {
        addMessage(data.data);
    }
});

function sendMessage() {
    const message = document.getElementById("message").value;

    if (!message) return false;

    const splitedmsg = message.split(" ");  
    const user = splitedmsg[0].slice(1);
    let userid;
    for (i = 0; i < datausers.length; i++) {
        if (datausers[i].name == user){
            userid = datausers[i].id
        } 
    }
    
    const sender = localStorage.getItem('user')
    ws.send(JSON.stringify({ type: "message", message: message, owner_id : userid, sender: sender  }));
    addMessage(message);
    document.getElementById("message").value = "";
}

function addMessage(message) {
    const node = document.createElement("li");
    const text = document.createTextNode(message);

    node.appendChild(text);

    document.getElementById("chat").appendChild(node);
}

