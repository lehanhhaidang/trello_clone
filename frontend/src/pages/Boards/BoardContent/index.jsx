import { Box } from '@mui/material'

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) =>
          `calc(100% - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
