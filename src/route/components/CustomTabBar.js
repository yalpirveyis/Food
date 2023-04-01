import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
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

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // const source = require(`../../assets/Icons/${route.name}.png`);
        console.log("options.tabBarLabel", route);
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
            style={{
              flex: 1,
              alignItems: "center",
              padding: 16,
              backgroundColor: colors.foreground,
            }}
          >
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
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
          </View>
        );
      })}
    </View>
  );
}

export default CustomTabBar;
