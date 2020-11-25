/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import React, { forwardRef } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { TextInput as TextField, StyleSheet, TextInputProps as TextFieldProps } from "react-native";

import { Box, useTheme } from "../Theme";
import RoundedIcon from "../RoundedIcon";

interface TextInputProps extends TextFieldProps {
    icon: string;
    touched?: boolean;
    errors?: string;
}


const TextInput = forwardRef<TextField, TextInputProps>(({ icon, touched, errors, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "darkgrey" : (errors ? "danger" : "primary");
    const color = theme.colors[reColor];
    return (
        <Box
            flexDirection="row"
            height={48}
            alignItems="center"
            borderRadius="s"
            borderColor={reColor}
            borderWidth={StyleSheet.hairlineWidth}
        >
            <Box padding="s">
                <Icon name={icon} size={16} {...{ color }} />
            </Box>
            <Box flex={1}>
                <TextField
                    underlineColorAndroid="transparent"
                    placeholderTextColor={color}
                    {...{ ref }}
                    {...props}
                />
            </Box>
            {(touched && (
                <RoundedIcon name={!errors ? "check" : "x"} size={SIZE}
                    backgroundColor=
                    {!errors ? "primary" : "danger"}
                    color="white"
                />
            ))}
        </Box>
    );
});

export default TextInput;
