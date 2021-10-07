// Напиши функцию, генерирующую объект со случайным именем, случайной фамилией и случайным возрастом. Имена и фамилии должны браться из массивов имён и фамилий соответственно. Возраст должен генерироваться случайным целым числом.

const arrOfNames = ["Misha", "Grisha", "Vanya", "Sam", "Anton"];
const arrOfSirnames = ["Mamedov", "Vasilkov", "Ninin", "Voronov", "Minin"];
const personsAmount = arrOfSirnames.length > arrOfSirnames.length ? arrOfSirnames.length : arrOfSirnames.length;

let randomPersons = [];

function generateRandomPerson() {
    for (let i = 0; i < personsAmount; i++) {
        const age = getRandomNum();
        const randomIdxForName =  Math.floor(Math.random() * personsAmount);
        const randomIdxForLastName = Math.floor(Math.random * personsAmount);

        const firstname = arrOfNames[randomIdxForName];
        const lastname = arrOfSirnames[randomIdxForLastName];

        randomPersons.push({ firstname, lastname, age })
    }

}
generateRandomPerson();

function getRandomNum() {
    return parseInt(Math.random() * 100);
}
