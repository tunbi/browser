# browser project

## Prerequisite [setup the React Native development environment with Expo]
🍕🍕🍕 please read about Expo [https://docs.expo.dev/introduction/faq/](https://docs.expo.dev/introduction/faq/)

#### Node & Watchman

```
brew install node@16
brew install watchman
```

#### Xcode

Make sure your Xcode version 13.

#### CocoaPods

```
sudo gem install cocoapods
```

#### Yarn, Expo-cli, Eas-cli

```
npm install -g yarn expo-cli eas-cli
```

## Installation

Clone the browser repository and run
```
expo install
```


## Run on simulator

```
yarn ios or yarn android
```
## Run on device

```
expo prebuild
```
Open xcode project
```
open ios -> xcworkspace file -> press Cmd R
```

## Run on android simulator or android device

```
yarn android
```