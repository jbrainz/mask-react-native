/* eslint-disable prettier/prettier */
import React from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { Box, Button, Container, Text } from "../../components";
import TextInput from "../../components/form/TextInput";
import Checkbox from "../../components/form/Checkbox";
import SocialLogin from "../components";




const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <View style={{ alignItems: "center" }}>
                <Button variant="transparent" onPress={() => "Yup!"}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text variant="button" color="white">
                            Don't have an Account?
                       </Text>
                        <Text variant="button" color="primary" marginLeft="s">
                            Sign up here
                       </Text>
                    </View>
                </Button>
            </View>
        </>
    );
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1, backgroundColor: "transparent" }}
        >
            <ScrollView
                scrollEnabled={false}
                style={{ backgroundColor: "transparent", flex: 1 }}
            >
                <Container {...{ footer }}>
                    <Box padding="xl" style={{ marginBottom: 80 }} >
                        <Text variant="title1" textAlign="center" marginBottom="l">
                            Welcome Back
                        </Text>
                        <Text variant="body" marginBottom="m" textAlign="center">
                            Use your credentials below and login to your account
                       </Text>
                        <Formik
                            validationSchema={LoginSchema}
                            initialValues={{ email: "", password: "", remember: true }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, touched, errors, values, setFieldValue }) => (
                                <Box>
                                    <Box marginBottom="m">
                                        <TextInput
                                            icon="mail"
                                            placeholder="Enter your email"
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            touched={touched.email}
                                            errors={errors.email}
                                        />
                                    </Box>
                                    <TextInput
                                        icon="lock"
                                        placeholder="Enter your password"
                                        onChangeText={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        touched={touched.password}
                                        errors={errors.password}

                                    />
                                    <Box flexDirection="row" justifyContent="space-between">
                                        <Checkbox label="Remember me"
                                            checked={values.remember}
                                            onChange={() => setFieldValue("remember", !values.remember)} />
                                        <Button variant="transparent" onPress={() => "true"}>
                                            <Text color="primary">Forgot Password</Text>
                                        </Button>
                                    </Box>
                                    <Box alignItems="center" marginTop="m">
                                        <Button
                                            variant="primary"
                                            label="Login to Your Account"
                                            onPress={handleSubmit}
                                        />
                                    </Box>
                                </Box>
                            )}
                        </Formik>

                    </Box>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
