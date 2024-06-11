import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Platform, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useToast} from "react-native-toast-notifications";


type props = {
    child: any;
};

export default function Wrapper({child}: props) {
    const toast = useToast();


    useEffect(() => {


    }, []);

    useEffect(() => {
    }, []);

    return (
        <View style={[{height: "100%"}]}>
            <View style={{height: "100%"}}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{flex: 1}}
                    keyboardVerticalOffset={5}
                >
                    <View style={{height: "100%", width: "100%"}}>{child}</View>

                </KeyboardAvoidingView>
            </View>
        </View>
    );
}
