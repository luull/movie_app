import { Text , SafeAreaView, ScrollView} from 'react-native'
import {React} from 'react'
import PopularMovie from '../components/PopularMovie';
import NowPlayingMovie from '../components/NowPlayingMovie';
import HeaderHome from '../components/HeaderHome';
import UpCommingMovie from '../components/UpCommingMovie';

const Home = () => {
  return (
    <SafeAreaView>
       <ScrollView>
        <HeaderHome/>
        <PopularMovie/>
        <UpCommingMovie/>
        <NowPlayingMovie/>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home