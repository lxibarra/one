# One Card Game

This is an experimental app made using React+ES6, Webpack & sass. As a backend storage we will be using firebase.

[![Build Status](https://travis-ci.org/lxibarra/one.svg?branch=master)](https://travis-ci.org/lxibarra/one) [![Coverage Status](https://coveralls.io/repos/github/lxibarra/one/badge.svg?branch=master)](https://coveralls.io/github/lxibarra/one?branch=master)

![alt text](http://res.cloudinary.com/www-codervelop-com/image/upload/e_shadow/v1457558998/Screen_Shot_2016-03-09_at_1.16.34_PM_bj68ni.png "One card game")




## Features
Currently it does not do much but this are the features i would like to implement in the future:

1. User registration using github, google, twitter etc.
1. Multigame platform (Host any number of games at the same time)
1. Multiplayer with live updates probably using socket.io
1. SVG all the way, currently the app uses png sprites.

## Installation
1. Create a free firebase account here https://firebase.google.com/
1. Rename src/firebase.keys.sample.js to src/firebase.keys.js
1. Get your application keys from firebase and replace accordingly on firebase.keys.js (Look for add firebase to your webapp on firebase's website)
1. To enable social login, just add/remove buttons from src/pages/login.jsx render method and follow the instructions here https://firebase.google.com/docs/auth/#key_functions under Federated identity `provider integration -> web` for the integrations you want to support. You only need to provide the proper credentials to firebase (no code chage is needed).
1. Install Webpack development server globally `npm install -g webpack-dev-server`
1. Install dependencies `npm install `
1. Run app `npm run start` App should come live on http://localhost:8080/webpack-dev-server/
1. Run tests `npm run test`
