/* eslint-disable prettier/prettier */
import React from "react";
import { View, StyleSheet } from "react-native";

import { Button, Text } from "../../components";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 34,
    },
    subtitle: {
        textAlign: "center",
        lineHeight: 40,
        marginBottom: 12,
    },
    description: {
        textAlign: "center",
        marginBottom: 40
    },
})

interface SubslidesProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslidesProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle} variant="title2">{subtitle}</Text>
            <Text style={styles.description} variant="body">{description}</Text>
            <Button label={last ? "Let's Get Started" : "Next"}
                variant={last ? "primary" : "default"}
                {...{ onPress }}
            />
        </View>
    );
};


export default Subslide
