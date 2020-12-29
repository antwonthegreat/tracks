import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return <SafeAreaView forceInset={{top:'always'}}>
        <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
};

const styles = StyleSheet.create({});

AccountScreen.navigationOptions = {
    title:'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
  }

export default AccountScreen;