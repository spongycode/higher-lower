import { ImageBackground, StyleSheet, Text } from 'react-native';
import React from 'react';

const CustomCard = (props: any) => {
  return (
    <ImageBackground source={{
      uri: props.image_url,
    }} imageStyle={{ opacity: 0.6 }} style={styles.container}>
      <Text style={[styles.fullname, styles.shadowText]}>{props.fullname}</Text>
      <Text style={[styles.username, styles.shadowText]}>@{props.username}</Text>
      <Text style={[styles.generalText, styles.shadowText]}>has</Text>
      <Text style={[styles.followers, styles.shadowText]}>
        {props.hideFollowers ? "?" : props.followers}
      </Text>
      <Text style={[styles.generalText, styles.shadowText]}>followers</Text>
    </ImageBackground>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#000",
    flex: 1,
  },
  fullname: {
    marginTop: 40,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  },
  username: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  generalText: {
    fontSize: 20,
    marginTop: 10,
    color: '#fff',
    fontWeight: '400',
  },
  followers: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  shadowText: {
    paddingHorizontal: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 35
  }
});
