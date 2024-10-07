import { Box, Button, HStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <HStack paddingX={3} borderBottom={"1px"}>
                <Box margin={2}>
                    <Link to="/">
                      <Button size={"sm"} marginX={2}>Home</Button>
                    </Link>
                    <Link to="/test">
                      <Button size={"sm"} marginX={2}>Test</Button>
                    </Link>
                </Box>
            </HStack>
            <Box padding={4}>
              <Outlet />
            </Box>
        </div>
    );
}
