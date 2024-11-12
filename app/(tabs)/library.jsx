import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as Progress from 'react-native-progress';

const downloadedBooks = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    desc: 'To Kill a Mockingbird by Harper Lee is a coming-of-age novel set in the 1930s in the fictional town of Maycomb, Alabama. The story is narrated by Scout Finch, a young girl whose father, Atticus Finch, is a principled lawyer. When Atticus defends a Black man, Tom Robinson, accused of raping a white woman, the community\'s deep-seated racism surfaces.',
    imageUrl: require('../../assets/images/bookcover_9.jpg'),
    progress: 0.9,
  },
  {
    id: '2',
    title: 'The Witch of Portobello',
    author: 'Paulo Coelho',
    desc: 'The Witch of Portobello by Paulo Coelho is a novel that explores the life of Athena, a young woman of mysterious origins raised in Romania but who later moves to Beirut and then London. The story unfolds through the perspectives of various characters who recount their experiences with Athena, revealing her spiritual journey and her quest for identity. As she embraces her gifts as a witch and challenges societal norms, Athena navigates themes of love, self-discovery, and the pursuit of personal truth.',
    imageUrl: require('../../assets/images/bookcover_1.jpg'),
    progress: 0.65
  },
  {
    id: '3',
    title: 'Percy Jackson and the Olympians: The Battle of the Labyrinth',
    author: 'Rick Riordan',
    desc: 'In Percy Jackson and the Olympians: The Battle of the Labyrinth the fourth book in the series by Rick Riordan, Percy Jackson faces new challenges as he navigates his way through a dangerous labyrinth created by the ancient inventor Daedalus. With the prophecy looming over them, Percy and his friends—Annabeth, Grover, and Tyson—must enter the labyrinth to find Daedalus and secure his help against the rising threat of the Titan Kronos and his minions. As they explore the maze, they encounter monsters, ancient traps, and new allies, ultimately uncovering secrets that could change the fate of Camp Half-Blood and the world.',
    imageUrl: require('../../assets/images/bookcover_10.jpg'),
    progress: 0.15
  },
  {
    id: '4',
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    desc: 'A Court of Thorns and Roses by Sarah J. Maas follows the story of Feyre Archeron, a young huntress who kills a wolf in the woods to provide for her family. Unbeknownst to her, the wolf is a faerie in disguise. As punishment for her actions, Feyre is taken to the magical land of Prythian by Tamlin, a High Lord of the Spring Court. There, she discovers a world filled with beauty, danger, and enchantment. As she navigates the complexities of this new realm and its politics, Feyre grapples with her feelings for Tamlin and uncovers dark forces threatening both their worlds. The novel blends elements of fantasy, romance, and adventure, exploring themes of love, sacrifice, and the struggle for freedom.',
    imageUrl: require('../../assets/images/bookcover_11.jpg'),
    progress: 0.05
  },
  {
    id: '5',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    desc: 'Where the Crawdads Sing by Delia Owens tells the story of Kya Clark, a young girl who grows up isolated in the marshes of North Carolina after her family abandons her. Known as the "Marsh Girl," Kya learns to survive alone, forming a deep connection with nature. Her life takes a turn when she becomes involved with two local boys, leading to a complex relationship that intertwines love and betrayal. When one of the boys is found dead, Kya becomes the prime suspect in his murder. The novel weaves together themes of loneliness, resilience, and the struggle for acceptance, exploring the beauty and harshness of the natural world alongside the intricacies of human relationships.',
    imageUrl: require('../../assets/images/bookcover_12.jpg'),
    progress: 0.30
  },
];

