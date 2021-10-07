// Напиши функцию, генерирующую объект со случайным именем, случайной фамилией и случайным возрастом. Имена и фамилии должны браться из массивов имён и фамилий соответственно. Возраст должен генерироваться случайным целым числом.

const arrOfNames = ["Misha", "Grisha", "Vanya", "Sam", "Anton"];
const arrOfSirnames = ["Mamedov", "Vasilkov", "Ninin", "Voronov", "Minin"];

let randomPersons = [];

function generateRandomPerson() {
        const age = getRandomNum(100);
        const firstname = arrOfNames[getRandomNum(arrOfNames.length)];
        const lastname = arrOfSirnames[getRandomNum(arrOfSirnames.length)];

        randomPersons.push({ firstname, lastname, age })
}
generateRandomPerson();

function getRandomNum(num) {
    return parseInt(Math.random() * num);
}
