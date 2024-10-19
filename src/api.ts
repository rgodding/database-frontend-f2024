// src/api.ts

// Definer en Person-type
type Person = {
    id: number;
    firstName: string;
    lastName: string;
    // Tilføj flere felter, hvis nødvendigt
};

// Hent alle personer
export async function fetchPersons(): Promise<Person[]> {
    const response = await fetch("http://localhost:8080/api/persons");
    if (!response.ok) {
        throw new Error("Failed to fetch persons");
    }
    return await response.json();
}

// Hent en person ud fra ID
export async function fetchPersonById(personId: string): Promise<Person> {
    const response = await fetch(`http://localhost:8080/api/persons/${personId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch person");
    }
    return await response.json();
}

// Opret en person
export async function createPerson(person: Person): Promise<Person> {
    const response = await fetch("http://localhost:8080/api/persons", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
    });
    if (!response.ok) {
        throw new Error("Failed to create person");
    }
    return await response.json();
}