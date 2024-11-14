import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-colors-white h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center, items-center min-h-screenh-[85vh] px-4">
              <Image
                source={images.logo}
                className="w-[300px] h-[84px] pt-10"
                resizeMode='contain'
              />
              <Image
                source={images.readingGirl}
                className="w-[200px] h-[200px]"
                resizeMode='stretch'
              />
              <View className="relative mt-5">
                  <Text className="text-2xl text-colors-purple-heart font-playfdbold text-center">
                  An E-Library made for your convenience. Access and read your favorite books anytime and anywhere.
                  </Text>
              </View>
            <Text className="text-sm, font-playfdsemibold text-colors-royal-purple mt-7 text-center">
              Read like you've never read before.
            </Text>
            <CustomButton
              title="Get Started"
              handlePress={()=> router.push('/sign_in')}
              containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#b39eb5'style='light' ></StatusBar>
    </SafeAreaView>
  );
}