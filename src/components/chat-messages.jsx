import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import Edit from '@mui/icons-material/Edit'
import '../styles/messages.css'


export default function ChatMessages() {
  return (
    <div className='messages-wrapper'>
      <div className="messages__chat-info">
        <div>Будь в сети завтра в 12:27 по МСК</div>
        
        <IconButton type="button" sx={{ p: '10px' }}>
          <Edit fontSize="small" />
        </IconButton>
      </div>
      <div className='messages'>
        <div className='messages__list'>
          <Card
            elevation={0}
            sx={{ mt: 2, color: '#aaa', fontSize: 14 }}
            className={
              'messages__list-item messages__list-item--time'
            }
          >12.12.2022</Card>

          {Array(11).fill().map((_,i) => (
            <Card
              key={i}
              sx={{ mt: 2, maxWidth: '80%', p: 1 }}
              className={
                'messages__list-item ' + (i % 3 === 0 ? 'messages__list-item--me':'')
              }
            >
              <Typography gutterBottom variant="body2">
                Привет! Как дела?
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{textAlign: 'right'}}
              >
                12:27
              </Typography>

            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
