import { Button } from "@chakra-ui/react";

const Navbar = ({ onOpen }) => {
    return (
        <nav className="w-full flex justify-between items-center p-6 ">
            <h1 className="text-3xl font-bold">Freedom Wall</h1>
            <Button colorScheme="teal" onClick={onOpen}>
                Add
            </Button>
        </nav>
    );
};

export default Navbar;
