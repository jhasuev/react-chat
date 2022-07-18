import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import { Link } from "react-router-dom"
import '../styles/chat-header.css'
import EventEmitter from '../utils/EventEmitter'

export default function ChatHeader() {
  return (
    <div className='chat-header'>
      <CardHeader
        sx={{ p: 0 }}
        avatar={
          <Badge color="success" variant="dot" invisible={!true}>
            <Avatar sx={{ width: 30, height: 30, fontSize: 15 }}>UN</Avatar>
          </Badge>
        }
        title="User Name"
      />

      <div className='chat-header__buttons'>
        <Button
          className="chat-header__buttons-item"
          onClick={() => EventEmitter.$emit('SHOW_SEARCH_USER_POPUP')}
        >Search user</Button>
        <Button
          className="chat-header__buttons-item"
          onClick={() => EventEmitter.$emit('SHOW_PROFILE_POPUP')}
        >Profile</Button>
        <Button className="chat-header__buttons-item">Logout</Button>
      </div>
    </div>
  )
}
