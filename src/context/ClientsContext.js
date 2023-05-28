import { createContext, useEffect, useState } from "react";

const ClientsContext = createContext();

const productFromLocalStorage = JSON.parse(localStorage.getItem("clients") || "[]")

export function ClientsProvider({children}){

    const [clients, setClients] = useState(productFromLocalStorage)
    const [idClient, setIdClient] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [surName, setSurName] = useState("");
    const [phone, setPhone] = useState("");
    const [showAddClientBox, setShowAddClientBox] = useState(false);
  
    const handleAddNewClient = () => {
      setIdClient(clients.length + 1);
      setClients([...clients, {id: idClient, firstName: firstName, surName: surName, phoneNumber: phone}]);
      setFirstName("");
      setSurName("");
      setPhone("");
      setShowAddClientBox(false);
    }
  
    const handleDeleteClient = (id) => {
      setClients(clients.filter((client) => client.id !== id))
    }

    useEffect(() => {
        localStorage.setItem("clients", JSON.stringify(clients));
    }, [clients])


    return(
        <ClientsContext.Provider value={{ clients, setClients, idClient, setIdClient, firstName, setFirstName, surName, setSurName, phone, setPhone, showAddClientBox, setShowAddClientBox, handleAddNewClient, handleDeleteClient }}>
            {children}
        </ClientsContext.Provider>
    )
}


export default ClientsContext;