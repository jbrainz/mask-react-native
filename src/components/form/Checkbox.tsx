/* eslint-disable prettier/prettier */
import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../Theme";


interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <BorderlessButton onPress={() => onChange()} style={{ justifyContent: "center" }}>
            <Box
                alignItems="center"
                flexDirection="row" >
                <Box
                    marginRight="m"
                    height={20}
                    width={20}
                    borderRadius="s"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor={checked ? "primary" : "white"}
                    borderWidth={1}
                    borderColor="primary"
                >
                    <Icon name="check" size={10} color="white" />
                </Box>
                <Text variant="button">{label}</Text>
            </Box>
        </BorderlessButton>
    )
}

export default Checkbox;
