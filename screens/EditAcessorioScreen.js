import React, { useState, useEffect } from 'react'; 

import { View, TextInput, Button } from 'react-native'; 

import axios from 'axios'; 

 

function EditAcessorioScreen({ route, navigation }) { 

 const { id } = route.params; 

 const [nome, setNome] = useState(''); 

 const [descricao, setDescricao] = useState(''); 

 const [foto, setFoto] = useState(''); 

 const [preco, setPreco] = useState(''); 


 

 useEffect(() => { 

  fetchAcessorio(); 

 }, []); 

 

 const fetchAcessorio = async () => { 

  try { 

   const response = await axios.get(`https://web-j0174836j6xo.up-es-mad1-1.apps.run-on-seenode.com/acessorios/${id}`); 

   const acessorio = response.data; 

   setNome(acessorio.nome); 

   setDescricao(acessorio.descricao); 

   setFoto(acessorio.foto); 

   setPreco(acessorio.preco); 


  } catch (error) { 

   console.error("Erro ao buscar acessório:", error); 

  } 

 }; 

 

 const editAcessorio = async () => { 

  try { 

   await axios.put(`https://web-j0174836j6xo.up-es-mad1-1.apps.run-on-seenode.com/acessorios/${id}`, { nome, descricao, foto, preco}); 

   navigation.goBack(); 

  } catch (error) { 

   console.error("Erro ao editar acessório:", error); 

  } 

 }; 

 

 return ( 

  <View> 

   <TextInput placeholder="Nome" value={nome} onChangeText={setNome} /> 

   <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} /> 

   <TextInput placeholder="Foto (URL)" value={foto} onChangeText={setFoto} /> 

   <TextInput placeholder="Preço" value={preco} onChangeText={setPreco} /> 

   <Button title="Editar" onPress={editAcessorio} /> 

  </View> 

 ); 

} 

 

export default EditAcessorioScreen; 