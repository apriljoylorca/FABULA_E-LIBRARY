import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full items-center justify-start min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[300px] h-[230px] mt-0"
            resizeMode="fit"
          />
          <Image
            source={images.readingGirl}
            className="w-[250px] h-[200px]"
            resizeMode="fit"
          />
          <View className="relative mt-5">
            <Text className="text-lg text-colors-purple-heart font-playfdsemibold text-center">
              An E-Library made for your convenience. Access and read your favorite books anytime and anywhere.
            </Text>
          </View>
          <Text className="text-sm font-playfdsemiboldita text-colors-royal-purple mt-5 text-center rounded">
            Read like you've never read before...""
          </Text>

          <CustomButton
            title="Get Started"
            handlePress={()=> router.push('/sign_in')}
            containerStyles="w-[200px] h-[55px] mt-10 rounded-3xl"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#b39eb5'style='light' ></StatusBar>
    </SafeAreaView>
  );
}