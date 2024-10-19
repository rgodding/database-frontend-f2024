// src/api.ts

// Definer typer for PartialPersonData og FullPersonDTO (hvis du kender deres strukturer)
type PartialPersonData = {
    firstName: string;
    lastName: string;
    // Tilføj flere felter efter behov
};

type FullPersonDTO = {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    // Tilføj flere felter efter behov
};

type CprResponse = {
    cpr: string;
};

// Hent CPR-nummer
export async function fetchCpr(): Promise<CprResponse> {
    const response = await fetch(`http://localhost:8080/api/persons/cpr`);
    if (!response.ok) {
        throw new Error("Failed to fetch CPR");
    }
    return await response.json();
}

// Hent person data baseret på DTO-type
export async function fetchPartialPersonData(dtoType: string): Promise<PartialPersonData> {
    const response = await fetch(`http://localhost:8080/api/persons/${dtoType}`);
    if (response.status === 404) {
        throw new Error("Person not found"); // Håndter 404 specifikt
    } else if (!response.ok) {
        throw new Error("Failed to fetch partial person data");
    }
    return await response.json();
}

// Hent en liste af personer i bulk
export async function fetchBulkPersons(count: number = 10): Promise<FullPersonDTO[]> {
    const response = await fetch(`http://localhost:8080/api/persons/bulk?count=${count}`);
    if (!response.ok) {
        throw new Error("Failed to fetch bulk persons");
    }
    return await response.json();
}