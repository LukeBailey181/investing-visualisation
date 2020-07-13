import React from 'react';
import { Button, StyleSheet, Text, View, ViewBase } from 'react-native';
import styles from "./styles";
import { colors, width, height } from "./styles";
import { HomeScreen, HomeScreenButton, Images } from "./helperUI";
import { color } from 'react-native-reanimated';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import { GLView } from 'expo-gl';


export default function HomePage({ navigation }) {

    return (
        <View style={[styles.container, {width:width, height:height}]}>
            <View style={{flex:4, width: width}}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Text>Home Page</Text>
                </View>
                <Button
                    title="Go to Charts"
                    onPress={() => navigation.navigate("Charts")}
                />
                <Button
                    title="Go to Tree Store Page"
                    onPress={() => navigation.navigate("Tree Store")}
                />
                <Button
                    title="Go to test page"
                    onPress={() => navigation.navigate("Test Page")}
                />
            </View>
            <GLView style={{ flex: 1 }}
                         onContextCreate={onGLContextCreate}/>
            <View style={{ flexDirection:'row', flex: 1, justifyContent:"center", width:width, alignItems:"center"}}>
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <HomeScreenButton
                    image={Images.tree}
                    width={50}
                    height={50}
                    nav={true}
                    borderColor={colors.primaryColor}
                    route="Tree Store"
                    />
                </View>
                <View stlye ={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <HomeScreenButton
                        image={Images.trees}
                        width={50}
                        height={50}
                        nav={true}
                        borderColor={colors.secondaryColor}
                        route={"Forest Page"}
                        />
                    </View>
                </View>
                <View style ={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <HomeScreenButton
                    image={Images.chart}
                    width={40}
                    height={40}
                    nav={true}
                    route={"Charts"}
                    borderColor={colors.tertiaryColor}
                    />
                </View>
            </View>
        </View>
    )
}

const onGLContextCreate = async (gl) => {
  var Colors = {
    cyan: 0x248079,
  	brown: 0xA98F78,
  	brownDark: 0x9A6169,
  	green: 0x65BB61,
    greenLight: 0xABD66A,
    blue:0x6BC6FF
  };

  var scene = new THREE.Scene();
  var h = gl.drawingBufferHeight,
      w = gl.drawingBufferWidth;
  var aspectRatio = w / h,
      fieldOfView = 25,
      nearPlane = .1,
      farPlane = 1000;
  var camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane);
      camera.position.set(-5,6,8);
      camera.lookAt(new THREE.Vector3(0,0,0));
  const renderer = new ExpoTHREE.Renderer({ gl });
      renderer.setSize(w, h);
      renderer.shadowMapEnabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

}
