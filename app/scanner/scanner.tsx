import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CameraView } from "expo-camera/next";
import { Camera } from "expo-camera";
import { SCANNING } from "../../assets";

const Scanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (res: any) => {
    alert(res.data);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Welcome to QR Scanner</Text>

      {hasCameraPermission ? (
        <CameraView
          style={{ height: 450, width: 350 }}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={handleBarCodeScanned}
        >
          <View style={styles.scanBoxContainer}>
            <SCANNING width={300} height={300} />
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
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    zIndex: 0,
  },
});

export default Scanner;
