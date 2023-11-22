import { View, Text, StyleSheet,SafeAreaView } from 'react-native'

export default function Header() {
  return (
    <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}>
        To Do App
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({  
    headerContainer:{
        width: '100%',
        height: '80%',
        backgroundColor: '#EEC2BE',
        justifyContent: 'center',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
    },
    headerText:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8b0000'
    }
});