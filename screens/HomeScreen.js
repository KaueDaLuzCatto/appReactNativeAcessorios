import React, { useState, useEffect } from 'react'; 

import { View, Text, Button, FlatList } from 'react-native'; 

import axios from 'axios'; 

 

function HomeScreen({ navigation }) { 

 const [products, setAcessorios] = useState([]); 

 

 useEffect(() => { 

  fetchAcessorios(); 

 }, []); 

 

 const fetchAcessorios = async () => { 

  try { 

   const response = await axios.get('https://web-j0174836j6xo.up-es-mad1-1.apps.run-on-seenode.com/acessorios'); 

   setAcessorios(response.data); 

  } catch (error) { 

   console.error("Erro ao buscar Acessorios:", error); 

  } 

 }; 

 

 return ( 

  <View> 

   <FlatList 

    data={acessorios} 

    keyExtractor={(item) => item.id.toString()} 

    renderItem={({ item }) => ( 

     <View> 

      <Text>{item.nome}</Text> 

      <Text>{item.descricao}</Text> 

      <Text>{item.preco}</Text> 

      <Button  

       title="Visualizar"  

       onPress={() => navigation.navigate('ViewAcessorio', { id: item.id })} 

      /> 

      <Button  

       title="Editar"  

       onPress={() => navigation.navigate('EditProduct', { id: item.id })} 

      /> 

      <Button  

       title="Remover"  

       onPress={async () => { 

        await axios.delete(`https://web-j0174836j6xo.up-es-mad1-1.apps.run-on-seenode.com/acessorios/${item.id}`); 

        fetchAcessorios(); 

       }} 

      /> 

     </View> 

    )} 

   /> 

   <Button  

    title="Adicionar Novo Acessorio" 

    onPress={() => navigation.navigate('AddAcessorio')} 

   /> 

  </View> 

 ); 

} 

 

export default HomeScreen; 