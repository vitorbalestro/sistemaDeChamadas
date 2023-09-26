import { FlatList, View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { useNavigate } from 'react-router-native';

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
        borderColor: 'grey',
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
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        //fontWeight: 'bold',
        fontSize: 17
    },
    dateHeaderStyle: {
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //fontWeight: 'bold'
    }
})

const turmas = ["TCC00284 - Algoritmos em Grafos", 
                "TCC00293 - Engenharia de Software II",
                "TCC00348 - Estruturas de Dados e seus Algoritmos"]



const onPressCard = ({ turma, navigate }) => {
    navigate("/turma");
}
const TurmaCard = ({ turma, navigate }) => {
    return (
        <Pressable onPress={() => onPressCard({ turma, navigate })}>
            <View style={styles.flexCard}>
                <Text style={styles.nameStyle}>{turma}</Text>
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
            <Text style={styles.dateHeaderStyle}>{getCurrentDate()}</Text>
        </View>
    )
}

const TurmasPage = () => {
    const navigate = useNavigate();

    return ( 
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <FlatList
                    ListHeaderComponent={<TurmasHeader />}
                    data={turmas}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <TurmaCard turma={item} navigate={navigate}/>}
                />
            </View>
        </View>
    );

}

export default TurmasPage;