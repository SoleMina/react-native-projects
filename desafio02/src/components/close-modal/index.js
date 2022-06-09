import React from "react";
import {TouchableOpacity, View, Text, Button} from "react-native";
import {styles} from "../../../styles";

const CloseModal = ({onHandlerDelete, modalVisible, setModalVisible, itemSelected}) => {
    return (
        <TouchableOpacity
          style={styles.modalContent}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Delete Item</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalText}>Are you sure?</Text>
          <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          <Button
            title="Okay"
            onPress={() => onHandlerDelete(itemSelected.id)}
            color="#6B4E71"
          />
        </TouchableOpacity>
    )
}

export default CloseModal;
