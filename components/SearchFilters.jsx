import { useEffect, useState } from "react";
import {Flex, Box, Select, Text, Spinner, Icon, Button, filter} from "@chakra-ui/react";
import {useRouter} from 'next/router';
import {MdCancel} from 'react-icons/md';

import { filterData, getFilterValues } from "../utils/filterData";

const searchProperties = (filterValues) => {

}




const SearchFilters = () => {
    const [filters, setFilters] = useState({filterData});
    return (
        < Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) =>(
                <Box key={filter.queryName}>
                    <Select 
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2"
                    onChange={(e) => searchProperties({ [filter.queryName]:e.target.value })}>

                    </Select>

                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters;