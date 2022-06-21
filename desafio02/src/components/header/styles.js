import {StyleSheet} from "react-native";
import theme from "../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 96,
        //marginTop: 50,
        backgroundColor: theme.colors.pinkColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme.colors.textColor,
        fontSize: 20,
        fontFamily: "open-sans-bold"
    }
})
