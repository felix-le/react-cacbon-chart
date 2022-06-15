import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles((theme) => ({
  root: {
    padding: '0 5.5px',
    height: '67px',
    display: 'flex',
    alignItems: 'center',
    background: '#ffffff 0% 0% no-repeat padding-box',
    boxShadow: '0px 2px 10px #d9ebfd',
    justifyContent: 'space-between',
  },

  logo: {
    paddingRight: '5.5px',
    marginRight: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
  },
  heading: {
    position: 'relative',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    webkitLetterSpacing: 'normal',
    mozLetterSpacing: 'normal',
    msLetterSpacing: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    marginRight: '35px',
    color: theme.palette.primary.main,
  },
}));
