# firebase-json-server

Roll your own [json-server](https://github.com/typicode/json-server) with Google Firebase

## Requirements
- [Sign up Firebase & create a new project](https://firebase.google.com/)

## Instructions
1. Install nodejs with npm (or yarn)
2. Install [firebase-tools CLI](https://github.com/firebase/firebase-tools) `npm install -g firebase-tools` or `yarn global add firebase-tools`
3. Clone & cd into this repo
4. Login to firebase with CLI `firebase login`
5. Create firebase project `firebase projects:create`, or use existing project `firebase use`
6. `cd functions && yarn install`
7. Change `functions/db.json` to suit your needs
8. cd ..
8. Start local json-server with `firebase serve --only=hosting,functions --project yourappalias`
9. Deploy json-server to firebase cloud hosting with `firebase deploy`
10. Access to url `http://localhost:5000/api/` or `https://yourprojectname.firebaseapp.com/api/`

## Projects
- [typicode/json-server](https://github.com/typicode/json-server)
- [firebase/firebase-tools](https://github.com/firebase/firebase-tools)
