const int piezo1 = A0;
const int piezo2 = A1;
int piezo1Val;
int piezo2Val;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  piezo1Val = analogRead(piezo1);
  piezo2Val = analogRead(piezo2);
//   Serial.print("Piezo 1: ");
//   Serial.println(piezo1Val);
//   Serial.print("Piezo 2: ");
//   Serial.println(piezo2Val);
Serial.write(piezo1);

  delay(10);
}
