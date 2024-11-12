import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const favorites = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Genres: Novel, Bildungsroman, Southern Gothic, Thriller',
    desc: 'To Kill a Mockingbird by Harper Lee is a coming-of-age novel set in the 1930s in the fictional town of Maycomb, Alabama. The story is narrated by Scout Finch, a young girl whose father, Atticus Finch, is a principled lawyer. When Atticus defends a Black man, Tom Robinson, accused of raping a white woman, the community\'s deep-seated racism surfaces.',
    imageUrl: require('../../assets/images/bookcover_9.jpg'),
  },
  {
    id: '2',
    title: 'The Witch of Portobello',
    author: 'Paulo Coelho',
    genre: 'Genres: Novel, Fiction',
    desc: 'The Witch of Portobello by Paulo Coelho is a novel that explores the life of Athena, a young woman of mysterious origins raised in Romania but who later moves to Beirut and then London. The story unfolds through the perspectives of various characters who recount their experiences with Athena, revealing her spiritual journey and her quest for identity. As she embraces her gifts as a witch and challenges societal norms, Athena navigates themes of love, self-discovery, and the pursuit of personal truth.',
    imageUrl: require('../../assets/images/bookcover_1.jpg'),
  },
  {
    id: '3',
    title: 'Percy Jackson and the Olympians: The Battle of the Labyrinth',
    author: 'Rick Riordan',
    genre: 'Genres: Greek mythology, Novel, Fantasy, Young adult literature, Fantasy Fiction, Adventure fiction',
    desc: 'In Percy Jackson and the Olympians: The Battle of the Labyrinth the fourth book in the series by Rick Riordan, Percy Jackson faces new challenges as he navigates his way through a dangerous labyrinth created by the ancient inventor Daedalus. With the prophecy looming over them, Percy and his friends—Annabeth, Grover, and Tyson—must enter the labyrinth to find Daedalus and secure his help against the rising threat of the Titan Kronos and his minions. As they explore the maze, they encounter monsters, ancient traps, and new allies, ultimately uncovering secrets that could change the fate of Camp Half-Blood and the world.',
    imageUrl: require('../../assets/images/bookcover_10.jpg'),
  },
  {
    id: '4',
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    genre: 'Genre: Romance, Fantasy',
    desc: 'A Court of Thorns and Roses by Sarah J. Maas follows the story of Feyre Archeron, a young huntress who kills a wolf in the woods to provide for her family. Unbeknownst to her, the wolf is a faerie in disguise. As punishment for her actions, Feyre is taken to the magical land of Prythian by Tamlin, a High Lord of the Spring Court. There, she discovers a world filled with beauty, danger, and enchantment. As she navigates the complexities of this new realm and its politics, Feyre grapples with her feelings for Tamlin and uncovers dark forces threatening both their worlds. The novel blends elements of fantasy, romance, and adventure, exploring themes of love, sacrifice, and the struggle for freedom.',
    imageUrl: require('../../assets/images/bookcover_11.jpg'),
  },
  {
    id: '5',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Genres: Novel, Mystery, Historical Fiction, Bildungsroman',
    desc: 'Where the Crawdads Sing by Delia Owens tells the story of Kya Clark, a young girl who grows up isolated in the marshes of North Carolina after her family abandons her. Known as the "Marsh Girl," Kya learns to survive alone, forming a deep connection with nature. Her life takes a turn when she becomes involved with two local boys, leading to a complex relationship that intertwines love and betrayal. When one of the boys is found dead, Kya becomes the prime suspect in his murder. The novel weaves together themes of loneliness, resilience, and the struggle for acceptance, exploring the beauty and harshness of the natural world alongside the intricacies of human relationships.',
    imageUrl: require('../../assets/images/bookcover_12.jpg'),
  },
];

const Favorites = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="ml-2 mb-4"
      onPress={() => navigation.navigate('ReadingPage', { bookId: item.id })}
    >
      <View className="relative flex-row items-start">
        <Image source={item.imageUrl} className="w-[105px] h-[160px] rounded-md mr-2" />
        
        {/* Heart Icon positioned at the top left corner of the book cover */}
        <Icon
          name="heart"
          size={20}
          color="#9400d3"
          style={{ position: 'absolute', top: 5, left: 5 }} // Changed to left
        />
        
        <View className="flex-1 mt-2">
          <Text
            className="font-playfdbla text-colors-black text-[14px]"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
          <Text
            className="font-playfdmed text-colors-abbey text-[12px]"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.author}
          </Text>
          <Text
            className="font-playfdreg text-colors-granite-gray text-[11px]"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.genre}
          </Text>
          {item.desc && (
            <Text
              className="font-playfdreg text-colors-gray text-[11px] ml-1 mr-1 mt-1"
              numberOfLines={4}
              ellipsizeMode="tail"
            >
              {item.desc.length > 200 ? `${item.desc.substring(0, 200)}...` : item.desc}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-colors-lavender">
      <View className="flex-row items-center bg-colors-light-pastel-purple w-full mb-2">
        <Text className="text-lg font-playfdbold text-colors-persian-indigo py-1 mx-2">
          Favorites
        </Text>
      </View>

      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Favorites;