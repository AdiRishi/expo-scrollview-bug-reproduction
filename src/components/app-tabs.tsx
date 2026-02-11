import { NativeTabs } from "expo-router/unstable-native-tabs";

export function AppTabs() {
  return (
    <NativeTabs
      backgroundColor={"#ffffff"}
      indicatorColor={"#ffffff"}
      labelStyle={{
        default: { color: "#000000" },
        selected: { color: "#000000" },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="magnifyingglass" md="explore" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
