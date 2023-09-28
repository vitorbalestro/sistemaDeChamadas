import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react'
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
    },
    saveAreaViewContainer: {
        flex: 1, 
        backgroundColor: '#FFF'
    },
    viewContainer: {
        flex: 1, 
        backgroundColor: '#FFF'
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
    },
    divider: {
        width: 12
    },
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
                <AppBarTab title="Aluno" route="/turmas/aluno" />
                <AppBarTab title="Professor" route="/turmas/professor" />
                <AppBarTab title="Sair" route="/login"/>
            </ScrollView>
        </View>
    )
};



const AppBar = () => {


    return <SignedInAppBar  />
};


export default AppBar;