import { Button, Stack } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit'

function App() {
  return (
    <>
      <div> hello</div>
      <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <AcUnitIcon />
      </Stack>
    </>
  )
}

export default App
