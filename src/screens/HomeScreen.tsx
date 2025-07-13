import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import FeedDetails from '../screens/FeedDetailsScreen';

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToFeedDetails = () => {
    navigation.dispatch(
      StackActions.push('ScreenStack', {
        screen: 'Screen',
        params: {
          component: FeedDetails,
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeds</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToFeedDetails}>
        <Text style={styles.buttonText}>Go to Feed Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
