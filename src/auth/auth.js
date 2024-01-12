export const fakeAuthProvider = {
  isAuthenticated: false,
  username: null,
  signIn: (username, password, callback) => {
    //autentykujemy...
    if (username === "hello" || username === "Bob") {
      setTimeout(() => {
        callback("success");
      }, 100);
      fakeAuthProvider.isAuthenticated = true;
      fakeAuthProvider.username = username;
    } else {
      setTimeout(() => {
        callback("nieprawidłowe dane do logowania");
      }, 100);
    }
  },
  signOut: (callback) => {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
