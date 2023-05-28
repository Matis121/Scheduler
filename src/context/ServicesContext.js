import { createContext, useEffect, useState } from "react";

const ServicesContext = createContext();

const serviceFromLocalStorage = JSON.parse(localStorage.getItem("service") || "[]")

export function ServicesProvider({children}){

    const [services, setServices] = useState(serviceFromLocalStorage);
    const [idServices, setidServices] = useState(0);
    const [name, setName] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [serviceTime, setServiceTime] = useState("");
    const [showAddSericeBox, setshowAddSericeBox] = useState(false);

    const handleAddNewService = () => {
        setidServices(services.length + 1);
        setServices([...services, {id: idServices, serviceName: name, servicePrice: servicePrice, serviceTime: serviceTime}]);
        setName("");
        setServicePrice("");
        setServiceTime("");
        setshowAddSericeBox(false);
    }

    const handleDeleteService = (id) => {
        setServices(services.filter((service) => service.id !== id))
    }

    useEffect(() => {
        localStorage.setItem("service", JSON.stringify(services));
    }, [services])


    return(
        <ServicesContext.Provider value={{ services, setServices, idServices, setidServices, handleAddNewService, handleDeleteService, name, setName, servicePrice, setServicePrice, serviceTime, setServiceTime, setshowAddSericeBox, showAddSericeBox}}>
            {children}
        </ServicesContext.Provider>
    )
}


export default ServicesContext;