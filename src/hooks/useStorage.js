import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () =>{

    const getItem = async (key) =>{
        try {
            const pass = await AsyncStorage.getItem(key);
            return JSON.parse(pass) || [];
            
        } catch (error) {
            console.log(`Erro ao buscar item: ${error}`);
            return([]);
        }
    }

    const saveItem = async (key, value) =>{
        try {
            let password = await getItem(key);

            password.push(value);
            await AsyncStorage.setItem(key,JSON.stringify(password));
            
        } catch (error) {
            console.log(`Erro ao salvar item: ${error}`);
            return([]);
        }
    }

    const deleteItem = async (key, item) =>{
        try {

            let password = await AsyncStorage.getItem(key);
            console.log(password);
            let mypass = JSON.parse(password).filter((value) =>{
                return (value !== item)
            });

            await AsyncStorage.setItem(key,JSON.stringify(mypass));
            return mypass;

        } catch (error) {
            console.log(`Erro ao deletar item: ${error}`);
            return([]);
        }

    }
    return{
        getItem,
        saveItem,
        deleteItem
    }
}

export default useStorage;