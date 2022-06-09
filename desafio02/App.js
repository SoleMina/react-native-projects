import React, {useState} from "react";
import { Button, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import ListItem from "./src/components/list-item";
import Input from "./src/components/input";
import CustomModal from "./src/components/modal";
import CloseModal from "./src/components/close-modal";
import {styles} from "./styles";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    setText(text);
  }
  const addItem = () => {
    if (text !== "") {
      setList((currentList) => [
        ...currentList,
        { id: Math.random(), value: text },
      ]);
      setText("");
    }
  };

  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = (id) => {
      setItemSelected(list.filter(item => item.id === id)[0]);
      setModalVisible(!modalVisible);
  }

  const renderItem = ({ item }) => (
    <ListItem item={item} onHandlerModal={onHandlerModal}/>
  )

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
       <View style={styles.content}>
        <Input
          placeholder="new task"
          style={styles.input}
          placeholderTextColor="#6B4E71"
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
          keyboardType="numeric"
        />
        <Button title="Add" onPress={() => addItem()}  />
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
      <CustomModal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <CloseModal 
        onHandlerDelete={onHandlerDelete}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
        />
      </CustomModal>
    </View>
  );
}
