let watts = 1750;

let horas = 8;

let dias = 25;

let valorWatts = 0.75;

let calculo1 = valorWatts / 1000; //O valor por Kw é 0.75, ou seja, converte quilowatt por 1000

let valorWattsHora = 1.75;

let calculo2 = valorWattsHora * horas;

let calculo3 = calculo2 * dias;

let resultado = valorWatts * calculo3;

console.log("O valor em R$ que a máquina consome é", resultado);