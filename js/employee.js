class Employee extends User {
    #salary;
    #position;
    #department;


    constructor(name, age, male, email, country, salary, position, department) {
        super(name, age, male, email, country);
        this.#salary = salary;
        this.#position = position;
        this.#department = department;
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        this.#salary = value;
    }

    get position() {
        return this.#position;
    }

    set position(value) {
        this.#position = value;
    }

    get department() {
        return this.#department;
    }

    set department(value) {
        this.#department = value;
    }
}