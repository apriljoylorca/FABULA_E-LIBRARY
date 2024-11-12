import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'


const TabIcon=({icon,color,name,focused}) =>{
  return(
    <View>
      <Image
        source={icon}
        resizeMode='contain'
        className="w-7 h-7"
      />
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title:'Search',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.search}
                color={color}
                name="Search"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title:'Favorites',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.favorites}
                color={color}
                name="Favorites"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="library"
          options={{
            title:'Library',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.library}
                color={color}
                name="Library"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />

      </Tabs>
    </>
  )
}

/*const TabsLayout = () => {
  return (
    <View>
      <Image
        source={}
      />
    </View>
  )
}
*/

export default TabLayout