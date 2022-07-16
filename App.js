import React, { useRef, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const webViewRef = useRef();

  //Handle onRefresh function to refresh Webview
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    webViewRef.current.reload(); // Reload webview
    setRefreshing(false);
  }, [refreshing]);

  return (
    <ScrollView
      style={styles.ScrollStyle}
      contentContainerStyle={{ flex: 1 }}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={onRefresh} // exl in function : webview reload when refresh RefreshControl;
        />
      }
    >
      <WebView
        ref={webViewRef}
        style={styles.container}
        source={{ uri: "https://google.com" }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
