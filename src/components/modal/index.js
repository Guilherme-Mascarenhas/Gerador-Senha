import * as Clipboard from "expo-clipboard";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import useStorage from "../../hooks/useStorage";


export function ModalPas({pass, handleClose }){

    const { saveItem } = useStorage();

    async function handleSaveCopy(){
        await saveItem('@pass', pass);
        handleClose();
    }

    async function handleSaveCopy2(){
        await Clipboard.setStringAsync(pass);
        await saveItem('@pass', pass);
        handleClose();
    }
    return(
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}>modal</Text>

                <Pressable style={style.pressBox} onLongPress={handleSaveCopy2}>
                    <Text style={style.pressText}>{pass}</Text>
                </Pressable>

                <View style={style.buttonArea}>
                    <TouchableOpacity style={style.button} onPress={handleClose}>
                        <Text style={style.voltarBotton}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.button, style.buttonSave]} onPress={handleSaveCopy}>
                        <Text style={style.saveBotton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24,24,24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: '#FFF',
        width: '85%',
        borderRadius: 8,
        paddingBottom: 24,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    pressBox:{
        backgroundColor: '#0e0e0e',
        width: '90%',
        padding: 14,
        borderRadius: 8
    },
    pressText:{
        color: '#FFF',
        textAlign: 'center'
    },
    buttonArea:{
        flexDirection:'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        flex:1,
        alignItems: 'center',
        marginBottom: 14,
        marginTop: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor: '#4135E5',
        borderRadius: 8
    },
    saveBotton:{
        color: '#FFF',
        fontWeight: 'bold'
    }
});