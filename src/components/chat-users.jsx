import '../styles/chat-users.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

export default function UserList() {
  return (
    <div className="chat-users">
      <Card
        elevation={1}
        sx={{bgcolor: '#ddd'}}
        className="chat-users__item"
      >
        <CardHeader
          avatar={
            <Badge badgeContent={27} color="success">
              <Avatar>UN</Avatar>
            </Badge>
          }
          title="User Name"
        />
      </Card>
      {Array(22).fill().map((_,i) => (
        <Card
          key={i}
          elevation={0}
          className="chat-users__item"
        >
          <CardHeader
            avatar={
              <Badge badgeContent={i} color="success">
                <Avatar>UN</Avatar>
              </Badge>
            }
            title="User Name"
          />
        </Card>
      ))}
    </div>
  )
}
