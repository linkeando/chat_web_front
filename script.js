let URL_BACK_MESSAGE = 'https://mensajeandocongpt.vercel.app';
let SENDER = 'USER';

async function respuesta_mensaje(message) {
    try {
        const response = await fetch(URL_BACK_MESSAGE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetch operation:', error);
        throw error; // Re-lanza el error para que lo maneje el código que llama a esta función
    }
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

    if (message !== "") {
        obtenerRespuesta(message);
    }

    messageInput.value = "";
}

async function obtenerRespuesta(message) {
    let message_content = {
        'sender': SENDER,
        'content': message,
        'hour': obtenerHoraActual()
    };

    try {

        var chatBox = document.getElementById("chat-box");
        var userMessage = document.createElement("div");
        var botMessage = document.createElement("div");

        userMessage.className = "user-message";
        userMessage.textContent = message;
        chatBox.appendChild(userMessage);

        const answer = await respuesta_mensaje(message_content);

        botMessage.className = "bot-message";
        botMessage.textContent = answer.content;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error('Error during sendMessage:', error);
    }
}
