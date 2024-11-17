import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () => {
    // Perform any authentication or validation logic here
    setIsSubmitting(true);
    // Navigate to homescreen on successful login
    router.push('/(tabs)/home');
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-colors-lavender h-full">
      <ScrollView>
          <View className="w-full items-center justify-start h-full px-4">
              <Image source={images.logo}
                resizemode='contain'
                className="w-[250px] h-[60px] mt-0"
              />
              <View className="w-full items-center justify-start h-full px-4 bg-colors-thistle mt-5 pb-6">
                <Text className="text-3xl text-colors-white mt-8 font-cdecobold text-center">SIGN IN TO FABULA</Text>
                <Text className="text-lg text-colors-white mt-1 font-cdecobold text-center">& START YOUR ENDLESS READING ADVENTURE!</Text>
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />
                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-10"
                />
                <CustomButton
                    title="Log In"
                    handlePress={submit}
                    containerStyles="w-[90%] mt-10 h-[55px] bg-colors-periwinkle"
                    isLoading={isSubmitting}
                />
                <View className="flex justify-center pt-2 flex-row gap-2">
                  <Text className="text-base text-colors-abbey font-playfdsemibold">
                    Don't have an account?
                  </Text>

                  <Link
                    href="/sign_up"
                    className="text-base font-playfdxbold text-colors-pansy-purple mb-2"
                  >
                    Signup
                  </Link>
                </View>
              </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn