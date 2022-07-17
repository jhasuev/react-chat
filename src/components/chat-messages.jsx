import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import '../styles/messages.css'


export default function ChatMessages() {
  return (
    <div className='messages messages--no-messages'>
      <Card
        elevation={0}
        sx={{ mt: 2, color: '#aaa', fontSize: 14 }}
        className={
          'messages__item messages__item--time'
        }
      >12.12.2022</Card>

      {Array(31).fill().map((_,i) => (
        <Card
          key={i}
          sx={{ mt: 2, maxWidth: '80%', p: 1 }}
          className={
            'messages__item ' + (i % 3 === 0 ? 'messages__item--me':'')
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
  )
}
