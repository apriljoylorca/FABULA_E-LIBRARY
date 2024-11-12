import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import {images} from '../../constants'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-colors-lavender h-full">
        <ScrollView>
            <View className="w-full justify-center items-center h-full px-2">
                <Image source={images.logo}
                className="w-[350px] h-[150px]"
                resizeMode='contain'
                />
                <Text className="text-[25px] text-colors-indigo mt-0 font-playfdxbold">
                    Log In to Fabula
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn