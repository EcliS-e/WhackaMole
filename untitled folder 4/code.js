
const  connection  = SimpleWebSerial.setupSerialConnection({ // Connection with a custom constructor object
    baudRate: 9600,
    logOutgoingSerialData: true,
    requestAccessOnPageLoad: true,
});


connection.on('right-button', function(data) {
    console.log('Received event "event-from-arduino" with parameter ' + data);
    if(data > 0){
           buttonCheck("rightbutton");
    }
});

connection.on('leftbutton', function(data) {
    console.log('Received event "event-from-arduino" with parameter ' + data);
    if(data > 0){
        buttonCheck("leftbutton");
    }
});
