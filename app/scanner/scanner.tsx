import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { CameraView } from "expo-camera/next";
import { Camera } from "expo-camera";

const Scanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [scanned, setScanned] = useState(true);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (res: any) => {
    setScanned(true);
    alert(res.data);
  };

  return (
    <View style={styles.container}>
      {!isCameraOpen && (
        <Button title="OpenCamera" onPress={() => setIsCameraOpen(true)} />
      )}

      {hasCameraPermission && isCameraOpen && (
        <>
          <CameraView
            style={{ height: 400, width: 300 }}
            barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          >
            <View style={styles.scanBoxContainer}>
              <View
                style={styles.scanBox}
              ></View>
            </View>
          </CameraView>
          <View style={{ marginTop: 20 }}>
            <Button title="Scan" onPress={() => setScanned(false)} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              title="Close Camera"
              onPress={() => setIsCameraOpen(false)}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scanBoxContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    zIndex: 0,
  },
  scanBox: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "white",
    width: 200,
    height: 200,
  },
});

export default Scanner;
