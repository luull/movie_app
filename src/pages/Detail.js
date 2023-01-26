import { View, Text, SafeAreaView, Image, ActivityIndicator, ScrollView } from 'react-native'
import {React, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';

const Detail = ({navigation, route}) => {
    const {itemId} = route.params
    const [data, setData] = useState([])
    const [genre, setGenre] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      if(itemId == null){
        navigation.push('Home')
      }
      getMovie()
    }, [])
    const getMovie = async() => {
        setIsLoading(true)
        const respon = await axios.get(`https://api.themoviedb.org/3/movie/${itemId}?api_key=6dcaf0667fe77633ed4db188ddc50fa2&language=en-US`)
        .then(function(response){
            // console.log(response.data)
            setData(response.data)
            setGenre(response.data.genres)
            setIsLoading(false)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
  return (
    <SafeAreaView>
        {isLoading === true ? (
            <ActivityIndicator color="black"/>
        ):(
         
   <>
   
            <View>
                <Image source={{uri:`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}} style={{width:'auto',height:300, marginTop:-50}}/>
            </View>
          <View style={{backgroundColor:'rgba(235, 235, 235, 0.5)', width:'100%', height:300, marginTop:-300,}}>
          </View>

          <View style={{alignItems:'center', marginTop:-150}}>
            <Image source={{uri:`https://image.tmdb.org/t/p/w500${data.poster_path}`}} style={{width:200,height:300, borderRadius:8}}/>
           <View style={{width:'100%', padding:25, alignItems:'center'}}>
           <View style={{flexDirection:'row',marginBottom:5, justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                            {data.vote_average > 7.8 ? (
                                
                                <>
                                    <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} color="#E1B813"></FontAwesomeIcon>
                                </>
                            ):(
                                    
                                <>
                                    {data.vote_average < 6.8 ?(
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
                        
                        <Text>{data.vote_average}</Text>
             </View>
           <Text style={{fontSize:26, fontWeight:'700', textAlign:'center'}}>{data.original_title}</Text>
           {data.tagline !== null ? (
           <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>{data.tagline}</Text>
           ):('')}
           <Text style={{fontSize:14, fontWeight:'300', marginVertical:20, textAlign:'center'}}>{data.overview}</Text>
           <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
           {genre.map((list, index)=> {
            return(
              <>
                   <View style={{backgroundColor:'#c0c0c0', paddingHorizontal:10, paddingVertical:3, marginHorizontal:3,marginVertical:3, borderRadius:5}}>   
                    <Text style={{color:'white'}}>
                        {list.name}
                      </Text>
                    </View>
              </>
            )
          })}
          </View>
           </View>
          </View>
       
   </>
  
        )}
    </SafeAreaView>
  )
}

export default Detail