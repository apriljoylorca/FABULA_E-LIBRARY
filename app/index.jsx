import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-colors-white h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-screen px-4">
          <Image
            source={images.logo}
            className="w-[400px] h-[200px] pt-6"
            resizeMode='contain'
          />
          <Image
            source={images.readingGirl}
            className="w-[300px] h-[250px]"
            resizeMode='contain'
          />
          <View>
            <Text className="text-lg text-colors-slate-blue font-playfdbla mt-2 text-center">An E-Library made for your convenience. 
              Access and read your favorite books anytime and anywhere.
            </Text>
          </View>
          <Text className="text-sm text-colors-slate-blue font-playfdbold mt-2 text-center">Reading but make it fun =)</Text>
          <CustomButton
            title="Get Started"
            handlePress={()=> router.push('/sign_in')}
            containerStyles="w-[200px] mt-5 text-colors-slate-blue"         
          >
          </CustomButton>
        </View>
      </ScrollView>
      <StatusBar style='light'></StatusBar>
    </SafeAreaView>
  );
}