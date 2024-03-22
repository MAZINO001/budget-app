import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";

export default function DropdownMenu() {
  const [range, setRange] = useState("Month"); // Corrected variable name to follow camelCase convention

  return (
    <Menu>
      <MenuButton
        as="button"
        colorScheme="red"
        _hover={{ bg: "blue.400" }}
        _active={{ bg: "blue.500" }}
        _focus={{ outline: "none" }}
        bgColor="red.500"
        borderRadius="md"
      >
        {range}
      </MenuButton>
      <MenuList
        bgColor="red"
        borderColor="blue.400"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        py="2px"
      >
        <MenuItem
          _hover={{ bg: "blue.100", color: "blue.900" }}
          _focus={{ bg: "blue.200" }}
          bgColor="red"
          onClick={() => setRange("Day")}
        >
          Day
        </MenuItem>
        <MenuItem
          _hover={{ bg: "blue.100", color: "blue.900" }}
          _focus={{ bg: "blue.200" }}
          bgColor="red"
          onClick={() => setRange("Week")}
        >
          Week
        </MenuItem>
        <MenuItem
          _hover={{ bg: "blue.100", color: "blue.900" }}
          _focus={{ bg: "blue.200" }}
          bgColor="red"
          onClick={() => setRange("Month")}
        >
          Month
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
