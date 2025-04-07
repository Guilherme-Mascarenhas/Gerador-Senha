import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from '../../hooks/useStorage'
import { PassItem } from "./components/passItem";

export function Password(){

    const [listPass, setListPass] = useState([]);
    const focused = useIsFocused();
    const { getItem, deleteItem } = useStorage();

    useEffect(() =>{
        const getData = async () =>{
            let pass = await getItem('@pass');
            setListPass(pass);
            console.log(listPass);
        }
        getData();

    },[focused]);

    async function handleRemoveItem (item) {
        console.log(item);
        const pass = await deleteItem('@pass',item);
        setListPass(pass);
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={style.header}>
                <Text style={style.title}>Suas Senhas</Text>
            </View>
            <View style={style.content  }>
                <FlatList
                style={{flex:1, paddingTop:14}}
                    data={listPass}
                    keyExtractor={(item)=> String(item)}
                    renderItem={({item}) => <PassItem data={item} removeItem={()=> handleRemoveItem(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header:{
        backgroundColor: '#4135E5',
        padding: 14,
        paddingTop: 58,
    },  
    title:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    content:{
        flex: 1,
        marginLeft: 14,
        marginRight: 14,
    }
});