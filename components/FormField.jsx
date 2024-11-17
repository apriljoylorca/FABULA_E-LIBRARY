import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-base text-colors-black font-playfdmed">{title}</Text>
      <View className="w-[95%] h-[50px] px-2 bg-colors-white rounded-xl border-2 border-colors-thistle focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-colors-indigo font-playfdmed text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#808080"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.hide_eye}
              className="w-7 h-7"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default FormField;