import React, {useState,useEffect} from 'react';
import { Audio } from "expo-av";
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

const defaultSound = [
    require('../../assets/DefaultAudio/cymbal.wav'),
    require('../../assets/DefaultAudio/daibyoshi.wav'),
    require('../../assets/DefaultAudio/med_taiko.wav'),
    require('../../assets/DefaultAudio/miyadaiko.wav'),
    require('../../assets/DefaultAudio/taiko.wav'),
    require('../../assets/DefaultAudio/tsuzumi.wav'),

];

const SamplerComponent = ({navigation}) =>{

	const generateGrid = () =>{
		const pads = [];
        let id = 0;
		for(let i=0;i<defaultSound.length;i++){ 
			for(let j=0;j<defaultSound.length;j++){
				pads.push({index:j,id:id});
                id++;
			}
			
		}
		
		return pads;
	}

   
    const [sound, setSound] = useState();
    const [grid, setGrid] = useState(generateGrid());
  
    const playSound = async (index) => {
        const { sound } = await Audio.Sound.createAsync(defaultSound[index]);
        setSound(sound);
        await sound.playAsync();
        console.log(defaultSound);
    };
    
    const handleLongPress = (item) =>{
        navigation.navigate("Edit sampler",{props: item})
    }

    
    useEffect(() => {
       
        return () => {
          if (sound) {
            sound.unloadAsync();
          }
        };
    }, [sound]);

    return(
        <View style={styles.container}>
            <FlatList 
                data={grid}
                numColumns={defaultSound.length}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={()=>{playSound(item.index)}}
                        onLongPress={()=>handleLongPress(item)}
                    >

                    </TouchableOpacity>
                }
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        //alignContent:'center',
        marginTop:15
    },
    button:{
        width:50,
        height:50,
        padding:50,
        margin:2,
        backgroundColor:'tomato'  
    }
  });

export default SamplerComponent;