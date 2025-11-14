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