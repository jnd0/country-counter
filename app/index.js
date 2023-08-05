import {StyleSheet, View, Text} from "react-native";

import Header from "./components/Header";
import Box from "./components/Box";

const Page = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Box />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

 export default Page;