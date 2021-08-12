import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => {
  return {
    img: {
      width: '600px',
      height: '240px',
      margin: '0 0 52px',
      objectFit: 'contain',
    },
    title: {
      width: '280px',
      height: '24px',
      fontSize: '20px',
      fontWeight: '800',
      lineHeight: '0.8',
      textAlign: 'center',
      color: '#1d3452',
      margin: '0 auto',
      padding: '0',
    },
    content: {
      border: 'none',
      width: '290px',
      height: '56px',
      marginTop: '16px',
      fontSize: '16px',
      lineHeight: '1.75',
      textAlign: 'center',
      color: '#8f9aa9',
      margin: '0 auto',
      letterSpacing: 'normal',
      fontStretch: 'normal',
      overflowY: 'hidden',
      padding: '0',
    },
    actions: {
      padding: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0',
    },
    btn: {
      width: '68px',
      height: '28px',
      fontSize: '16px',
      lineHeight: '1.75',
      textAlign: 'left',
      textTransform: 'none',
    },
  };
});
