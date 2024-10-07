import { Box, Button, Grid, GridItem, Input, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
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

    function findPerson() {
        const foundPerson = generateFindPerson(search);
        setPersonList(foundPerson);
    }

    function handleSearchInput(value: string) {
        console.log(value);
        setSearch(value);
    }

    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Box
                    w="100%"
                    h="40vh"
                    bg="gray.100"
                    padding={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between">
                    <Box>
                        <Text fontSize="xl" fontWeight="bold" marginY={4}>
                            Get Random Person
                        </Text>
                        <Grid templateColumns={"reapeat(1, 1fr)"} gap={2} w={"50%"}>
                            <BoxStyle1 label="Firstname" value={person?.firstname || ""} />
                            <BoxStyle1 label="Surname" value={person?.surname || ""} />
                            <BoxStyle1 label="CPR" value={person?.cpr || ""} />
                            <BoxStyle1 label="Gender" value={person?.gender || ""} />
                        </Grid>
                    </Box>
                    <Button mt={4} bg="gray.300" alignContent={"end"} onClick={generatePerson}>
                        Get Random Person
                    </Button>
                </Box>
                <Box
                    w="100%"
                    h="40vh"
                    bg="gray.100"
                    padding={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between">
                    <Box>
                        <Text fontSize="xl" fontWeight="bold" marginY={4}>
                            Get Random Address
                        </Text>
                        <Grid templateColumns={"reapeat(1, 1fr)"} gap={2} w={"25%"}>
                            <BoxStyle1 label="City" value={address?.city || ""} />
                            <BoxStyle1 label="Postal" value={address?.postal || ""} />
                        </Grid>
                    </Box>
                    <Button mt={4} bg="gray.300" onClick={generateAddress}>
                        Get Random Address
                    </Button>
                </Box>
                <Box h="75vh" overflowY={"scroll"} bg="gray.100" padding={4}>
                    <Text fontSize="xl" fontWeight="bold" marginY={4}>
                        Find Person
                    </Text>
                    <Input
                        type="text"
                        value={search}
                        onChange={(event) => handleSearchInput(event.target.value)}
                        placeholder="Search for person"
                    />
                    <Button mt={4} bg="gray.300" onClick={findPerson}>
                        Find Person
                    </Button>
                    <TableContainer>
                        <Table variant="simple">
                            <TableCaption>Found persons</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Firstname</Th>
                                    <Th>Surname</Th>
                                    <Th>Gender</Th>
                                    <Th>CPR</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {personList?.map((person) => (
                                    <Tr key={person.cpr}>
                                        <Td>{person.firstname}</Td>
                                        <Td>{person.surname}</Td>
                                        <Td>{person.gender}</Td>
                                        <Td>{person.cpr}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
        </>
    );
}

function BoxStyle1({ label, value }: { label: string; value: string }) {
    return (
        <GridItem display="flex" justifyContent={"space-between"} flexDirection="row">
            <Text fontWeight={"bold"}>{label}:</Text>
            <Text>{value}</Text>
        </GridItem>
    );
}
