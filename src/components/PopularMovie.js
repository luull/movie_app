import { View, Text , FlatList, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native'
import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PopularMovie = () => {
    useEffect(() => {
        getData();
    }, [])
    const navigation = useNavigation(); 
    const [data, setData] = useState([])
   const getData = async() => {
    const respon = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6dcaf0667fe77633ed4db188ddc50fa2&language=en-US&page=1')
    .then(function (response) {
        // handle success
        // console.log(response.data.results);
        setData(response.data.results);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

   } 

  return (
   <>
    <Text style={{fontSize:26, fontWeight:'700', marginVertical:10, marginLeft:10}}>Popular Movie</Text>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
  pagingEnabled={true}>
    <View style={{flexDirection:'row', justifyContent: "space-between", margin:2}}>
{data.map((list, index) => {
    return(
    <TouchableOpacity onPress={() => navigation.navigate("Detail", {itemId:list.id})} style={{width:200,backgroundColor:'white',marginHorizontal:5, marginVertical:8, borderTopLeftRadius:8, borderTopRightRadius:8, borderBottomLeftRadius:8, borderBottomRightRadius:8}}>
        <Image source={{uri:`https://image.tmdb.org/t/p/w500${list.poster_path}`}}  style={{width: 'auto', height: 280, borderTopLeftRadius:8, borderTopRightRadius:8}}/>
      <View style={{padding:12}}>
        <View style={{flexDirection:'row',marginVertical:2, justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                {list.vote_average > 7.8 ? (
                    
                    <>
                        <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                    </>
                ):(
                        
                    <>
                        {list.vote_average < 6.8 ?(
                        <>
                            <FontAwesomeIcon icon={faStar} color="grey"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} color="grey"></FontAwesomeIcon>
                        </>

                        ):(
                        <>
                            <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalfStroke} color="#E1B813"></FontAwesomeIcon>
                        </>

                        )}
                    </>
                )}
               
            </View>
            
            <Text>{list.vote_average}</Text>
        </View>
        <View style={{height:40, alignItems:'start', justifyContent:'center', marginVertical:5}}>
            <Text style={{fontSize:18, fontWeight:'600'}}>{list.title}</Text>
        </View>
        <Text>{`${list.overview.substring(0, 100)}...`}</Text>
        </View>
    </TouchableOpacity>
    )
})}
</View>
    </ScrollView>
   </>
  )
}

export default PopularMovie