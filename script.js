let URL_BACK_MESSAGE = 'https://chat-web-back.vercel.app';
let SENDER = 'USER';

function sendMessage(message) {
    fetch(URL_BACK_MESSAGE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Si la respuesta es JSON
    })
    .then(data => {
        // Manejar los datos recibidos después de enviar el mensaje
        console.log(data);
    })
    .catch(error => {
        // Manejar errores
        console.error('Error during fetch operation:', error);
    });
}


function obtenerHoraActual() {
    const fechaActual = new Date();
    let horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const amPM = horas >= 12 ? 'PM' : 'AM';

    // Convertir a formato de 12 horas y asegurarse de tener dos dígitos
    horas = horas % 12 || 12;

    // Formatear los minutos para que siempre tengan dos dígitos
    const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;

    // Devolver la hora en formato hh:mm am/pm
    return `${horas}:${minutosFormateados} ${amPM}`;
}


function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    let message_content = {
        'sender': SENDER,
        'content': message,
        'hour': obtenerHoraActual()
    };
    console.log(message_content)
    //sendMessage()
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
