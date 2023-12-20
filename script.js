function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    /*if (message !== "") {
        var chatBox = document.getElementById("chat-box");
        var newMessage = document.createElement("div");
        // Verificar si el mensaje es del usuario o del bot
        if (message.toLowerCase().startsWith("Bot:")) {
            newMessage.className = "bot-message";
        } else {
            newMessage.className = "user-message";
        }

        newMessage.textContent = message;
        chatBox.appendChild(newMessage);

        // Limpiar el input después de enviar el mensaje
        messageInput.value = "";

        // Hacer scroll hacia abajo para mostrar el nuevo mensaje
        chatBox.scrollTop = chatBox.scrollHeight;
    }*/
}
