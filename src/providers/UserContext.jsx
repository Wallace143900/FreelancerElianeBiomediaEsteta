import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <UserContext.Provider value={{ toggleMenu, isMenuOpen }}>
            {children}
        </UserContext.Provider>
    );
};
