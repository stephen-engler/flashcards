# Flash Cards
A Native iOS application powered by React Native.
Currently in development.

## Description
The user can create a deck of flash cards and add cards to the deck.  The user can then study with the deck by tapping the card to see the answer and swipping to see the next card.  The user can also edit and delete cards when necessary.  All data is stored on a server.  UI inspired by the Apple Developer guidelines.  

## Images
Home Screen
![Home Screen](/images/deckScreen.png)

Decks
![Deck Screen](/images/cards.png)

## Tech Used
* React.js
* React Native
* Redux
* Redux-Saga
* Axios
* Native Base
* React Router Redux
* React Router Native
* Node
* Express
* PostrgreSQL

## To Do
- [ ] Add loading spinners anytime a request is made.
- [ ] Animation when the card is tapped.
- [ ] Submit to the app store.

## Considering To Do
* Move all storage to the local device using Redux-Persist.

## Running the app in a simulator
To run this app you must have Xcode and an iOS simulator installed on your computer.
First you must install dependencies.
```
npm install
```
Once the installation is complete.
```
react-native run-ios
```

