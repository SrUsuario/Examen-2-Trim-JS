// Está función obtiene el tiempo actual
function tiempo() {
    postMessage(new Date());
    setTimeout(tiempo, 1000);
}

tiempo();