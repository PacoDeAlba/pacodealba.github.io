const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Conectado al servidor WebSocket.');
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Datos recibidos:', data);
    if (data.type === 'update') {
        updateOrderList(data.orders);
    }
};

function sendUpdate(type, payload) {
    const message = JSON.stringify({ type, ...payload });
    ws.send(message);
}

function addOrder(folio, nombre) {
    sendUpdate('newOrder', { folio, nombre });
}

function updateOrderList(orders) {
    // Aquí actualiza la lista de órdenes en la interfaz del cliente
}