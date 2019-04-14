import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';


const Loader = props => {
  const {
    loading,
    error,
    ...attributes
  } = props;

  return (
        <View style={styles.modalBackground}>
          {/* <View style={styles.activityIndicatorWrapper}> */}
            <ActivityIndicator
              size="large"
              color='#2B79C9'
              animating={true} />
          {/* </View> */}
        </View>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#FFFF'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;