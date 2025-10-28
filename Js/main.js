let isAge=Number(prompt("Введите год рождения"))
if(isNaN(isAge)){
    alert("Введите цифрами")
}
else {
    let age=2025-isAge
let isCity=prompt("В каком городе вы живете").toLowerCase()
let isSport=prompt("Какой ваш любимый вид спорта")
if(isCity==="киев" || isCity==="вашингтон" || isCity==="лондон"){
    alert(`Вам ${age} лет!\nТы живешь в столице ${isCity}\nВы любите ${isSport}`)
}
else{

    alert(`Вам ${age} лет\nВы живете в городе ${isCity}\nВы любите ${isSport}`)
}
}