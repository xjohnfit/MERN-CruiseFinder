import { useState } from 'react';

const Header = () => {
    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <header className="flex items-center w-[70vw]">
            <label
                htmlFor="search"
                className="text-2xl text-gray-700 font-thin p-4 m-5"
            >
                Cruise Finder
            </label>
            <input
                type="text"
                id="search"
                placeholder="Start typing..."
                className="border border-blue-700 text-lg p-4 rounded-lg w-[80%]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </header>
    );
};

export default Header;
