function openchat() {
  document.getElementById("FormHandler").style.display = "block";
}

function closechat() {
  document.getElementById("FormHandler").style.display = "none";
}
function messageHandler() {
  let msg = document.getElementById("msgTextArea");
  if (msg.value.length !== 0) {
    let container = document.createElement("div");

    container.classList.add("container");
    container.classList.add("fady");
    let msgP = document.createElement("p");
    msgP.innerText = msg.value;
    let msgSpan = document.createElement("span");
    msgSpan.style.float = "right";

    let x = new Date();
    msgSpan.innerText = x.getHours() + ":" + x.getMinutes();
    
    let msgLable = document.createElement("label");
    msgLable.innerText = "no3man";
    container.appendChild(msgLable);
    container.appendChild(msgP);
    container.appendChild(msgSpan);

    document.getElementById("msgs-container").appendChild(container);
    document.getElementById("msgTextArea").value = "";
  } else {
    msg.style.borderColor = "red";
  }
}
