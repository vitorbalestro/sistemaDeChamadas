import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
    appBarText: {
        color: "white",
        //fontWeight: 700
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
    }
})

const AppBarTab = ({ title, route }) => {
    return (
    <Link to={route}>
            <Text style={styles.appBarText}>{title}</Text>
    </Link>
    )
}
const appBarStyles = [ styles.container, styles.appBar ];

const SignedInAppBar = () => {
    return (
        <View style={appBarStyles}> 
            <ScrollView  contentContainerStyle={{ gap: 15 }} horizontal>
                <AppBarTab title="Login" route="/login" />
                <AppBarTab title="Aluno" route="/aluno" />
                <AppBarTab title="Professor" route="/turmas" />
                <AppBarTab title="Sair" route="/"/>
            </ScrollView>
        </View>
    )
};



const AppBar = () => {

    return <SignedInAppBar />
};


export default AppBar;