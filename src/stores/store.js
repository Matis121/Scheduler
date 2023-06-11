import { create } from "zustand";
import { devtools } from "zustand/middleware"

let useServiceStore = (set) => ({
    services: [],
    addService: (service) =>
        set((state) => ({services: [...state.services, service]})),
});


let useClientStore = (set) => ({
    clients: [],
    addClient: (client) =>
        set((state) => ({clients: [...state.clients, client]})),
});