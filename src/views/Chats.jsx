import '../styles/chats.css'
import UserList from '../components/chat-users'
import ChatHeader from '../components/chat-header';
import ChatMessages from '../components/chat-messages';
import ChatFooter from '../components/chat-footer';


export default function Chats() {
  return (
    <div className="chat">
      <header className="chat__header">
        <ChatHeader />
      </header>

      <div className="chat__center">
        <aside className="chat__sidebar">
          <UserList />
        </aside>
        <main className="chat__main">
          <ChatMessages />
        </main>
      </div>

      <footer className="chat__footer">
        <ChatFooter />
      </footer>
    </div>
  );
}
