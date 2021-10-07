// Напиши функцию, генерирующую объект со случайным именем, случайной фамилией и случайным возрастом. Имена и фамилии должны браться из массивов имён и фамилий соответственно. Возраст должен генерироваться случайным целым числом.

const firstNames = ["Misha", "Grisha", "Vanya", "Sam", "Anton"];
const lastNames = ["Mamedov", "Vasilkov", "Ninin", "Voronov", "Minin"];

let generatedPerson = generateRandomPerson();

function generateRandomPerson() {
        const age = getRandomNum(100);
        const firstname = firstNames[getRandomNum(firstNames.length)];
        const lastname = lastNames[getRandomNum(lastNames.length)];

        return { firstname, lastname, age }
}

function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}
