# QR Scanner App

<Add project description>.

## Prerequisite

To build and run the project following cli is necessary

- [Node](https://nodejs.org/en)
- [Android SDK](https://docs.expo.dev/workflow/android-studio-emulator)
- [Xcode](https://docs.expo.dev/workflow/ios-simulator)
- [eas-cli](https://github.com/expo/eas-cli)
- [expo-cli](https://github.com/expo/expo-cli)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
#
# Application credentials
#
APP_VERSION=1.0.0
APP_BUILD_NUMBER=1
APP_VERSION_CODE=1
#
# Expo update credentials
#
UPDATE_URL=<JS Bundle update url (optional)>
UPDATE_TIMEOUT=<JS Bundle Download Cache timeout default 0>
#
# Expo credentials
#
APP_OWNER=<expo project owner name>
PROJECT_ID=<expo project id>
#
# Custom Env starts with EXPO_PUBLIC_
#
EXPO_PUBLIC_*=<custom values>
EXPO_PUBLIC_webAppUrl=<place your web app url>
```

## App configuration

If any configuration was changed on `app.json` or `app.config.js`, following command should be executed

```shell
npx expo prebuild --clean
```

## Build Android/iOS app

Clone the project & go to the project directory
then install dependencies using

```bash
yarn install
```

Build Android/iOS

Application build profile can be defined at eas.json file, currently there is pre-defined build profile i.e `development, dev, production`

```
eas build --profile=[development|dev|production] --local -p [android|ios]
```

To build development client execute following command

```bash
eas build --profile=development --local -p android
```

Note: build profile is configured at eas.json file and contains
`development` `dev` `production`
You can use different `APP_PACKAGE` on .env for different build profile to maintain separate app instance on Android/iOS

## Run Locally

```bash
yarn start
```

or start with clearing the metro cache

```bash
expo start -c
```

or start with specified port i.e 61005 and clearing cache

```bash
expo start --port 61005 -c
```

and after that

Scan the QR Code on terminal from `expo go | development client` app or camera app

## Run Locally Offline

```bash
npx expo start --offline
```

or start with clearing the metro cache

```bash
npx expo start --offline -c
```

or start with specified port i.e 61005 and clearing cache

```bash
npx expo start --offline --port 61005 -c
```

and after that

Scan the QR Code on terminal from `expo go | development client` app or camera app

## Running Tests

To run tests, run the following command

```bash
yarn test
```

## Sync `.env` to expo server

Whenever `.env` file changes, run following command in project directory

```shell
eas secret:push --scope project --env-file .env
```

```bash
yarn test
```

## Tech Stack

- [react-native](https://reactnative.dev/)
- [expo](https://docs.expo.dev)
- [redux](https://redux.js.org/)
- [expo-router](https://expo.github.io/router/)
- [@shopify/restyle](https://github.com/Shopify/restyle)
- [axios](https://github.com/axios/axios)
- [moment](https://github.com/moment/moment)
- [yup](https://github.com/jquense/yup)
- [formik](https://github.com/jaredpalmer/formik)

## Useful Links

- [React Native SVG Playground](https://react-svgr.com/playground/)
- [Expo Vector Icons](https://icons.expo.fyi/)

## Authors

- [sameer98441 <sameer@inspiringlab.com.np>](https://github.com/samir98441/qr-code-scanner)
