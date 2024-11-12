import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the progress library

const featured = [
  {
    id: '1',
    title: 'A Game of Thrones',
    imageUrl: require('../..//assets/images/bookcover_5.jpg'),
  },
  {
    id: '2',
    title: 'The Great Gatsby',
    imageUrl: require('../..//assets/images/bookcover_6.jpg'),
  },
  {
    id: '3',
    title: 'And Then There Were None',
    imageUrl: require('../..//assets/images/bookcover_7.jpg'),
  },
];

const recommendations = [
  {
    id: '4',
    title: 'The Witch of Portbello',
    imageUrl: require('../..//assets/images/bookcover_1.jpg'),
  },
  {
    id: '5',
    title: 'Harry Potter And The Prisoner of Azkaban',
    imageUrl: require('../..//assets/images/bookcover_8.jpg'),
  },
  {
    id: '6',
    title: 'To Kill A Mockingbird',
    imageUrl: require('../..//assets/images/bookcover_9.jpg'),
  },
];

const continueReading = [
  {
    id: '7',
    title: 'The Universe of Us',
    imageUrl: require('../..//assets/images/bookcover_2.jpg'),
    progress: 0.9,
  },
  {
    id: '8',
    title: 'The Notebook',
    imageUrl: require('../..//assets/images/bookcover_3.jpg'),
    progress: 0.25,
  },
  {
    id: '9',
    title: 'A Dance with Dragons',
    imageUrl: require('../..//assets/images/bookcover_4.jpg'),
    progress: 0.8,
  },
];

const Home = ({ navigation }) => {
  const renderContinueReadingItem = ({ item }) => (
    <TouchableOpacity
      className="items-center justify-items-center ml-2 mr-2"
      onPress={() => navigation.navigate({ bookId: item.id })}
    >
      <View className="shadow-md shadow-colors-dim-grey" style={{ elevation: 5 }}>
        <Image 
          source={item.imageUrl} 
          className="w-[105px] h-[160px] rounded-md" 
        />
      </View>

      <Text className="font-playfdreg text-colors-black text-[12px] mb-1" numberOfLines={1} ellipsizeMode="tail">
        {item.title.length > 18 ? `${item.title.substring(0, 18)}...` : item.title}
      </Text>

      {item.progress !== undefined && (
        <Progress.Bar
          progress={item.progress}
          width={100}
          color="#66023c"
          unfilledColor="#D3D3D3"
          borderWidth={0}
          height={5}
          style={{ marginTop: 2 }}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-colors-lavender">
      <View className="h-10 justify-center">
        <Text className="font-cdecoblack text-2xl ml-2 p-1 text-colors-indigo">FABULA</Text>
        <Icon
          name="notifications-outline"
          size={25}
          color="#32127a"
          style={{ position: 'absolute', right: 5 }}
        />
      </View>

      <View className="relative w-full">
        <Image className="h-[150px] w-[100%]" source={require('../..//assets/images/home_1.2.png')} />
      </View>

      {/* Continue Reading Section */}
      <View className="flex-row justify-between items-center mt-4">
        <Text className="font-playfdmed text-base text-colors-russian-violet ml-2 mb-1">Continue Reading</Text>
        <Text className="font-playfdreg text-[12px] text-colors-gray ml-44 mr-2">View All</Text>
      </View>
      <FlatList
        data={continueReading}
        renderItem={renderContinueReadingItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View className="h-[1px] bg-colors-gray mb-1 mt-2 w-[100%]" />

      {/* Featured Section */}
      <View className="flex-row justify-between items-center mt-4">
        <Text className="font-playfdmed text-base text-colors-russian-violet ml-2 mb-1">Featured</Text>
        <Text className="font-playfdreg text-[12px] text-colors-gray ml-60 mr-2">View All</Text>
      </View>
      <FlatList
        data={featured}
        renderItem={renderContinueReadingItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View className="h-[1px] bg-colors-gray mb-1 mt-1 w-[100%]" />

      {/* Recommendations Section */}
      <View className="flex-row justify-between items-center mt-4">
        <Text className="font-playfdmed text-base text-colors-russian-violet ml-2 mb-1">Recommendations</Text>
        <Text className="font-playfdreg text-[12px] text-colors-gray ml-44 mr-2">View All</Text>
      </View>
      <FlatList
        data={recommendations}
        renderItem={renderContinueReadingItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </ScrollView>
  );
};

export default Home;