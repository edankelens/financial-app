import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Introduction() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2em', 
            }}
        >
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
                Navigating the world of international money transfers can be daunting. With countless options each offering different rates, fees, and transfer times, it's hard to know which service is the best fit for you. That's where we come in.
            </Typography>
        </Box>
    )
}