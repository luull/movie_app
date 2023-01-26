import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome,faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faUser}/>
      <Text>Profile!</Text>
    </View>
  )
}

export default Profile