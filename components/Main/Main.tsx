import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Main: FC = (): JSX.Element => (
  <Container maxWidth='sm'>
    <Box my={4}>
      <Typography variant='h4' component='h1' gutterBottom>
        Next.js example
      </Typography>
      <Button variant='contained' color='primary' href='/'>
        Go to the main page
      </Button>
    </Box>
  </Container>
);

export default Main;
