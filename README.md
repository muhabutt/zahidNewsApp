# NewsApp

React-native 0.61 app. free news api. I asusume that you have already installed node, npm, react-native latest, and android studio.

I have used to get latest news from [Newsapi.org](https://newsapi.org/docs/get-started) News free api. It is free and response is json object

# NOTE

(Note: Free api is http you will get an error on the release apk , because andoird by default does not support http, so you need to add the following line insdie AndroidManifest.xml file in the application tag)

```
<manifest
.......
    xmlns:tools="http://schemas.android.com/tools">

<application
....
 android:usesCleartextTraffic="true" tools:targetApi="m">

```

[Android app bundle explanation](https://www.youtube.com/watch?v=9D63S4ZRBls&t=11s)

You can create apk or abb bundle. I have followed react-native publishing documentation to publish the app tp google store, and pushed aab file which is a bundle. [How to publish react-native app to google store](https://reactnative.dev/docs/signed-apk-android)

#Steps

1. git clone the repository
2. npm install or yarn install from the root directory
3. Create a file in src/jsonFiles/Contansts.In this file you can define your constants, or secrect information, think about this file as .env file.
4. You need gradle.properties file with release apk keystore

```js
const Constants = {
  images: {
    logo: require('../../assets/images/logo.png'),
  },
  apiKey: 'PUT HERE YOUR NEWSAPI KEY',
  url: 'http://newsapi.org/v2/',
}

export default Constants
```

4. In order to run app on android device for debugging type following command in your root folder

```sh
npx react-native run-android
```
