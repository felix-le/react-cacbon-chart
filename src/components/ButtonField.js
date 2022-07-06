import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonField({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}
