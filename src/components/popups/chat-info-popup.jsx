import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import EventEmitter from '../../utils/EventEmitter'

export default function ChatInfoPopup() {
  const [open, setOpen] = React.useState(false)

  const onOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  EventEmitter.$off('SHOW_CHAT_INFO_POPUP')
  EventEmitter.$on('SHOW_CHAT_INFO_POPUP', (chatId) => {
    console.log('chatId', chatId)
    onOpen(true)
  })

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth={true}
      maxWidth={'xs'}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div>Update chat info</div>
        <IconButton
          onClick={handleClose}
          sx={{ color: '#9e9e9e' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p:2 }}>
        <Typography>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            name='login'
            autoComplete={'off'}
            label="Chat info"
          />
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="outlined" onClick={handleClose}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
