const int piezo1 = A0;
int piezo1Val;
const int piezo2 = A1;
int piezo2Val;
const int switchPin = 2;
int switchVal;
#include <SimpleWebSerial.h>

// WebSerial can be any variable name you want.
SimpleWebSerial WebSerial;

void setup() {
  
  // put your setup code here, to run once:
  Serial.begin(9600);
  WebSerial.send("event-from-arduino", switchVal);
  WebSerial.on("event-to-arduino", eventCallback);
   
}

void loop() {
  // put your main code here, to run repeatedly:
  //piezo1Val = analogRead(piezo1);
  //piezo2Val = analogRead(piezo2);
  switchVal = digitalRead(switchPin);
  Serial.println(switchVal);
  /*
  Serial.print("piexo 1: ");
  Serial.println(piezo1Val);
  Serial.print("piexo 2: ");
  Serial.println(piezo2Val);
*/
 WebSerial.send("event-from-arduino", switchVal);

  WebSerial.check();
  delay(100);
 
}

void eventCallback(JSONVar data){
 
  WebSerial.send("event-from-arduino", switchVal);

}