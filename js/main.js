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
//v1.0
const onlyUsers = [];
for (const user of users) {
    if (user.__proto__ === User.prototype) {
        onlyUsers.push(user);
    }
}
console.log(onlyUsers);
//v2.0
console.log(users.filter((item) => item.__proto__ === User.prototype));

//Получить средний возраст;
//v1.0
let averageAge = 0;
for (const user of users) {
    averageAge += user.age;
}
averageAge /= users.length;
console.log(averageAge);
//v2.0
console.log(users.map((item) => item.age).reduce((prev, curr) => prev + curr) / users.length);

//Получить средний возраст среди несовершеннолетних;
//v1.0
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
//v2.0
const ages = users.filter((user) => user.age < 18).map((user) => user.age);
const avgAge = ages.reduce((prev, curr) => prev + curr) / ages.length
console.log(avgAge)

//Получить средний оклад на отдел;
//v1.0
const employees = users.filter(user => user instanceof Employee);//находим сотрудников
const quantityEmployeesDepartments = {};//количество сотрудников в каждом отделе
for (const employee of employees) {//считаем сколько в каждом отделе сотрудников
    if (employee.department in quantityEmployeesDepartments) {
        quantityEmployeesDepartments[employee.department] += 1;
    } else {
        quantityEmployeesDepartments[employee.department] = 1;
    }
}
const sumSalaryDepartments = {};//общая сумма по отделам
for (const employee of employees) {//считаем сумму окладов в каждом отделе
    if (employee.department in sumSalaryDepartments) {
        sumSalaryDepartments[employee.department] += employee.salary;
    } else {
        sumSalaryDepartments[employee.department] = employee.salary;
    }
}
const avgSalaryDepartments = {};//средний оклад по отделам
for (const department in sumSalaryDepartments) {
    avgSalaryDepartments[department] = sumSalaryDepartments[department] / quantityEmployeesDepartments[department];
}
console.log(avgSalaryDepartments);
//v2.0
const salariesDepartments = {};//зарплаты по отделам
const employees2 = users.filter(user => user instanceof Employee);
employees2.forEach((employee) => salariesDepartments[employee.department] = []);
employees2.forEach((employee) => salariesDepartments[employee.department].push(employee.salary));
const avgSalary = {};//средний оклад по отделам
for (const key in salariesDepartments) {
    avgSalary[key] = salariesDepartments[key].reduce((prev, curr) => prev + curr) / salariesDepartments[key].length;
}
console.log(avgSalary);

//Получить пользователей у которых почта "gmail.com". +: test@gmail.com, -: test@example.com;
//v1.0
const usersGmail = [];
for (const user of users) {
    if (user.email.includes('gmail.com')) {
        usersGmail.push(user);
    }
}
console.log(usersGmail);
//v2.0
console.log(users.filter((item) => item.email.includes('gmail.com')));

//Получить электронные почты все совершеннолетних женщин, не старше 30 лет, проживающих в Украине, которые являются сотрудниками.
//v1.0
const emails = [];
for (const user of users) {
    if (user.male === 'female' &&
        user.age <= 30 &&
        user.age >= 18 &&
        user.country === 'Ukraine' &&
        user instanceof Employee) {
        emails.push(user.email)
    }
}
console.log(emails);
//v2.0
console.log(users
    .filter((user) => user.male === 'female')
    .filter((user) => user.age >= 18 && user.age <= 30)
    .filter((user) => user instanceof Employee)
    .filter((user) => user.country === 'Ukraine')
    .map((user) => user.email)
);
