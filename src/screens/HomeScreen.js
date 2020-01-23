import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    console.log(images);

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = async () => {
        try {
            await fetch('http://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(responseJson => {
                    setImages(responseJson.splice(0, 50));
                    setErrorMessage('')
                })

        } catch (err) {
            setErrorMessage("Oops! Something went wrong try again...");
        }
    }

    return (
        <View style={styles.Container}>
            {errorMessage ? <Text style={styles.errorMessage} >{errorMessage}</Text> : null}
            <SafeAreaView>
                <FlatList
                    data={images}
                    keyExtractor={item => item.id.toString()}

                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate("Detail", { item: item })}>
                                <Image
                                    style={styles.imageThumbnail}
                                    source={{ uri: item.thumbnailUrl }}
                                />
                            </TouchableOpacity>
                        </View>
                    )}

                >

                </FlatList>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    imageThumbnail: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 2,
        backgroundColor: 'yellow'
    },
    errorMessage: {

        fontSize: 20,
        color: 'red',
        paddingTop: 30,
        textAlign: 'center'

    }

})

export default HomeScreen;