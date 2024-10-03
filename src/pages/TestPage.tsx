import { useState } from "react";
import { Address, Person } from "../interfaces/domains";
import { generateFindPerson, generateRandomAddress, generateRandomPerson } from "../services/fake-person-generator";
import "../test-style.css";

export default function TestPage() {
    const [person, setPerson] = useState<Person | null>(null);
    const [address, setAddress] = useState<Address | null>(null);
    const [search, setSearch] = useState<string>("");
    const [personList, setPersonList] = useState<Person[] | null>(null);

    function generatePerson() {
        const randomPerson = generateRandomPerson();
        setPerson(randomPerson);
    }

    function generateAddress() {
        const randomAddress = generateRandomAddress();
        setAddress(randomAddress);
    }

    const findPerson = () => {
        const foundPerson = generateFindPerson(search);
        setPersonList(foundPerson);
    };

    return (
        <div>
            <h1>TestPage</h1>
            <div>
                <h2>1. Get Random Person</h2>
                <div>
                    <div>
                        <h4>Random Person</h4>
                        {person === null ? (
                            <p>No person</p>
                        ) : (
                            <div>
                                <p>Firstname: {person.firstname}</p>
                                <p>Surname: {person.surname}</p>
                                <p>CPR: {person.cpr}</p>
                                <p>Gender: {person.gender}</p>
                            </div>
                        )}
                    </div>
                    <button onClick={generatePerson}>Get Random Person</button>
                </div>
                <div>
                    <div>
                        <h4>Random Address</h4>
                        {address === null ? (
                            <p>No Address</p>
                        ) : (
                            <div>
                                <p>City: {address.city}</p>
                                <p>Postal: {address.postal}</p>
                            </div>
                        )}
                    </div>
                    <button onClick={generateAddress}>Get Random Person</button>
                </div>
                <div>
                    <div>Find Person</div>
                    <div>
                        <div>
                            <input
                                type="text"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search for person"
                            />
                            <button onClick={findPerson}>Find Person</button>
                        </div>
                        <p>Person:</p>
                        {personList === null ? (
                            <p>No person</p>
                        ) : (
                            <div>
                                <p>Matches</p>
                                <div className="find-person-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Firstname</th>
                                                <th>Surname</th>
                                                <th>CPR</th>
                                                <th>Gender</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {personList.map((personFromList) => (
                                                <tr key={personFromList.cpr}>
                                                    <td>{personFromList.firstname}</td>
                                                    <td>{personFromList.surname}</td>
                                                    <td>{personFromList.cpr}</td>
                                                    <td>{personFromList.gender}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
