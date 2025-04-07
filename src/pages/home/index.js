import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { ModalPas } from '../../components/modal';

export function Home() {

  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const [size, setSize] = useState(6);
  const [passValue, setPassValue] = useState('');
  const [visiModal, setVisiModal] = useState(false);

  function generatePass (){

    let pass = '';

    for(let i = 0, n = alpha.length; i < size; i++){
      pass += alpha.charAt(Math.floor(Math.random()*n));
    }

    setPassValue(pass);
    setVisiModal(true);

  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Carateres</Text>
      <View style={styles.sliderArea}>
        <Slider
          style={{ height:50}}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor='#E9CE3E'
          maximumTrackTintColor='#FFF'
          thumbTintColor='#4135E5'
          value={size}
          onValueChange={(value)=>{setSize(value.toFixed(0))}}
        />
      </View>

      <TouchableOpacity style={styles.buttonOpaci} onPress={generatePass}>
        <Text style={styles.bottonText}>
          Gerar senha
        </Text>
      </TouchableOpacity>

      <Modal visible={visiModal} animationType='fade' transparent={true}>
        <ModalPas pass={passValue} handleClose={()=>setVisiModal(false)}/>
      </Modal>

    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 50
  },
  sliderArea:{
    marginTop: 40,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8
  },
  buttonOpaci: {
    backgroundColor: '#4135E5',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 15
  },
  bottonText: {
    color: '#FFF',
    fontSize: 20,
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});
