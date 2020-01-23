import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const DetailScreen = ({ navigation }) => {
    const { params } = navigation.state;

    return (

        <View style={styles.imageContainer}>
            <Image style={styles.imageThumbnail} source={{ uri: params.item.thumbnailUrl }}></Image>
            <Text>{params.item.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    imageThumbnail: {
        alignItems: 'center',
        height: 150,
        width: 150,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 2,
        alignItems: 'center',
        marginHorizontal: 10
    }

})

export default DetailScreen;