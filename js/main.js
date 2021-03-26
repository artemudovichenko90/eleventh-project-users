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