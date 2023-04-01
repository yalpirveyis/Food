import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { useSelector } from "react-redux";

function CustomTabBar({ state, descriptors, navigation }) {
  const imagesList = {
    Home: require("../../assets/Icons/Home.png"),
    Home_Active: require("../../assets/Icons/Home_Active.png"),
    Profile: require("../../assets/Icons/Profile.png"),
    Profile_Active: require("../../assets/Icons/Profile_Active.png"),
    Add: require("../../assets/Icons/Add.png"),
    Add_Active: require("../../assets/Icons/Add_Active.png"),
    Discover: require("../../assets/Icons/Discover.png"),
    Discover_Active: require("../../assets/Icons/Discover_Active.png"),
    Recipe: require("../../assets/Icons/Recipe.png"),
    Recipe_Active: require("../../assets/Icons/Recipe_Active.png"),
  };
  const colors = useSelector((state) => state.theme.colors);
  const tabBarVisibility = useSelector((state) => state.theme.tabBarVisibility);
  const hitSlop = { top: 20, left: 20, bottom: 20, right: 20 };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        height: tabBarVisibility ? 0 : Platform.OS === "ios" ? 80 : 64,
        borderTopWidth: 0.5,
        borderTopColor: colors.lightText,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <View
            key={label}
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 16,
              paddingBottom: 4,
              backgroundColor: colors.foreground,
            }}
          >
            <TouchableOpacity
              hitSlop={hitSlop}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: isFocused
                    ? colors.buttonActive
                    : colors.tabbarPassive,
                }}
                source={
                  isFocused
                    ? imagesList[label + "_Active"] &&
                      imagesList[label + "_Active"]
                    : imagesList[label]
                }
              />
            </TouchableOpacity>
            {isFocused && (
              <Text
                style={{ color: colors.text, fontWeight: "600", fontSize: 12 }}
              >
                {label}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

export default CustomTabBar;
