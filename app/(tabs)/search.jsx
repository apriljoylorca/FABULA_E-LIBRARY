import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = ['Fiction', 'Non-Fiction', 'Fantasy', 'Mystery', 'Sci-Fi', 'Romance', 'Young Adult', 'Bildungsroman'];

  // Mapping genres to specific background colors
  const genreColors = {
    Fiction: 'bg-colors-smashed-pumpkin',
    'Non-Fiction': 'bg-colors-granny-apple',
    Fantasy: 'bg-colors-curious',
    Mystery: 'bg-colors-crimson',
    'Sci-Fi': 'bg-colors-pastel-yellow',
    Romance: 'bg-colors-dark-turquoise',
    'Young Adult': 'bg-colors-brink-pink',
    Bildungsroman: 'bg-colors-pistachio',
  };

  return (
    <View className="flex-1 bg-colors-lavender">
      <View className="flex-row items-center pt-6 ml-4">
        {/* Search Bar */}
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search books, authors, genres or description"
          className="w-[85%] h-[45px] bg-colors-periwinkle rounded-2xl px-4 text-[12px] font-playfdreg text-colors-granite-gray"
        />

        {/* Filter Icon */}
        <TouchableOpacity onPress={() => console.log('Filter Pressed')}>
          <Icon name="filter-list" size={35} color="#4B0082" style={{ marginLeft: 4, marginTop: 4 }} />
        </TouchableOpacity>
      </View>

      <View className="h-24 mt-4 ml-4">
        <Text className="font-playfdmed text-[14px] text-colors-abbey">Recent Search</Text>
        <Text className="font-playfdmedita text-[12px] text-colors-granite-gray text-center mt-6">No recent search history</Text>
      </View>

      <View className="h-6 mt-2 ml-3 justify-center">
        <Text className="font-playfdmed text-[14px] text-colors-black">All Genres</Text>
      </View>

      {/* Genre Selection (2 per line, vertical scroll) */}
      <ScrollView showsVerticalScrollIndicator={false} className="mt-1 ml-4">
        {genres.reduce((rows, genre, index) => {
          if (index % 2 === 0) rows.push([genre]);
          else rows[rows.length - 1].push(genre);
          return rows;
        }, []).map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row mb-4">
            {row.map((genre, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedGenre(genre)}
                className={`flex-1 h-20 justify-center mr-4 px-4 py-2 rounded-lg ${
                  selectedGenre === genre ? 'bg-colors-bright-ube' : genreColors[genre]
                }`}
              >
                <Text className={`text-[12px] ${selectedGenre === genre ? 'text-colors-white' : 'text-colors-black'} font-playfdreg`}>
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Search;