import React, { useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import { CameraView } from "expo-camera/next";
import { Camera } from "expo-camera";
import { SCANNING } from "../../assets";
// x=146.13333129882812
// y=93.5111083984375

const Scanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [scanMore, setScanMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    setWindowWidth(Dimensions.get("window").width);
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (res: any) => {
    if (
      res.boundingBox.origin.x >= 110 &&
      res.boundingBox.origin.x <= 180 &&
      res.boundingBox.origin.y >= 105 &&
      res.boundingBox.origin.y <= 170
    ) {
      setScanMore(false);
      Alert.alert("Scanned Details", res.data, [
        {
          text: "Scan More",
          onPress: () => setScanMore(true),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {hasCameraPermission ? (
        <CameraView
          style={{ height: "100%", width: windowWidth }}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={scanMore ? handleBarCodeScanned : undefined}
        >
          <View
            style={{
              ...styles.scanBoxContainer,
              top: -200,
              left: 10,
            }}
          >
            <SCANNING width={250} height={250} backgroundColor="red" />
          </View>
          <View
            style={{
              position: "absolute",
              zIndex: 999,
              top: "50%",
              left: "31%",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
              }}
            >
              Scan QR Code
            </Text>
          </View>
        </CameraView>
      ) : (
        <Text>Please Enable Camera Permission</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  scanBoxContainer: {
    // position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    zIndex: 0,
  },
});

export default Scanner;
