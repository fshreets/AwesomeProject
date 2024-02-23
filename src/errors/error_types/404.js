import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ErrorType404 = props => {
    return (
        <View style={styles.container}>
            <View style={styles.errorContainer}>
                <Image source={require('../../assets/img/5203299.jpg')} style={styles.errorImage} />
                <Text style={styles.errorMessage}>
                    <Text style={styles.warningIcon}>⚠️</Text> Oops! Your link has expired.
                </Text>
            </View>
        </View>
    );
}
export default ErrorType404;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    errorContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    errorImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    errorMessage: {
        fontSize: 20,
        color: '#f39c12', // Yellow color
        textAlign: 'center',
    },
    warningIcon: {
        fontSize: 20,
    },
});
