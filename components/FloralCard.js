import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const FloralCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/floral/[floral]",
        params: { floral: item.id },
      }}
    >
      <View className="p-1 m-2 bg-blue-300 rounded-xl">
        <Image
          className="rounded-xl"
          source={{
            uri: item.poster,
            height: 150,
            width: 150,
          }}
        />
        <Text className="text-center font-bold text-white">{item.title}</Text>
        <Text className="text-center text-white">{item.overview}</Text>
      </View>
    </Link>
  );
};

export default FloralCard;