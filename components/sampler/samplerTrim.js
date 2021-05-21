import React, {useState,useEffect} from 'react';
import { View,Text,StyleSheet, Button,TouchableOpacity } from 'react-native'
import Trimmer from 'react-native-trimmer';

const SamplerTrim = ({route}) =>{

    const {props} = route.params;
    const scrubInterval = 50;
    const [trimmerLeftHandlePosition,setTrimmerLeftHandlePosition] = useState(0);
    const [trimmerRightHandlePosition,setTrimmerRightHandlePosition] = useState(1);
    const [isPlaying,setIsPlaying] = useState(false);
    const [scrubberPosition,setScrubberPosition] = useState(5);

    const handleChange = ({leftPosition,rightPosition}) =>{
        setTrimmerLeftHandlePosition(leftPosition);
        setTrimmerRightHandlePosition(rightPosition);
    }

    const playScrubber = () => {
        setIsPlaying(true);
    }

    const pauseScrubber = () => {
        setIsPlaying(false);
        setScrubberPosition(trimmerLeftHandlePosition);
    }

    const onScrubbingComplete = (newValue) =>{
        setIsPlaying(false);
        setScrubberPosition(newValue);
    }

    useEffect(() => {
        let scrubberInterval = setInterval(() => {
            setScrubberPosition(scrubberPosition+scrubInterval);
        },scrubInterval)
        return () => {
            clearInterval(scrubberInterval);
        }
    }, [scrubberPosition])
    
    return(
        <View style={{flex:1}}>
            <Text style={styles.header}>Rogner le sample {props.id} à la durée désirée</Text>
            <View>
                {
                    isPlaying 
                    ? <View style={styles.buttonContainer}><TouchableOpacity style={styles.button} onPress={pauseScrubber}><Text style={styles.buttonLabel}>Pause</Text></TouchableOpacity></View>
                    : <View style={styles.buttonContainer}><TouchableOpacity style={styles.button} onPress={playScrubber}><Text style={styles.buttonLabel}>Play</Text></TouchableOpacity></View>
                }
                <Trimmer  
                    onHandleChange={handleChange}
                    totalDuration={5}
                    trimmerLeftHandlePosition={trimmerLeftHandlePosition}
                    trimmerRightHandlePosition={trimmerRightHandlePosition}
                    scaleInOnInit={true}
                    tintColor="tomato"
                    markerColor="#5a3d5c"
                    //trackBackgroundColor="#382039"
                    trackBorderColor="#5a3d5c"
                    scrubberColor="#b7e778"
                    scrubberPosition={scrubberPosition}
                    onScrubbingComplete={onScrubbingComplete}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      backgroundColor: "tomato",
      color: "white",
      padding: 10,
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        margin:10
    },
    button:{
        backgroundColor:'tomato',
        width:95,
        height:55,
        padding:10,
        borderRadius:5
        
    },
    buttonLabel:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'


    }
  });

export default SamplerTrim;