// Напиши функцию, генерирующую объект со случайным именем, случайной фамилией и случайным возрастом. Имена и фамилии должны браться из массивов имён и фамилий соответственно. Возраст должен генерироваться случайным целым числом.

const firstNames = ["Misha", "Grisha", "Vanya", "Sam", "Anton"];
const lastNames = ["Mamedov", "Vasilkov", "Ninin", "Voronov", "Minin"];


function generateRandomPerson() {
        const age = getRandomNum(100);
        const firstname = arrOfNames[getRandomNum(arrOfNames.length)];
        const lastname = arrOfSirnames[getRandomNum(arrOfSirnames.length)];

        return { firstname, lastname, age }
}
let generatedPerson = generateRandomPerson();

function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}
