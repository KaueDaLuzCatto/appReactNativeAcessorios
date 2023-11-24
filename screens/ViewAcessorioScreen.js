import React, { useState, useEffect } from 'react'; 

import { View, Text, Image } from 'react-native'; 

import axios from 'axios'; 

 

function ViewAcessorioScreen({ route }) { 

 const { id } = route.params; 

 const [acessorio, setAcessorio] = useState(null); 

 

 useEffect(() => { 

  fetchAcessorio(); 

 }, []); 

 

 const fetchAcessorio = async () => { 

  try { 

   const response = await axios.get(`https://web-j0174836j6xo.up-es-mad1-1.apps.run-on-seenode.com/acessorios/${id}`); 

   setAcessorio(response.data); 

  } catch (error) { 

   console.error("Erro ao buscar acessório:", error); 

  } 

 }; 

 

 return ( 

  <View> 

   {acessorio && ( 

    <> 

     <Text>{acessorio.nome}</Text> 

     <Text>{acessorio.descricao}</Text> 

     <Image source={{ uri: acessorio.foto }} style={{ width: 100, height: 100 }} /> 

     <Text>{acessorio.preco}</Text> 

    </> 

   )} 

  </View> 

 ); 

} 

 

export default ViewAcessorioScreen;