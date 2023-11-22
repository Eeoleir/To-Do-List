import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function Task(props) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{props.text}</Text>
      <View style={styles.taskOption}>
        <TouchableOpacity onPress={() => props.onUpdate()}>
            <Text style ={styles.updateBtn}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onDelete()}>
            <Text style ={styles.deleteBtn}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    taskContainer:{
        flexDirection: 'row',
        padding: 20,
        width: '80%',
        backgroundColor: '#e75874',
        borderRadius: 10,
        alignItems:'center',
        marginBottom: '2%'
        
    },
    taskText:{
        flex: 8,
        fontSize: 15,
        marginLeft: 10,
        color: 'black',
        fontWeight: '500'

    },
    taskOption:{
        flexDirection: 'row',
        flex:4,
        justifyContent: 'space-between',
        
    },
    updateBtn:{
        color: 'white',
        marginRight: 10,
        fontSize:12,
        
    },
    deleteBtn:{
        color: '#8b0000',
        fontSize:12,
        
    }
});
