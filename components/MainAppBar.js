import {Appbar} from 'react-native-paper';
import React from 'react';
import {getHeaderTitle} from '@react-navigation/elements'
import Settings from '../screens/Settings';

/*export default function MainAppBar(props){
    return(
        <Appbar.Header style={{backgroundColor: props.backgroundColor}}>
            <Appbar.BackAction onPress={()=>{}}/>
            <Appbar.Content title={props.title} />
            <Appbar.Action icon={props.icon} onPress={props.getUserPosition} />
        </Appbar.Header>
    )
}*/

export default function MainAppbar (props){
    const title = getHeaderTitle(props.options, props.route.name)
    console.log(props.navigation)
    return (
        <Appbar.Header style ={{backgroundColor:props.backgroundColor}}>
            {props.back ? <Appbar.BackAction onPress={() => props.navigation.goBack()} /> : null}
            <Appbar.Content title={title} />
            {props.back ? null: <Appbar.Action icon={props.icon} onPress={props.getUserPosition} />}
            {props.back ? null: <Appbar.Action icon='cog' onPress={() => props.navigation.navigate('Settings')}/>}
        </Appbar.Header>
    )
}