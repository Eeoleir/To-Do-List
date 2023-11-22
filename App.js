import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import Header from './src/components/Header';
import Task from './src/components/Task';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [task, setTask] = useState ('');
  const [taskItems, setTaskItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const getExistingText = (index) => {
    setTask(taskItems[index]);
    setEditingIndex(index);
  }

  const updateTask = () => {
    if (taskItems[editingIndex] !== task) {
      let itemsCopy = [...taskItems];
      itemsCopy[editingIndex] = task;
      setTaskItems(itemsCopy);
      setEditingIndex(null);
    } else {
      alert("No changes were made.");
    }
    setTask('');
    
  }




  return (
    // Whole Section
    <SafeAreaView style={styles.wholeContainer}>
      
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {/* Header Section */}
      <View style={styles.headerContainer}>
          <Header/>
      </View>
      <ScrollView>
        {/* List Section */}
        <View style={styles.listContainer}>
          {taskItems.map((item, index) => {
                  return (
                    <View key={index}>
                      <Task text={item} onDelete={() => completeTask(index)} onUpdate={() => getExistingText(index)}/>
                    </View>
                  )
                  
                })}

        </View>
      </ScrollView>
      {/* Entry Section */}
      <View style={styles.footerContainer}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.entryContainer}>
          <TextInput placeholder='Write Task' style = {styles.inputBox} 
          value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity style={[styles.btn, styles.add]} onPress={handleAddTask}>
            <View style = {styles.entryOptions}>
              <Text style={styles.btnText}>Add</Text>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.update]} onPress={updateTask}>
            <View style = {styles.entryOptions}>
              <Text style={styles.btnText}>Update</Text>
            </View> 
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    backgroundColor: '#f0ffff',
    flex: 1,
    flexDirection: 'column'
  },

  headerContainer :{
    height: 80,
    alignItems: 'center',
  },

  listContainer :{
    alignItems:'center',
  },

  footerContainer :{
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(238, 194, 190, 1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  entryContainer:{
    flexDirection: 'row',
    width: '75%',
    justifyContent:'space-between' ,
    
  },

  inputBox:{
    flex:6,
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 10,
    marginRight: 20,
    fontSize: 14
    
  },

  btn:{
    textAlign:'center',
    alignItems:'center',
    width: '10%',
    flex: 2,
    borderRadius: 10,
    marginRight: 10
    
  },
  add:{
    backgroundColor: '#be1558',
  },

  update:{
    backgroundColor: '#e75874',
  },
  entryOptions:{
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'space-between',
    alignItems:'center',
   
  },

  btnText:{
    fontSize: 14,
    color:'white'
  }

});
