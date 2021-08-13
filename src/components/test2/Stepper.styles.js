import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => {
  return {
    image: {
      '&:hover': {
        backgroundColor: '#5ebe84',
      },
      width: '24px',
      height: '24px',
      objectFit: 'contain',
    },
    box: {
      '&:hover': {
        backgroundColor: '#5ebe84',
      },
      width: '48px',
      height: '48px',
      padding: '23px',
      border: 'solid 12px #dff2e6',
      backgroundColor: '#5ebe84',
      borderRadius: '100%',
      position: 'absolute',
      bottom: '60px',
      left: '270px',
    },
    dot: {
      backgroundColor: '#8f9aa9',
      margin: '0 12px',
      width: '8px',
      height: '8px',
    },
    dotActive: {
      backgroundColor: '#ff9432',
    },
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
      marginTop: '52px',
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
