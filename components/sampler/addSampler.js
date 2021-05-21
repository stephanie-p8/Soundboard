import React,{useState} from "react";
import {StyleSheet,Text,TextInput,View} from "react-native";

const AddSampler = () =>{
    const [input, setInput] = useState("");
    return(
        <View>
            <Text style={styles.header}>Search new audio</Text>
            <TextInput
                style = {styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Search sampler to add"
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      backgroundColor: "tomato",
      color: "white",
      padding: 10,
    },
    input:{
      borderWidth:1,
      padding:3
    }
  });

  export default AddSampler;