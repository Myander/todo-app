# todo-app

## Built using React, Typescript, Redux, and styled-components

This app uses [firebase](https://firebase.google.com/ "Firebase's Homepage")

To run this app follow the steps on the firebase website to make a new project
and select cloud firestore for the database. The database rules used for this project
are posted below. To connect the app to firebase make a file in the *src* folder named
*firebase.ts*. Replace the api key and project id with the ones from your firebase project.

#### **`firebase.ts`**
``` js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'localhost',
  projectId: 'YOUR_PROJED_ID',
});

export default firebase;
```

#### Rules used in the cloud firestore database
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{todo} {
      allow read, update, delete, create: if request.auth != null;
    }
    match /settings/{document=**} {
      allow read, update, create: if request.auth != null;
    }
  }
}
```
