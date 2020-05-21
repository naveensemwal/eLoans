import React, { useContext, useEffect } from 'react';
import { Button, ImageBackground, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { FormDataContext } from '../../contexts/FormDataContext';
import { TouchableOpacity } from 'react-native-gesture-handler';




const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }
    }
};






const CaptureAadharScreen = (props) => {

    useEffect(() => {
        getPermissionAsync();

    }, []);

    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {

                updateForm({ ...formData, panImage: result.uri });


            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    const { formData, updateForm } = useContext(FormDataContext);
    formData.panImage;

    const onNextClick = () => {

        const file = {
            uri: formData.panImage,
            type: "image/jpg",
            name: 'mobileUpload.jpg',
        }

        const body = new FormData()
        body.append('file', file)

        fetch('http://192.168.0.104:8080/uploadFile', {
            method: "post",
            body: body,
        }).then(res => res.json())
            .then(res => {
                console.log("response ", res)
            })
            .catch(err => {
                console.log("error uploading images: ", err);
            });

    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <View style={styles.imageContainer}>
                    {
                        formData.panImage ?
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={{ uri: formData.panImage }} style={{ width: '100%', height: '100%' }}>
                                    <View style={{ flex: 1, flexDirection: "row-reverse" }}>
                                        <Icon
                                            reverse
                                            name='ios-close-circle-outline'
                                            type='ionicon'
                                            color='transparent'
                                            size={25}
                                            onPress={() => updateForm({ ...formData, panImage: '' })}
                                        />
                                    </View>
                                </ImageBackground>
                            </View>
                            :
                            <View style={{ alignItems: "center", paddingTop: 40 }} activeOpacity={1}>
                                <TouchableOpacity>
                                    <Icon
                                        reverse
                                        name='upload'
                                        type='entypo'
                                        color='#3399ff'
                                        size={40}
                                        onPress={() => _pickImage('front')}

                                    />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: "bold" }}>Upload PAN Card Front Image</Text>
                            </View>
                    }
                </View>
            </View>
            <View style={styles.nextButtonContainer}>
                <Button title="Next" onPress={() => props.navigation.navigate('PersonalDetail')} />
            </View>
        </View>
    )
}

export default CaptureAadharScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flex: 1,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,

    },
    imageContainer: {
        flex: 1,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#cce6ff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 15,
        marginVertical: 10,
        overflow: "hidden"
    },
    nextButtonContainer: {
        flex: 3,
        width: '50%',
        justifyContent: 'flex-end',
        alignSelf: "center",
        borderRadius: 10,
        paddingBottom: 10,
        overflow: "hidden",
        paddingHorizontal: 10
    }

});

