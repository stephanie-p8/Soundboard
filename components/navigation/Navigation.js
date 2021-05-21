import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SamplerComponent from '../sampler/samplerComponent';
import SamplerEdition from '../sampler/samplerEdition';
import SamplerTrim from '../sampler/samplerTrim';

const Stack = createStackNavigator();

const SamplerEditionNavigation = () =>{

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
          }}
          >
            <Stack.Screen 
                name="Sampler" 
                component={SamplerComponent} 
            />
            <Stack.Screen 
                name="Edit sampler" 
                component={SamplerEdition} 
                initialParams={{id:'no id'}}
            />
            <Stack.Screen 
                name="SamplerTrim" 
                component={SamplerTrim} 
                initialParams={{id:'no id'}}
            />
        </Stack.Navigator>
    )

}

export default SamplerEditionNavigation;