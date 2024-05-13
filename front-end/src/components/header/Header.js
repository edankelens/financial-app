import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2em',
      }}
    >
      <Typography variant="h3" component="h1">
        International Money Transfer: <br/> Best Ways To Send Money Internationally
      </Typography>
    </Box>
  )
}

