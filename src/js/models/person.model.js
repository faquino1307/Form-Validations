export class Person {
    name;
    lastName;
    email;
    personId;
    taxID;

    constructor(name, lastName, email, personId, taxID) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.personId = personId;
        this.taxID = taxID;
    }
}