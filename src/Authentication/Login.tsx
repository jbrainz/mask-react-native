/* eslint-disable prettier/prettier */
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as TextField } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";


import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/form/TextInput";
import Checkbox from "../components/form/Checkbox";
import { AuthNavigationProps } from "../components/Navigation";

import Footer from "./components/Footer";


const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        values,
        setFieldValue,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: "", password: "", remember: true },
        onSubmit: () => navigation.navigate("Home"),
    });
    const password = useRef<TextField>(null);
    const footer =
        <Footer
            title="Don't have an Account?"
            action="Sign up here"
            onPress={() => navigation.navigate("SignUp")}
        />;
    return (
        <Container pattern={0} {...{ footer }}>
            <Text variant="title1" textAlign="center" marginBottom="l">
                Welcome Back
                        </Text>
            <Text variant="body" marginBottom="m" textAlign="center">
                Use your credentials below and login to your account
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
                    returnKeyType="done"
                    returnKeyLabel="submit"
                    onSubmitEditing={() => handleSubmit()}
                />
                <Box flexDirection="row" justifyContent="space-between" marginVertical="s"
                    alignItems="center"
                >
                    <Checkbox label="Remember me"
                        checked={values.remember}
                        onChange={() => setFieldValue("remember", !values.remember)} />
                    <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text variant="button" color="primary">Forgot Password</Text>
                    </BorderlessButton>
                </Box>
                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        label="Login to Your Account"
                        onPress={handleSubmit}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
