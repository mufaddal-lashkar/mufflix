import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import * as Font from "expo-font";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image
                    source={icon}
                    tintColor='#151312'
                    className="size-5"
                />
                <Text
                    className="text-secondary text-base font-semibold ml-2"
                >{title}</Text>
            </ImageBackground>
        )
    } else {
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full">
                <Image
                    source={icon}
                    tintColor="#A8B5DB"
                    className="size-5"
                />
            </View>
        )
    }

}

const _Layout = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                // Key is the fontFamily you'll use in styles or tailwind
                myfont: require("../../assets/fonts/SpaceMono-Regular.ttf"),
            });
            setLoaded(true);
        })();
    }, []);

    if (!loaded) return null;

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: "center",
                    alignItems: "center"
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: '#0f0D23'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default _Layout