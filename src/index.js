import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'
import SearchUserPopup from './components/popups/search-user-popup'
import ChatInfoPopup from './components/popups/chat-info-popup';
import ProfilePopup from './components/popups/profile-popup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchUserPopup />
    <ChatInfoPopup />
    <ProfilePopup />
    <App />
  </React.StrictMode>
);
