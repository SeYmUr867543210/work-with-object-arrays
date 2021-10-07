// Напиши функцию, генерирующую объект со случайным именем, случайной фамилией и случайным возрастом. Имена и фамилии должны браться из массивов имён и фамилий соответственно. Возраст должен генерироваться случайным целым числом.

let arrOfNames = ["Misha", "Grisha", "Vanya", "Sam", "Anton"];
let arrOfSirnames = ["Mamedov", "Vasilkov", "Ninin", "Voronov", "Minin"];
let personsAmount = arrOfSirnames.length > arrOfSirnames.length ? arrOfSirnames.length : arrOfSirnames.length;
let arrOfAges = [];
for (let i = 0; i < personsAmount; i++) {
    arrOfAges.push(parseInt(Math.random() * 100));
}

let randomPersons = [];

function generateRandomPerson() {
    for (let i = 0; i < personsAmount; i++) {
        let randomIdx = parseInt(Math.random() * personsAmount);

        let randomNameFromArrOfNames = arrOfNames[randomIdx];
        let randomSirnameFromArrOfSirnames = arrOfSirnames[randomIdx];
        let randomAgeFromArrOfAges = arrOfAges[randomIdx];

        randomPersons.push({ name: randomNameFromArrOfNames, sirname: randomSirnameFromArrOfSirnames, age: randomAgeFromArrOfAges })
    }

}
generateRandomPerson();