

## General Info ##

This redux / react-native UdaciCards app was bootstrapped via create-react-native-app, and written for the Udacity React Nanodegree

## Installing the App ##

1. Make sure you have the latest versions of Node and Yarn installed
2. Install create-react-native-app
3. Install the Genymotion Android Emulator 
4. Run 'yarn install' from the root of the project
5. Make sure you have the latest android SDK installed for use with Genymotion


## Running the App ##

This app was only tested on the Google Nexus 5X Genymotion Android emulator (Android API 23); so to try the app out, I'd recommend using these specs.

1. Start up Genymotion.
2. Start up the android device emulator.
3. Run 'yarn start'
4. Select the option to start the application on the command line

## Data Storage ##

The quiz data is stored in a redux store; you can find the initial store at 'data/store.js'. The store data is saved in async storage via
the redux persist library.

## Formatting ##

To format the application .js files, run 'yarn format'. 

## Testing ##

The testing platform is Jest. To run the current tests in 'tests/deckReducer.spec.js', use the 'yarn test' command 



