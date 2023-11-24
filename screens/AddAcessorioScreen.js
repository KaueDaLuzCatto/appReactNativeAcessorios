import React, { useState } from 'react'; 

import { View, TextInput, Button } from 'react-native'; 

import axios from 'axios'; 

 

function AddAcessorioScreen({ navigation }) { 

 const [nome, setNome] = useState(''); 

 const [descricao, setDescricao] = useState(''); 

 const [foto, setFoto] = useState(''); 

 const [preco, setPreco] = useState(''); 

 

 const addAcessorio = async () => { 

  try { 

   await axios.post('https://web-j0174836j6xo.up-es-mad1-1.apps.run-on-seenode.com/acessorios', { nome, descricao, foto, preco }); 

   navigation.goBack(); 

  } catch (error) { 

   console.error("Erro ao adicionar acessório:", error); 

  } 

 }; 

 

 return ( 

  <View> 

   <TextInput placeholder="Nome" value={nome} onChangeText={setNome} /> 

   <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} /> 

   <TextInput placeholder="Foto (URL)" value={foto} onChangeText={setFoto} /> 

   <TextInput placeholder="Preço" value={preco} onChangeText={setPreco} /> 

   <Button title="Adicionar" onPress={addAcessorio} /> 

  </View> 

 ); 

} 

 

export default AddAcessorioScreen; 