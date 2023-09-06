import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, { key: String(list.length), text: input }]);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Product'
        onChangeText={text => setInput(text)}
        value={input}>
      </TextInput>

      <View style={styles.operators}>
        <View>
          <TouchableOpacity style={styles.add} title='Add' onPress={add}>
            <Text style={styles.text}>Add</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.clear} title='Clear' onPress={() => setList([])}>
            <Text style={styles.text}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.list}>
        <FlatList
          ListHeaderComponent={() => <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}> SHOPPING LIST </Text>}
          data={list}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}> {item.text} </Text>}
        ></FlatList>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'wheat'
  },
  input: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: '700',
    width: '50%',
    height: '10%',
    borderColor: 'black',
    borderWidth: 3,
    textAlign: 'center',
    backgroundColor: 'gold'
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    width: '70%',
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'seagreen',
    marginLeft: 33,
    borderRadius: 40

  },
  clear: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    width: '70%',
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'tomato',
    marginLeft: 33,
    borderRadius: 40
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  list: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 20,
    marginBottom: 10
  },
  operators: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  }
});