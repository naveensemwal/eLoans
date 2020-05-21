import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const InputText = (props) => {
    return <Input {...props}
        style={[props.style, styles.input]}
        containerStyle={styles.containerStyle}
        leftIconContainerStyle={styles.leftIconContainerStyle}
    />;
}



export default InputText;

const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: 5,

    },
    leftIconContainerStyle: {
        paddingRight: 5,
        paddingLeft: 0

    }
});