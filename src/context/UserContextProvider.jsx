import React, { useState } from "react";
import { UserContext } from "./UserContext";


export default function UserContextProvider({ children }) {
    const [userToken, setUserToken] = useState(null);
    return (
        <UserContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserContext.Provider>
    );
}
