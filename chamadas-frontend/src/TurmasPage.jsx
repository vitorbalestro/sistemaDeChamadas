import { FlatList, View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
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
        //fontWeight: 'bold',
        fontSize: 17
    },
    dateStyle: {
        paddingRight: 5,
        marginTop: 5,
        textAlign: "right"
        //fontWeight: 'bold'
    },
    roleStyle: {
        paddingLeft: 5,
        marginTop: 5
    }
})

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
]


const onPressCard = ({ turma, navigate, role }) => {
    if(role === 'professor'){
        const turmaUrl = `/turma/${turma.name}`
        navigate(turmaUrl);
    }
    if(role === 'aluno'){
        const alunoTurmaUrl = `/aluno/${turma.name}`
        navigate(alunoTurmaUrl)
    }
}
const TurmaCard = ({ turma, navigate, role }) => {
    const turmaHeader = turma.name.split("-")[0] + " - " + turma.name.split("-")[1]
    return (
        <Pressable onPress={() => onPressCard({ turma, navigate, role })}>
            <View style={styles.flexCard}>
                <Text style={styles.nameStyle}>{turmaHeader}</Text>
            </View>
        </Pressable>
    )
}
const getCurrentDate = () => {
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '/' + month + '/' + year;//format: d-m-y;
}

const ItemSeparator = () => <View style={styles.separator} />;

const TurmasHeader = () => {
    return (
        <View>
            <Text style={styles.turmasHeaderStyle}>Minhas turmas</Text>
        </View>
    )
}

const TurmasPage = () => {
    const navigate = useNavigate();
    const role = useParams().role;
    const roleHeader = role.charAt(0).toUpperCase() + role.slice(1)
    return ( 
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={styles.roleStyle}>{roleHeader}</Text>
                <Text style={styles.dateStyle}>{getCurrentDate()}</Text>
            </View>
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <FlatList
                    ListHeaderComponent={<TurmasHeader />}
                    data={turmas}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <TurmaCard role={role} turma={item} navigate={navigate}/>}
                />
            </View>
        </View>
    );

}

export default TurmasPage;