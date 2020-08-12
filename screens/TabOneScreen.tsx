import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';

export default function TabOneScreen() {
    return (
        <View style={styles.container}> <ScrollView>
            <Text style={styles.title}>Tab One is herer</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
            <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
            <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
            <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
            <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
