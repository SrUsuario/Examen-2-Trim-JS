var xml = new XMLHttpRequest();

// Está función carga el JSON y se lo pasa al hilo principal
function cargarJson() {
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            postMessage(JSON.parse(this.responseText));
        }
    }
    xml.open("GET", "provincias.json", true);
    xml.send();
    setInterval(cargarJson, 2000);
}

cargarJson();