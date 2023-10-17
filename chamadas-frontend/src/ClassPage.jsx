import { FlatList, View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { useParams } from 'react-router-native';

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
    porcentageStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic',
        color: 'gray',
    },
    classHeaderStyle: {
        marginTop: 20,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        //fontWeight: 'bold',
        fontSize: 17
    },
    dateHeaderStyle: {
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //fontWeight: 'bold'
    },
    presenteDarButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        width: 65,
        height: 25,
        borderRadius: 5,
    },
    presencaDadaButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: 65,
        height: 25,
        borderRadius: 5,
    },
    ausenteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 65,
        height: 25,
        borderRadius: 5,
        marginRight: 5
    }
})

const getCurrentDate = () => {
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '/' + month + '/' + year;//format: d-m-y;
}

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ({ className }) => {
    return (
        <View>
            <Text style={styles.classHeaderStyle}>{className}</Text>
            <Text style={styles.dateHeaderStyle}>{getCurrentDate()}</Text>
        </View>
    )
}

const onPressCard = ({ student }) => {
    console.log(JSON.stringify({student}));
}

const onPressPresente=({ student }) => {
    console.log(JSON.stringify({student})+' Presente');
}


const onPressAusente=({ student }) => {
    console.log(JSON.stringify({student})+' Ausente');
}

const StudentCard = ({ student }) => {
    return (

        <Pressable onPress={() => onPressCard({student})}>
            <View style={styles.flexCard}>
                <Text style={styles.nameStyle}>{student.nome}</Text>
                <Pressable onPress={() => onPressPresente({student})} style={student.presencaDada==="não" ? styles.presenteDarButton : styles.presencaDadaButton}>
                    <Text style={{/*fontWeight: 'bold',*/ color:'white'}}>Presente</Text>
                </Pressable>
                <Pressable onPress={()=> onPressAusente({student})} style={styles.ausenteButton}>
                    <Text style={{/*fontWeight: 'bold',*/ color:'white'}}>Ausente</Text>
                </Pressable>
                <Text style={styles.porcentageStyle}>{student.porcentagem}</Text>
            </View>
        </Pressable>
    )
}

const students = [{nome: "Lexie George", presencaDada: "sim", porcentagem: "X%"},
    {nome: "Nikolas Fisher", presencaDada: "não", porcentagem: "X%"},
    {nome: "Mayra Jackson", presencaDada: "sim", porcentagem: "X%"},
    {nome: "Jewel Watson", presencaDada: "não", porcentagem: "X%"},
    {nome: "Alexandra Finley", presencaDada: "sim", porcentagem: "X%"},
    {nome: "Emmalee French", presencaDada: "não", porcentagem: "X%"},
    {nome: "Andres Roth", presencaDada: "sim", porcentagem: "X%"},
    {nome: "Bailey Everett", presencaDada: "não", porcentagem: "X%"},
    {nome: "Catalina Chaney", presencaDada: "sim", porcentagem: "X%"},
    {nome: "Elisabeth Fuentes", presencaDada: "não", porcentagem: "X%"},
    {nome: "Deven Bishop", presencaDada: "sim", porcentagem: "X%"},
    {nome: "Cael Rosario", presencaDada: "não", porcentagem: "X%"},
    {nome: "Christopher Smith Hartmann Fields", presencaDada: "sim", porcentagem: "X%"}]

const ClassPage = () => {

    const id = useParams().id;
    const turmaHeader = id.split("-")[0] + " - " + id.split("-")[1]

    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <FlatList
                    ListHeaderComponent={<ListHeader className={turmaHeader} />}
                    data={students}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <StudentCard student={item}/>}
                />
            </View>
        </View>
    );
}

export default ClassPage;