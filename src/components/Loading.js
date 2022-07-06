import React from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const DefaultPage = ({ message }) => {
  return (
    <Portal>
      <WrapperStyled>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="success" />
          {message && <MessageStyled>{message}</MessageStyled>}
        </Stack>
      </WrapperStyled>
    </Portal>
  );
};

export default DefaultPage;

const WrapperStyled = styled.div`
  z-index: 9999;
  .bx--loading-overlay {
    z-index: 9999;
  }
`;

const MessageStyled = styled.p`
  position: fixed;
  top: calc(50% + 50px);
  text-align: center;
  width: 100%;
`;
