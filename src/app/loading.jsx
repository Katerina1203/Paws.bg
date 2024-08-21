
import Image1 from "../../img/logo.png"
import Image from "next/image"

import { CircularProgress, Typography, Paper } from '@mui/material';

const Loading = () => {
  return (
    <Paper
      elevation={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
       
        padding: '16px',
      }}
    >
        <Image src={Image1} alt="Logo" width={100} height={50} />
      <CircularProgress color="primary" size={60} />
      <Typography variant="h6" style={{ marginTop: '16px' }}>
        Fetching your furry friends...
      </Typography>
      <Typography variant="body1" style={{ marginTop: '8px' }}>
        Please wait while we gather the best animals for adoption!
      </Typography>
    </Paper>
  );
};

export default Loading;