const users = [
    new User('Pavel Pavlovich', 40, 'man', 'pavlovich@gmail.com', 'Russia'),
    new User('Rita Naumovna', 77, 'female', 'naumovna@exmaple.com.com', 'Ukraine'),
    new User('Fedr Fedorovich', 45, 'man', 'fedorovich@gmail.com', 'Ukraine'),
    new Employee('Ivan Ivanov', 22, 'man', 'ivanov@gmail.com', 'Ukraine', 1000, 'junior', 'developing'),
    new Employee('Petr Petrov', 24, 'man', 'petrov@exmaple.com', 'Russia', 1100, 'junior', 'developing'),
    new Employee('Stepan Stepanovich', 16, 'man', 'stepanovich@gmail.com', 'Ukraine', 1200, 'junior', 'developing'),
    new Employee('Oleg Olegovich', 17, 'man', 'olegovich@exmaple.com', 'Russia', 1100, 'junior', 'developing'),
    new Employee('Danil', 30, 'man', 'danilovich@gmail.com', 'Ukraine', 1000, 'junior', 'developing'),
    new Employee('Olga Andreeva', 15, 'female', 'andreeva@gmail.com', 'Ukraine', 500, 'junior', 'design'),
    new Employee('Svetlana Sergeeva', 19, 'female', 'sergeeva@exmaple.com', 'Ukraine', 700, 'junior', 'design')
];

//Получить массив только с пользователями (экземпляры класса User, не Employee);
const onlyUsers = [];
for (const user of users) {
    if (user.__proto__ === User.prototype) {
        onlyUsers.push(user);
    }
}
console.log(onlyUsers);
console.log(users.filter((item) => item.__proto__ === User.prototype));

//Получить средний возраст;
let averageAge = 0;
for (const user of users) {
    averageAge += user.age;
}
averageAge /= users.length;
console.log(averageAge);
//TODO console.log(users.reduce());

//Получить средний возраст среди несовершеннолетних;
let averageAgeMinors = 0;
let countMinor = 0;
for (const user of users) {
    if (user.age < 18) {
        averageAgeMinors += user.age;
        countMinor++;
    }
}
averageAgeMinors /= countMinor;
console.log(averageAgeMinors);
//TODO console.log(users.reduce());

//Получить средний оклад на отдел;
//TODO

//Получить пользователей у которых почта "gmail.com". +: test@gmail.com, -: test@example.com;
const usersGmail = [];
for (const user of users) {
    if (user.email.includes('gmail.com')) {
        usersGmail.push(user);
    }
}
console.log(usersGmail);
console.log(users.filter((item) => item.email.includes('gmail.com')));