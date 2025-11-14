const connection = SimpleWebSerial.setupSerialConnection({
    requestAccessOnPageLoad: true
});

connection.on('event-from-arduino', function(data) {
    console.log('Received event "event-from-arduino" with parameter ' + data)
});

connection.send('event-with-string', "Hello there, Arduino");

connection.send('event-with-number', 123);

connection.send('event-with-array', [42, "Nice string"]);

connection.send('event-with-object', { r: 255, g: 255, b: 255 });

const conn  = SimpleWebSerial.setupSerialConnection(); // Default, out-of-the-box behavior
const conn2 = SimpleWebSerial.setupSerialConnection(9600); // Connect with a lower connection speed
const conn3 = SimpleWebSerial.setupSerialConnection({ // Connection with a custom constructor object
    baudRate: 9600,
    requestAccessOnPageLoad: true,
});

