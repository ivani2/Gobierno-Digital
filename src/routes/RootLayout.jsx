import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export const ModalContext = createContext();

function RootLayout() {
    const [isModalOpen, setIsModalOpen] = useState( false );
    return (
        <>
        <ModalContext.Provider value={ isModalOpen } >
            <MainHeader />
            <Outlet />
            <MainFooter />
        </ModalContext.Provider>
        </>
     );
}

export default RootLayout;
