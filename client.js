//1) Напиши функцию, генерирующую объект со случайным именем, случайной фамилией и случайным возрастом. Имена и фамилии должны браться из массивов имён и фамилий соответственно. Возраст должен генерироваться случайным целым числом.
//2)Вывести список из десяти сгенерированных людей на страницу. Функцию для генерации человека подключать как модуль. Продолжать разработку в ветке dev. Не забыть перед этим локально выполнить синхронизацию с удалённым репозиторием - в нём было выполнено слияние, о котором твой локальный не знает.
import * as MyFn from './generatePersonFunc.js'


let generatedPersons = MyFn.generateRandomPerson();
console.log(generatedPersons)



 