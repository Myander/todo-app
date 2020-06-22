// getUserToken = async function() {
//   const token = await firebase.auth().currentUser.getIdToken(true);
//   console.log('token', token);
//   localStorage.setItem('token', token);
// };

// componentDidMount() {
//   this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       this.getUserToken();
//       //console.log('Logged in', user);
//       this.interval = setInterval(this.getUserToken, 2700000);
//       client.writeData({
//         data: { isLoggedIn: true },
//       });
//     } else {
//       //console.log('Logged out');
//       clearInterval(this.interval);
//       client.cache.writeData({
//         data: {
//           isLoggedIn: false,
//           location: [],
//         },
//       });
//       localStorage.clear();
//     }
//   });

// sign in

// firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         if (errorCode === 'auth/wrong-password') {
//           alert('Wrong password.');
//         } else {
//           alert(errorMessage);
//         }
//         console.log(error);
//       });
