import { Dimensions } from "react-native";

export const PHONE = 768;
export const TABLET = 992;
export const DESKTOP = 1200;

export const isPhone = Dimensions.get("window").width < PHONE;
export const isTablet = Dimensions.get("window").width < TABLET;
export const isDesktop = Dimensions.get("window").width < DESKTOP;
