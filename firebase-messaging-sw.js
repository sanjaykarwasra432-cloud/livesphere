importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js');

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
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon
    }
  );
});
