// Purpose: To generate a random person object with random values for each field.
// This function is used for testing purposes in the TestPage component.

import { format } from "date-fns";
import { Address, Person } from "../interfaces/domains.ts";
import { persons } from "../store/person-names.ts";
import { cities } from "../store/address-names.ts";

export function generateFindPerson(search: string): Person[] | null {
    // Find all persons that match the search string
    const matches: Person[] = persons
        .filter((person) => {
            if (
                person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                person.surname.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ) {
                return true;
            }
            return false;
            // Maps them into the Person interface
        })
        .map((person) => {
            return {
                firstname: person.name,
                surname: person.surname,
                cpr: generateCPR(),
                gender: person.gender,
            } as Person;
        });

    if (matches.length === 0) {
        return null;
    }

    return matches;
}

export function generateRandomPerson(): Person {
    const randomPerson = persons[Math.floor(Math.random() * persons.length)];

    const result: Person = {
        firstname: randomPerson.name,
        surname: randomPerson.surname,
        cpr: generateCPR(),
        gender: randomPerson.gender,
    };

    return result;
}

export function generateRandomAddress(): Address {
    const randomAddress = cities[Math.floor(Math.random() * cities.length)];

    const result: Address = {
        city: randomAddress.city,
        postal: randomAddress.name,
    };

    return result;
}

const generateCPR = (): string => {
    const birthDate = new Date(
        1950 + Math.random() * (new Date().getFullYear() - 1950),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
    );
    const formattedDate = format(birthDate, "ddMMyy");
    const randomNumbers = Math.floor(1000 + Math.random() * 9000).toString();
    return `${formattedDate}-${randomNumbers}`;
};
