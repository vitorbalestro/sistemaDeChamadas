import { Text, StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    appBarText: {
        color: "white",
        fontWeight: 700
    },
    container: {
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap:10
    },
    appBar: {
        backgroundColor: 'blue',
        paddingLeft:5
    },
})

const AppBarTab = ({ title }) => {
    return <View>
        <Text style={styles.appBarText}>{title}</Text>
    </View>
}
const appBarStyles = [ styles.container, styles.appBar ];

const SignedInAppBar = () => {
    return (
        <View style={appBarStyles}> 
            <ScrollView  contentContainerStyle={{ gap: 15 }} horizontal>
                <AppBarTab title="Início" />
                <AppBarTab title="Minhas Turmas" />
                <AppBarTab title="Sair"/>
            </ScrollView>
        </View>
    )
};



const AppBar = () => {

    return <SignedInAppBar />
};


export default AppBar;