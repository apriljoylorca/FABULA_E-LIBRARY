import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        className={`bg-colors-pearly-purple text-colors-white rounded-3xl min-h-[55px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
    >
        <Text className={`font-playfdbla text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton