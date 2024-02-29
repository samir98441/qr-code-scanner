import React, { useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import { CameraView } from "expo-camera/next";
import { Camera } from "expo-camera";
import { SCANNING } from "../../assets";
// import { View } from "../../common/components";
// x=146.13333129882812
// y=93.5111083984375

const Scanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [scanMore, setScanMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const asideWidth = Number(`${(windowWidth * 23) / 100}`);
  const centerWidth = Number(`${(windowWidth * 54) / 100}`);

  useEffect(() => {
    setWindowWidth(Dimensions.get("window").width);
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (res: any) => {
    console.log("AAAAAAAAAAAA", res);
    if (
      res.boundingBox.origin.y >= asideWidth + 60 &&
      res.boundingBox.origin.y <= asideWidth + 120 &&
      res.boundingBox.origin.x >= 150 &&
      res.boundingBox.origin.x <= 230
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
          style={{
            height: "100%",
            width: windowWidth,
          }}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={scanMore ? handleBarCodeScanned : undefined}
        >
          <View
            style={{
              height: 150,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />

          <View style={{ display: "flex", flexDirection: "row", height: 200 }}>
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                width: Number(asideWidth),
                height: "100%",
              }}
            />
            <View
              style={{
                width: Number(centerWidth),
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderTopWidth: 4,
                  borderLeftWidth: 4,
                  borderColor: "white",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderTopWidth: 4,
                  borderRightWidth: 4,
                  borderColor: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              />
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderBottomWidth: 4,
                  borderLeftWidth: 4,
                  borderColor: "white",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
              />
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderBottomWidth: 4,
                  borderRightWidth: 4,
                  borderColor: "white",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                width: Number(asideWidth),
                height: "100%",
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              height: "100%",
              alignItems: "center",
              paddingTop: 60,
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
});

export default Scanner;
