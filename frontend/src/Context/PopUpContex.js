import React, { Children, createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SidebarContext = createContext();

export const PopUpProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/shop?search=${search}`);
            setSearchValue(search);
            setSearch('');
        }
    };

    const value = useMemo(
        () => ({
            search,
            setSearch,
            submitHandler,
            searchValue,
            setSearchValue
        }),

        [search, searchValue]
    );

    return (
        <SidebarContext.Provider value={value}>{ children }</SidebarContext.Provider>
    )
}