import { FlatList, View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';

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
    presenteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
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
                <Text style={styles.nameStyle}>{student}</Text>
                <Pressable onPress={() => onPressPresente({student})} style={styles.presenteButton}>
                    <Text style={{/*fontWeight: 'bold',*/ color:'white'}}>Presente</Text>
                </Pressable>
                <Pressable onPress={()=> onPressAusente({student})} style={styles.ausenteButton}>
                    <Text style={{/*fontWeight: 'bold',*/ color:'white'}}>Ausente</Text>
                </Pressable>
            </View>
        </Pressable>
    )
}

const className = "TCC00293 - Engenharia de Software II";

const students = ["Lexie George",
    "Nikolas Fisher",
    "Mayra Jackson",
    "Jewel Watson",
    "Alexandra Finley",
    "Emmalee French",
    "Andres Roth",
    "Bailey Everett",
    "Catalina Chaney",
    "Elisabeth Fuentes",
    "Deven Bishop",
    "Cael Rosario",
    "Christopher Smith Hartmann Fields"]

const ClassPage = () => {

    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <FlatList
                    ListHeaderComponent={<ListHeader className={className} />}
                    data={students}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <StudentCard student={item}/>}
                />
            </View>
        </View>
    );
}

export default ClassPage;