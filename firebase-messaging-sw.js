importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBdrls-3ELC3Z2oR3EoAXaR3nZp0CEApsM",
  authDomain: "livesphere-3bb80.firebaseapp.com",
  projectId: "livesphere-3bb80",
  storageBucket: "livesphere-3bb80.firebasestorage.app",
  messagingSenderId: "808784573001",
  appId: "1:808784573001:web:dfda2b7b4cb7fa2f3d4598"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  console.log(
    '[firebase-messaging-sw.js] Background Message ',
    payload
  );

  const notificationTitle =
    payload.notification?.title || 'LiveSphere';

  const notificationOptions = {
    body:
      payload.notification?.body ||
      'New update available',
    icon: '/icon-192.png'
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );

});
