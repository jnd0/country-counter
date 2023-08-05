import {StyleSheet, View, Text} from "react-native";

const Box = () => {
    return (
        <View style={styles.boxContainer}>
            <View style={styles.box}>
                <View style={styles.innerBox}>
                    <Text>Box Component 1</Text>
                </View>
                <View style={styles.innerBox}>
                    <Text>Box Component 2</Text>
                </View>
                <View style={styles.innerBox}>
                    <Text>Box Component 3</Text>
                </View>
                <View style={styles.innerBox}>
                    <Text>Box Component 4</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        width: "100%",
        height: '85%',
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    box: {
        width: "50%",
        height: '50%',
        padding: 5,
    },
    innerBox: {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Box