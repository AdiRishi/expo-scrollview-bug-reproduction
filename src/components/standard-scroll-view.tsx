import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function StandardScrollView({
  children,
  style,
  ...props
}: ScrollViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
        style,
      ]}
      contentInsetAdjustmentBehavior="never"
      automaticallyAdjustContentInsets={false}
      {...props}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
