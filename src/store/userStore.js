import { useLocalObservable } from "mobx-react-lite";
import { createContext, useContext } from "react";

const UserStoreContext= createContext();

export const UserStoreProvider = ({children}) => {
    const store = useLocalObservable(() => ({
        users:[],
        addUser(user) {
            this.users.push(user);
        },
       
         deleteUser(index){
         this.users.splice(index,1)
        },
        get userList(){
            return this.users;
        },
    }));

    return (
        <UserStoreContext.Provider value={store}>{children}</UserStoreContext.Provider>
  );
};

export const useUserStore =() => {
    const store = useContext(UserStoreContext);
    if(!store) {
        throw new Error("useUserStore must be used within a User Store Provider");
    }
    return store;
};