const readingList = [
  {
    id: '6',
    title: 'A Game of Thrones',
    author: 'George R. R. Martin',
    desc: "A Game of Thrones is the first book in George R.R. Martin's epic fantasy series, A Song of Ice and Fire. Set in the Seven Kingdoms of Westeros, it weaves multiple storylines centered on the power struggles for the Iron Throne. The novel explores themes of politics, betrayal, honor, and the complex dynamics of noble families.",
    imageUrl: require('../../assets/images/bookcover_5.jpg'),
    progress: 0.45
  },
  {
    id: '7',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    desc: "The Great Gatsby, written by F. Scott Fitzgerald, is a novel set in the Jazz Age of the 1920s in America. It tells the story of Jay Gatsby, a mysterious and wealthy man known for hosting extravagant parties at his mansion in West Egg, Long Island. The story is narrated by Nick Carraway, a bond salesman who becomes Gatsby's neighbor and is drawn into his world.",
    imageUrl: require('../../assets/images/bookcover_6.jpg'),
    progress: 0.78
  },
  {
    id: '8',
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    desc: "And Then There Were None, written by Agatha Christie, is a classic mystery novel about ten strangers who are invited to a remote island under different pretexts. Once they arrive, they discover they’ve been lured there by an unknown host. Each guest is accused of a past crime and, one by one, they begin to die in a manner that eerily follows the lines of a children's nursery rhyme titled 'Ten Little Soldiers.'",
    imageUrl: require('../../assets/images/bookcover_7.jpg'),
    progress: 0.83
  },
  {
    id: '9',
    title: 'The Universe of Us',
    author: 'Lang Leav',
    desc: "The Universe of Us by Lang Leav is a contemporary poetry and prose collection that delves into themes of love, heartbreak, self-discovery, and healing. Leav's writing explores the complexities of relationships, from the joy of falling in love to the pain of loss and the journey toward self-empowerment.",
    imageUrl: require('../../assets/images/bookcover_2.jpg'),
    progress: 0.92
  },
  {
    id: '12',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    desc: 'To Kill a Mockingbird by Harper Lee is a coming-of-age novel set in the 1930s in the fictional town of Maycomb, Alabama. The story is narrated by Scout Finch, a young girl whose father, Atticus Finch, is a principled lawyer. When Atticus defends a Black man, Tom Robinson, accused of raping a white woman, the community\'s deep-seated racism surfaces.',
    imageUrl: require('../../assets/images/bookcover_9.jpg'),
    progress: 0.9,
  },
  {
    id: '13',
    title: 'The Witch of Portobello',
    author: 'Paulo Coelho',
    desc: 'The Witch of Portobello by Paulo Coelho is a novel that explores the life of Athena, a young woman of mysterious origins raised in Romania but who later moves to Beirut and then London. The story unfolds through the perspectives of various characters who recount their experiences with Athena, revealing her spiritual journey and her quest for identity. As she embraces her gifts as a witch and challenges societal norms, Athena navigates themes of love, self-discovery, and the pursuit of personal truth.',
    imageUrl: require('../../assets/images/bookcover_1.jpg'),
    progress: 0.65
  },
  {
    id: '14',
    title: 'Percy Jackson and the Olympians: The Battle of the Labyrinth',
    author: 'Rick Riordan',
    desc: 'In Percy Jackson and the Olympians: The Battle of the Labyrinth the fourth book in the series by Rick Riordan, Percy Jackson faces new challenges as he navigates his way through a dangerous labyrinth created by the ancient inventor Daedalus. With the prophecy looming over them, Percy and his friends—Annabeth, Grover, and Tyson—must enter the labyrinth to find Daedalus and secure his help against the rising threat of the Titan Kronos and his minions. As they explore the maze, they encounter monsters, ancient traps, and new allies, ultimately uncovering secrets that could change the fate of Camp Half-Blood and the world.',
    imageUrl: require('../../assets/images/bookcover_10.jpg'),
    progress: 0.15
  },
  {
    id: '10',
    title: 'The Notebook',
    author: 'Nicholas Sparks',
    desc: "The Notebook by Nicholas Sparks is a romantic drama that tells the story of Noah Calhoun and Allie Hamilton, two young lovers from different social backgrounds. Set in the 1940s, the novel begins with Noah, a simple country boy, falling in love with Allie, a wealthy young woman, during a summer in Seabrook, North Carolina. Despite their deep connection, they are separated by societal pressures and Allie's parents, who disapprove of Noah’s lack of wealth.",
    imageUrl: require('../../assets/images/bookcover_3.jpg'),
    progress: 0.10
  },
  {
    id: '11',
    title: 'A Dance with Dragons',
    author: 'George R. R. Martin',
    desc: "A Dance with Dragons is the fifth book in George R.R. Martin's epic fantasy series, A Song of Ice and Fire. It picks up where both A Storm of Swords and A Feast for Crows left off, continuing the complex and interwoven storylines across Westeros and Essos. The novel is filled with political intrigue, power struggles, and survival as key characters navigate the dangers of their world.",
    imageUrl: require('../../assets/images/bookcover_4.jpg'),
    progress: 0.08
  },
  {
    id: '15',
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    desc: 'A Court of Thorns and Roses by Sarah J. Maas follows the story of Feyre Archeron, a young huntress who kills a wolf in the woods to provide for her family. Unbeknownst to her, the wolf is a faerie in disguise. As punishment for her actions, Feyre is taken to the magical land of Prythian by Tamlin, a High Lord of the Spring Court. There, she discovers a world filled with beauty, danger, and enchantment. As she navigates the complexities of this new realm and its politics, Feyre grapples with her feelings for Tamlin and uncovers dark forces threatening both their worlds. The novel blends elements of fantasy, romance, and adventure, exploring themes of love, sacrifice, and the struggle for freedom.',
    imageUrl: require('../../assets/images/bookcover_11.jpg'),
    progress: 0.05
  },
  {
    id: '16',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    desc: 'Where the Crawdads Sing by Delia Owens tells the story of Kya Clark, a young girl who grows up isolated in the marshes of North Carolina after her family abandons her. Known as the "Marsh Girl," Kya learns to survive alone, forming a deep connection with nature. Her life takes a turn when she becomes involved with two local boys, leading to a complex relationship that intertwines love and betrayal. When one of the boys is found dead, Kya becomes the prime suspect in his murder. The novel weaves together themes of loneliness, resilience, and the struggle for acceptance, exploring the beauty and harshness of the natural world alongside the intricacies of human relationships.',
    imageUrl: require('../../assets/images/bookcover_12.jpg'),
    progress: 0.30
  },
];

