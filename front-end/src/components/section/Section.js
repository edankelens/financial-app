import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Section({ content, title }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
        {title}
      </Typography>
      <Typography variant="h5" component="h3" sx={{ textAlign: 'center' }}>
        {content}
      </Typography>
    </Box>
  );
}