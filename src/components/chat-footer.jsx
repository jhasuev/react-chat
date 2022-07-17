import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Send from '@mui/icons-material/Send'

export default function ChatFooter() {
  const onMessageSend = () => {
    console.log('message send...')
  }

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <InputBase
        onKeyDown={e => e.keyCode === 13 && e.ctrlKey && onMessageSend()}
        multiline
        maxRows={3}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Message"
      />
      <Divider sx={{  m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} onClick={onMessageSend.bind()}>
        <Send fontSize="large" />
      </IconButton>
    </Paper>
  )
}
