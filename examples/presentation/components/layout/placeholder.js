// import React from 'react';
import styled from '@emotion/styled';

const Placeholder = styled.div(({ color }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 100,
  width: 200,
  border: `4px solid ${color}`,
}));

export { Placeholder as default };