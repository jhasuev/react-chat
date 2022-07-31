import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store/'
import App from './App';
import './styles/main.css'
import SearchUserPopup from './components/popups/search-user-popup'
import ChatInfoPopup from './components/popups/chat-info-popup';
import ProfilePopup from './components/popups/profile-popup';
import MySnackbar from './components/my-snackbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SearchUserPopup />
    <ChatInfoPopup />
    <ProfilePopup />
    <MySnackbar />
    <App />
  </Provider>
);
