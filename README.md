# Impetus

The purpose of this example app is to research how hard it would be to implement Health Data functionality in an Expo managed workflow.

## Challenge

Most health data connections are not supported by Expo (exception: [Expo Pedometer](https://docs.expo.dev/versions/latest/sdk/pedometer/) allows fetching step count data). To access other data in a React Native project, one would usually implement third party libraries, for example [react-native-health](https://github.com/agencyenterprise/react-native-health) and [react-native-google-fit](https://github.com/StasDoskalenko/react-native-google-fit). These libraries however depend on native code/configuration changes and SDKs, which is historically not supported in an Expo managed workflow.

## Solution Directions

### Eject

Usually, when a project requires native dependencies outside of the Expo ecosystem, the app needs to be "ejected" from Expo. This will basically transform the project from an Expo project to a core React Native project that has Expo and its libraries as dependencies. The ejection takes some time and effort, but the biggest downside is that the project no longer seamlessly integrates with Expo tooling, such as the Expo Go preview app and EAS build tools. Cost of maintenance will increase, because we will to manage the React Native app as a whole, instead of depending on the Expo conventions and updates.

This is not really a solution because it drops the requirement of remaining (as much as possible) within an Expo managed worklflow.

### Development Builds

Expo recently introduced [Development Builds](https://docs.expo.dev/development/introduction/). In short, this adds support for generating your own base app to replace the Expo Go preview app. You can use this base app to preview the app on a real device or simulator during development, allow stake-holders to preview updates to the JS bundle or deploy updates to the appstores. Because it replaces (and extends) the Expo core app, you can add native dependencies that are not available within the Expo core.

In our case, we could simply add the mentioned health data dependencies, create a custom development build and deploy to the app stores with EAS build & submit. The caveat: both libraries depend on native configuration changes. To add those without ejecting, we can use [Expo Plugins](https://docs.expo.dev/guides/config-plugins/). [react-native-health](https://github.com/agencyenterprise/react-native-health) even comes with [such a plugin](https://github.com/agencyenterprise/react-native-health/blob/master/docs/Expo.md) included.

## iOS: Health Kit

Adding Health Kit support is very straightforward. Following the [additional installation instructions](https://github.com/agencyenterprise/react-native-health/blob/master/docs/Expo.md) from react-native-health the Health Kit connection is implemented straightforward and the app can be deployed using EAS as is, as can be seen in this repository.

## Android: Google Fit / Health Connect

Adding Google Fit brings a lot more complexity. The setup is already complicated on a bare React Native app, and all of those steps would need to be indirectly applied to the native configuration of the Expo project via plugins (and possibly modules).

More importantly, Google has recently announced that Google Fit is now deprecated and will not be supported after 2024. Instead, they bring a new service to the table called Health Connect. This successor app should also allow access to Google Fit data and developers are advised to migrate their apps to Health Connect when possible.

Since Health Connect is only a few months old (and technically still in beta) no React Native libraries have been published to implement it. Until it is, the android side of this experiment will be put on hold.
