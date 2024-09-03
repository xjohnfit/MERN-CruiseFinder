import { useState } from 'react';
import axios from 'axios';
import { AsyncPaginate } from 'react-select-async-paginate';

const Header = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);
    
    const loadOptions = async (inputValue) => {
        const options = {
            method: 'GET',
            url: `https://api.sinay.ai/ports-vessels/api/v1/vessels?vesselNameOrCode=${inputValue}`,
            headers: {
                accept: 'application/json',
                API_KEY: import.meta.env.VITE_SINAY_API_KEY,
            },
        };

        console.log(inputValue);
        axios
            .request(options)
            .then((response) => {
                return {
                    options: response.data.map((vessel) => ({
                        return: {
                            label: vessel.vesselName,
                        }
                    }))
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <header className="mx-5 my-5">
            <AsyncPaginate 
                className="text-lg rounded-lg w-[100%] outline-none shadow-xl font-black"
                placeholder="Search by ship name, IMO or MMSI"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </header>
    );
};

export default Header;
