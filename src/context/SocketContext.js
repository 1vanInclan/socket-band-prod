import React, {createContext} from 'react'
import { useSocket } from '../hooks/useSocket';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('https://socket-bandas-server.herokuapp.com/'); 

    return (
        // Se definen los objetos a compartir del hook
        <SocketContext.Provider value={{ socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}