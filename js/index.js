//2) Faça um programa em JS para exibir a tabuada de 0 a 9.

var tabuada = 0;
var br = document.createElement("br");

  document.body.append("TABUADA");
  document.write("<br>");

for(i = 0; i < 11; i++) {
  document.write("<br>");

  for(num = 0; num < 11; num++) {
      tabuada = i * num;
        document.write("<br>");
        document.write(i + "x" + num + "=" + tabuada );
      }
}
