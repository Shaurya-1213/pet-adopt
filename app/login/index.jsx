import { View, Text, Image, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import Colors from './../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreeen() {

  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
       
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])


  return (
    <View style={{
        backgroundColor:Colors.LIGHTGRAY,
        height:'100%',
    }}>
      <Image source={require('./../../assets/images/1.jpg')}
      style={{
    width:'100%',
    height: 500
    }}
      />
      <View style={{
        padding:20,
        display:'flex',
        alignItems:'center'
      }}>
      <Text style={{
        fontFamily:'poppins-bold',
        fontSize:23,
        textAlign:'center'
      }}>Ready to make a new friend?</Text>

      <Text style={{
        fontFamily:'poppins',
        fontSize:18,
        color:Colors.GRAY,
        marginTop:10
      }}>Let's adopt the pet which you like and make their life happy again.</Text>

      <Pressable 
        onPress={onPress}
        style={{
        padding:14,
        marginTop:60,
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        borderRadius:25,
      }}>
        <Text style={{
            fontFamily:'poppins-medium',
            fontSize:20,
            textAlign:'center',
        }}>Login</Text></Pressable>
    </View>
    </View>
  )
}