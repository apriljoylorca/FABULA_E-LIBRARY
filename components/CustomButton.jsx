import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-colors-lavender-mist rounded-xl min-h-[40px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-playfdbold text-lg text-colors-purple-heart ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;