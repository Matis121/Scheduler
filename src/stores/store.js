import { useEffect } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"

// SERVICE STORE

// const ServiceStore = persist((set) => ({
//     services: [],
//     addService: (service) =>
//         set((state) => ({services: [...state.services, service]})),
//     removeService: (id) => 
//         set((state) => ({ services: state.services.filter((service) => service.id !== id) })),
        
// }));

// export const useServiceStore = create(
//     devtools(ServiceStore)
// );

const ServiceStore = persist(
    devtools((set) => ({
      services: [],
      addService: (service) =>
        set((state) => ({ services: [...state.services, service] })),
      removeService: (id) =>
        set((state) => ({
          services: state.services.filter((service) => service.id !== id),
        })),
    })),
    {
      name: "serviceStore", // Specify a unique name for the store
      getStorage: () => localStorage, // Use localStorage as the storage provider
    }
  );
  
  export const useServiceStore = create(ServiceStore);



// CLIENT STORE

// const ClientStore = (set) => ({
//     clients: [],
//     addClient: (client) =>
//         set((state) => ({clients: [...state.clients, client]})),
//     removeClient: (id) => 
//         set((state) => ({ clients: state.clients.filter((client) => client.id !== id) })),
// });


// export const useClientStore = create(
//     devtools(ClientStore)
// );

const ClientStore = persist(
    devtools((set) => ({
      clients: [],
      addClient: (client) =>
        set((state) => ({ clients: [...state.clients, client] })),
      removeClient: (id) =>
        set((state) => ({
          clients: state.clients.filter((client) => client.id !== id),
        })),
    })),
    {
      name: "clientStore", // Specify a unique name for the store
      getStorage: () => localStorage, // Use localStorage as the storage provider
    }
  );
  
  export const useClientStore = create(ClientStore);

