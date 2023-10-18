import React from 'react';
import { View, Text, Pressable, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useNavigate, useParams } from 'react-router-native';

const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
    separator: {
        marginVertical: 5,
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 20,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
    nameStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 13,
    },
    turmasHeaderStyle: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
    },
    dateStyle: {
        paddingRight: 5,
        marginTop: 5,
        textAlign: 'right',
    },
    roleStyle: {
        paddingLeft: 5,
        marginTop: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: windowWidth - 20,
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPresenca: {
        backgroundColor: '#836FFF', // Roxo claro
    },
    buttonHistorico: {
        backgroundColor: '#00FF7F', // Verde claro
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

const turmas = [
    {
        name: "TCC00284 - Algoritmos em Grafos",
        professor: "Fábio Protti",
        time: "11:00 às 13:00"
    },
    {
        name: "TCC00293 - Engenharia de Software II",
        professor: "Leonardo Murta",
        time: "7:00 às 9:00"
    },
    {
        name: "TCC00384 - Estruturas de Dados e seus Algoritmos",
        professor: "Isabel Rosseti",
        time: "11:00 às 13:00"
    },
];

const onPressButton = (action, turma, navigate, role) => {
    if (role === 'aluno') {
        alert(`Ação: ${action} - Turma: ${turma.name}`);
    }
    if (role === 'professor') {
        if (action === 'Presença') {
            const turmaUrl = `/turma/${encodeURIComponent(turma.name)}`;
            navigate(turmaUrl);
        } else {
            navigate(`/classpage/${encodeURIComponent(turma.name)}`);
        }
    }
};



const TurmaCard = ({ turma, navigate, role }) => {
    const turmaHeader = turma.name.split('-')[0] + ' - ' + turma.name.split('-')[1];

    return (
        <View>
            <Pressable onPress={() => onPressButton('Turma', turma, navigate, role)}>
                <View style={styles.flexCard}>
                    <Text style={styles.nameStyle}>{turmaHeader}</Text>
                </View>
            </Pressable>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.button, styles.buttonPresenca]}
                    onPress={() => onPressButton('Presença', turma, navigate, role)}
                >
                    <Text style={styles.buttonText}>Presença</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonHistorico]}
                    onPress={() => onPressButton('Histórico', turma, navigate, role)}
                >
                    <Text style={styles.buttonText}>Histórico</Text>
                </Pressable>
            </View>
        </View>
    );
};



const getCurrentDate = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    return date + '/' + month + '/' + year;
};

const ItemSeparator = () => <View style={styles.separator} />;

const TurmasHeader = () => {
    return (
        <View>
            <Text style={styles.turmasHeaderStyle}>Minhas turmas</Text>
        </View>
    );
};

const TurmasPage = () => {
    const navigate = useNavigate();
    const role = useParams().role;
    const roleHeader = role.charAt(0).toUpperCase() + role.slice(1);
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.roleStyle}>{roleHeader}</Text>
                <Text style={styles.dateStyle}>{getCurrentDate()}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    ListHeaderComponent={<TurmasHeader />}
                    data={turmas}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <TurmaCard role={role} turma={item} navigate={navigate} />}
                />
            </View>
        </View>
    );
};

export default TurmasPage;
