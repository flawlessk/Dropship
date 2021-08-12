import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => {
  return {
    btn: {
      '&:hover': {
        backgroundColor: '#5ebe84',
      },
      color: '#fff',
      width: '209px',
      height: '40px',
      borderRadius: '8px',
      backgroundColor: '#5ebe84',
    },
    wrapper: {
      margin: '10px 30px',
    },
    popper: {
      width: '209px',
      height: '128px',
      margin: '6px 0 0',
      borderRadius: '6px',
      padding: '0 8px 12px',
    },
    paper: {
      padding: '10px 12px',
    },
    menuList: {
      padding: '0',
    },
    menuItem: {
      borderBottom: 'solid 1px rgba(103, 129, 137, 0.1)',
      padding: '0',
      paddingBottom: '8px',
      paddingTop: '8px',
      fontSize: '14px',
      fontWeight: '800',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.43',
      letterSpacing: '0.5px',
    },
    menuLastItem: {
      width: '197px',
      padding: '0',
      paddingTop: '8px',
      fontSize: '14px',
      fontWeight: '800',
      lineHeight: '1.43',
    },
    img: {
      width: '24px',
      height: '24px',
      marginRight: '15px',
    },
  };
});
