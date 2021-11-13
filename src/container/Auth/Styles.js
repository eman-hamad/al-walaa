import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'inherit'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: 50,
    fontSize: '20px'
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  fonts:{
      fontSize: 15
  },
  input: {  
    borderRadius: '30px',
    fontSize: 15,
    // color:'#1524f6'
    // border: 10px solid rgb(175, 2, 2) 
    // backgroundColor:red
},
  text:{
    
    fontSize: '2rem'
  }
}));