/* eslint-disable prettier/prettier */
import { useFormik } from "formik";
import React from "react";
import { Linking } from "react-native";
import * as Yup from "yup";

import { Box, Button, Container, Text, } from "../components";
import { AuthNavigationProps } from "../components/Navigation";
import TextInput from "../components/form/TextInput";

import Footer from "./components/Footer";

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});


const ForgotPassword = ({ navigation }: AuthNavigationProps<"ForgotPassword">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
    } = useFormik({
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: "" },
        onSubmit: () => navigation.navigate("PasswordReset"),
    });
    const footer =
        <Footer
            title="Don't work?"
            action="Try another way"
            onPress={() => Linking.openURL("mailto:piusunimke@gmail.com")}
        />;
    return (
        <Container pattern={2} {...{ footer }}>
            <Text variant="title1" textAlign="center" marginBottom="l">
                Forgot Password?
                        </Text>
            <Text variant="body" marginBottom="m" textAlign="center">
                Please enter your registered email associated with your account.
                       </Text>

            <Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="mail"
                        placeholder="Enter your email"
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        touched={touched.email}
                        errors={errors.email}
                        autoCompleteType="email"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="done"
                        onSubmitEditing={() => handleSubmit()}
                    />
                </Box>
                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        label="Reset password"
                        onPress={handleSubmit}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default ForgotPassword;
