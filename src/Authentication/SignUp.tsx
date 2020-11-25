/* eslint-disable prettier/prettier */
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as TextField } from "react-native";

import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/form/TextInput";
import { AuthNavigationProps } from "../components/Navigation";

import Footer from "./components/Footer";

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    passwordComfirmation: Yup.string().min(6, "Too Short").required("Required")
        .equals([Yup.ref("password")], "Password don't match"),
    email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { email: "", password: "", passwordComfirmation: "", remember: true },
        onSubmit: (value) => console.log(value),
    });
    const footer =
        <Footer
            title="Already have an Account?"
            action="Login in here"
            onPress={() => navigation.navigate("Login")}
        />;
    const password = useRef<TextField>(null);
    const passwordComfirmation = useRef<TextField>(null);

    return (
        <Container pattern={1} {...{ footer }}>
            <Text variant="title1" textAlign="center" marginBottom="l">
                Create Account
                        </Text>
            <Text variant="body" marginBottom="m" textAlign="center">
                Let us know what your name, email and your password is.
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
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInput
                        ref={password}
                        icon="lock"
                        placeholder="Enter your password"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        touched={touched.password}
                        errors={errors.password}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCompleteType="password"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => passwordComfirmation.current?.focus()}
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInput
                        ref={passwordComfirmation}
                        icon="lock"
                        placeholder="Comfirm password"
                        onChangeText={handleChange("passwordComfirmation")}
                        onBlur={handleBlur("passwordComfirmation")}
                        touched={touched.passwordComfirmation}
                        errors={errors.passwordComfirmation}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCompleteType="password"
                        returnKeyType="done"
                        returnKeyLabel="submit"
                        onSubmitEditing={() => handleSubmit()}
                    />
                </Box>
                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        label="Create Your Account"
                        onPress={handleSubmit}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
