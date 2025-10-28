let isAgeInput = prompt("Введите год рождения");

if (isAgeInput === null) {
    alert("Вы нажали отмена");
} 
else if (isNaN(isAgeInput) || isAgeInput.trim() === "") {
    alert("Введите цифрами");
} 
else {
    let isAge = Number(isAgeInput);
    let age = 2025 - isAge;
    
    let isCity = prompt("Введите город в котором живете");

    if (isCity === null) {
        alert("Вы нажали отмена");
    } 
    else {
        let isSport = prompt("Введите любимый вид спорта");

        if (isSport === null) {
            alert("Вы нажали отмена");
        } 
        else {
            let cityMessage;
            switch (isCity.toLowerCase()) {
                case "киев":
                    cityMessage = "Ты живешь в столице Украины";
                    break;
                case "лондон":
                    cityMessage = "Ты живешь в столице Великобритании";
                    break;
                case "вашингтон":
                    cityMessage = "Ты живешь в столице США";
                    break;
                default:
                    cityMessage = `Ты живешь в городе ${isCity}`;
            }

            let sportMessage;
            switch (isSport.toLowerCase()) {
                case "футбол":
                    sportMessage = "Круто! Хочешь стать футболистом?";
                    break;
                case "хокей":
                    sportMessage = "Круто! Хочешь стать хоккеистом?";
                    break;
                case "баскетбол":
                    sportMessage = "Круто! Хочешь стать баскетболистом?";
                    break;
                default:
                    sportMessage = `${isSport} — хороший вид спорта`;
            }

            alert(`Вам ${age} лет!\n${cityMessage}\n${sportMessage}`);
        }
    }
}
