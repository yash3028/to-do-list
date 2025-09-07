import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function SvgMaterialIcons() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ color: 'text.primary' }}>
                <Grid size={8}>
                    <DeleteForeverIcon />
                </Grid>
            </Grid>
        </Box>
    );
}
