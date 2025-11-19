
const  connection  = SimpleWebSerial.setupSerialConnection({ // Connection with a custom constructor object
    baudRate: 9600,
    logOutgoingSerialData: true,
    requestAccessOnPageLoad: true,
});


connection.on('event-from-arduino', function(data) {
    // console.log('Received event "event-from-arduino" with parameter ' + data);
   // if(data > 0){
           buttonCheck(data);
   // }
});

// connection.on('event-from-arduino', function(data) {
//   //  console.log('Received event "event-from-arduino" with parameter ' + data);
//     if(data > 0){
//         buttonCheck(data);
//     }
// });
