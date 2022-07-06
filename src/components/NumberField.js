import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function NumberField({ id, value, name, label, onChange, width }) {
  return (
    <NumberStyled width={width}>
      <TextField id={id} name={name} invalidText="Number is not valid" label={label} min={0} step={1} value={value} onChange={onChange} />
    </NumberStyled>
  );
}

const NumberStyled = styled.div`
  width: ${(props) => props.width || '100%'};
  .bx--label {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    color: #152935;
  }
  .bx--number input[type='number'] {
    min-width: ${(props) => props.width || '100%'};
  }
`;
