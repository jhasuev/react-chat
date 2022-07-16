import '../styles/chats.css'
import UserList from '../components/chat-users'
import ChatHeader from '../components/chat-header';
import ChatMessages from '../components/chat-messages';
import ChatFooter from '../components/chat-footer';


export default function Chats() {
  return (
    <div className="chat">
      <header className="chat-header">
        <ChatHeader />
      </header>

      <div className="chat-center">
        <aside className="chat-sidebar">
          <UserList />
        </aside>
        <main className="chat-main">
          <ChatMessages />
        </main>
      </div>

      <footer className="chat-footer">
        <ChatFooter />
      </footer>
    </div>
  );
}
