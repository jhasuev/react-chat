import React from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack'
import EventEmitter from '../utils/EventEmitter'

function MyApp() {
  const { enqueueSnackbar } = useSnackbar()

  EventEmitter.$off('SHOW_MESSAGE')
  EventEmitter.$on('SHOW_MESSAGE', ([variant, message]) => {
    enqueueSnackbar(message, { variant, autoHideDuration: 5000 })
  })

  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export default function MySnackbar() {
  return (
    <SnackbarProvider maxSnack={11}>
      <MyApp />
    </SnackbarProvider>
  )
}
