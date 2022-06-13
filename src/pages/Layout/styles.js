import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 73rem',
    },
    fontSize: '14px',
  },
  heading: {
    marginBottom: theme.spacing(2),
    position: 'relative',
  },
  title: {
    fontSize: '2.8rem',
    color: '#777',
  },
  titleBold: {
    display: 'block',
    fontSize: '4.2rem',
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  pageRoot: {
    position: 'relative',
    zIndex: 10,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      boxShadow: '-5px 0 10px rgba(0,0,0,0.3)',
    },
  },
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '6rem',
    paddingBottom: '1.9rem',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      justifyContent: 'flex-start',
      width: '50rem',
      paddingTop: '8rem',
    },
  },
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: '1',
    justifyContent: 'flex-end',
  },
  footerWrapper: {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  logo: {
    width: '188px',
    height: '62px',
  },
  copyright: {
    fontSize: '9px',
    height: '11px',
    fontWeight: 300,
    lineHeight: 1.22,
    width: '100%',
    textAlign: 'right',
    color: '#AEAEAF',
    paddingTop: '1rem',
  },
}));
export { useStyles };
