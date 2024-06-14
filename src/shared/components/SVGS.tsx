import {StyleSheet} from "react-native";
import React from "react";

import FifaLogo from "../assets/images/svg/FIFA_logo_without_slogan 1.svg";
import AppleLogo from "../assets/images/svg/apple.svg";
import GoogleLogo from "../assets/images/svg/google.svg";
import EmailLogo from "../assets/images/svg/email_icon.svg";
import {COLORS} from "@constants/Colors";

export const FifaLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.tabIconSelected,
         stroke = COLORS.light.background
     }) => {
        return (
            <>
                <FifaLogo
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };

export const AppleLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.background,
         // stroke = COLORS.light.background
     }) => {
        return (
            <>
                <AppleLogo
                    height={height}
                    width={width}
                    fill={color}
                    // stroke={stroke}
                />
            </>
        );
    };

export const GoogleLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.background,
         // stroke = COLORS.light.background
     }) => {
        return (
            <>
                <GoogleLogo
                    height={height}
                    width={width}
                    fill={color}
                    // stroke={stroke}
                />
            </>
        );
    };

export const EmailLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.background,
         // stroke = COLORS.light.background
     }) => {
        return (
            <>
                <EmailLogo
                    height={height}
                    width={width}
                    fill={color}
                    // stroke={stroke}
                />
            </>
        );
    };

const styles = StyleSheet.create({});
