/* eslint-disable prettier/prettier */
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Text } from "../../components";

import SocialLogin from "./SocialLogin";

interface FooterProps {
    title: string;
    onPress: () => void;
    action: string;
}

const Footer = ({ title, onPress, action }: FooterProps) => {
    return (
        <>
            <SocialLogin />
            <Box alignItems="center" paddingTop="s" marginBottom="xl">
                <TouchableWithoutFeedback {...{ onPress }}>
                    <Text variant="button" color="white">
                        <Text>
                            {`${title} `}
                        </Text>
                        <Text color="primary">
                            {action}
                        </Text>
                    </Text>
                </TouchableWithoutFeedback>
            </Box>
        </>
    );
};

export default Footer;
