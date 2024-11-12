import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Replace with your desired icon library

const Profile = () => {
  // State to handle dropdown visibility and image display for Analytics
  const [isAnalyticsExpanded, setIsAnalyticsExpanded] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  // Section Data
  const sections = [
    { name: 'Edit Profile', icon: 'edit', onPress: () => console.log('Edit Profile Pressed') },
    { name: 'Subscription', icon: 'subscriptions', onPress: () => console.log('Subscription Pressed') },
    { name: 'Customizations', icon: 'settings', onPress: () => console.log('Customizations Pressed') },
    { name: 'Achievements', icon: 'star', onPress: () => console.log('Achievements Pressed') },
    { name: 'Settings', icon: 'settings', onPress: () => console.log('Settings Pressed') },
    { name: 'Logout', icon: 'logout', onPress: () => console.log('Logout Pressed') },
    {
      name: 'Analytics',
      icon: 'bar-chart',
      onPress: () => setIsAnalyticsExpanded(!isAnalyticsExpanded),
    },
  ];

  const analyticsSections = [
    { name: 'Time Spent Reading', image: require('../../assets/images/time_spent.png') },
    { name: 'Most Read Genres', image: require('../../assets/images/genres1.png') },
    { name: 'Completion Rate', image: require('../../assets/images/completion_rate.png') },
  ];

  // Function to handle sub-section press
  const handleSectionPress = (sectionName) => {
    if (selectedSection === sectionName) {
      setSelectedSection(null); // Collapse the section
    } else {
      setSelectedSection(sectionName); // Show the image of selected section
    }
  };

  return (
    <ScrollView className="flex-1 bg-colors-lavender">
      <View className="item-center justify-center">
        <Text className="text-center p-2 text-2xl font-playfdbold text-colors-persian-indigo">Profile</Text>
      </View>
      
      {/* Profile Image */}
      <View className="mb-2 mt-5 items-center justify-center">
        <Image
          source={require('../../assets/images/profile.png')}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
      </View>

      {/* Profile Name */}
      <View className="flex-auto items-center text-center">
        <Text className="text-[15px] font-playfdbold text-colors-black">Allura</Text>
      </View>

      {/* Clickable Sections with Border */}
      <View className="mt-4 items-center">
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            onPress={section.onPress}
            className="flex-row justify-between items-center py-4 px-6 mb-2 w-[90%] border-collapse bg-colors-pastel-lavender"
          >
            {/* Section Name */}
            <Text className="text-[14px] font-playfdreg text-colors-black">{section.name}</Text>

            {/* Icon */}
            <Icon name={section.icon} size={20} color="#4B0082" />
          </TouchableOpacity>
          
        ))}

        {/* Analytics Dropdown */}
        {isAnalyticsExpanded && (
          <View className="w-[85%] ml-6">
            {analyticsSections.map((analyticsSection, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => handleSectionPress(analyticsSection.name)}
                  className="flex-row justify-between items-center py-4 px-6 mb-2 border-collapse bg-colors-pastel-lavender"
                >
                  {/* Subsection Name */}
                  <Text className="text-[14px] font-playfdreg text-colors-black">
                    {analyticsSection.name}
                  </Text>

                  {/* Icon */}
                  <Icon name="arrow-forward-ios" size={16} color="#4B0082" />
                </TouchableOpacity>

                {/* Show Image directly under the selected sub-section */}
                {selectedSection === analyticsSection.name && (
                  <View className="mt-2 items-center mb-4">
                    <Image
                      source={analyticsSection.image}
                      style={{ width: 300, height: 250, borderRadius: 10 }}
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Profile;