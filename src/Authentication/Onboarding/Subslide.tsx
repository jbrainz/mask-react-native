/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 34,
    },
    subtitle: {
        fontFamily: "SFProText-Semibold",
        fontSize: 22,
        color: "#0c0d34",
        textAlign: "center",
        lineHeight: 40,
        marginBottom: 12,

    },
    description: {
        fontFamily: "SFProText-Semibold",
        fontSize: 16,
        color: "#0c0d34",
        lineHeight: 24,
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
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button label={last ? "Let's Get Started" : "Next"}
                variant={last ? "primary" : "default"}
                {...{ onPress }}
            />
        </View>
    )
}


export default Subslide
