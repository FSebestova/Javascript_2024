var listek = 12
var pocet_predstaveni_mesic = 15 
var navstevniku = 175
var student_listek = listek * 0.65
var prijem_divadla_1 = (175 * 12) * 15
var prijem_divadla_2 = ((navstevniku * 0.60) * listek) + ((navstevniku * 0.40) * student_listek)


document.body.innerHTML += "<p>" + "Celkova částka: "  + prijem_divadla_1  + "</p>"

document.body.innerHTML += "<p>" + "Celkova částka se slevou: "  + prijem_divadla_2 + "</p>"




var kostka = Math.floor(Math.random() * 6) + 1

document.body.innerHTML += "<p>" + "hod kostkou: "  + kostka + "</p>"