const Library = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('reading'); // State to track active tab

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="ml-2 mb-4"
      onPress={() => navigation.navigate('ReadingPage', { bookId: item.id })}
    >
      <View className="flex flex-row items-start">
        <Image source={item.imageUrl} className="w-28 h-40 mr-2 rounded-md" />
        <View className="flex-1 mt-2">
          <Text
            className="font-playfdbla text-colors-black text-[15px]"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
          <Text
            className="font-playfdreg text-colors-abbey text-[12px] mt-1"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.author}
          </Text>
          {item.desc && (
            <Text
              className="font-playfdreg text-colors-dim-grey text-[11px] ml-1 mt-1"
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {item.desc.length > 150 ? `${item.desc.substring(0, 150)}...` : item.desc}
            </Text>
          )}
          {item.progress !== undefined && (
            <>
              <Progress.Bar
                progress={item.progress}
                width={200}
                color="#66023c"
                unfilledColor="#D3D3D3"
                borderWidth={0}
                height={7}
                style={{ marginTop: 10 , marginLeft: 8}}
              />
              {/* Continue Reading Button */}
              <TouchableOpacity
                onPress={() => navigation.navigate('ReadingPage', { bookId: item.id })}
                className="mt-2 p-2 rounded-2xl h-8 w-[200px] border-0 bg-colors-english-lavender ml-2"
              >
                <Text className="text-colors-white text-center font-playfdsemibold text-[12px]">Continue Reading</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  // Determine which data to display based on the active tab
  const dataToDisplay = activeTab === 'downloaded' ? downloadedBooks : readingList;

  return (
    <View className="flex-1 bg-colors-lavender">
      {/* Buttons to switch between tabs */}
      <View className="flex flex-row mb-2 ml-2 mr-2 bg-[#5946B2] rounded-2xl mt-2">
        <TouchableOpacity
          className={`flex-1 rounded-2xl py-2 ${activeTab === 'reading' ? 'bg-[#9966CC]' : 'bg-transparent'}`}
          onPress={() => setActiveTab('reading')}
        >
          <Text className="text-center font-playfdbold text-[18px] text-colors-white">
            CURRENT READS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 rounded-2xl py-2 ${activeTab === 'downloaded' ? 'bg-[#9966CC]' : 'bg-transparent'}`}
          onPress={() => setActiveTab('downloaded')}
        >
          <Text className="text-center font-playfdbold text-[18px] text-colors-white">
            DOWNLOADS
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Library;