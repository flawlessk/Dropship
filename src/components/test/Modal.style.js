import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => {
  return {
    dialogSize: {
      width: '465px',
      height: '513px',
      borderRadius: '8px',
    },
    boxPadding: {
      padding: '48px 63px 52px 68px',
    },
    dialogTitle: {
      width: '143px',
      height: '32px',
      fontSize: '24px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '1.33',
      letterSpacing: 'normal',
      textAlign: 'center',
      padding: '0',
      margin: '0 auto',
      marginBottom: '16px',
    },
    link: {
      width: '334px',
      height: '40px',
      padding: '4px 4px 4px 10px',
      borderRadius: '8px',
      border: 'solid 1px rgba(46, 53, 55, 0.2)',
      flexDirection: 'unset',
      textOverflow: 'ellipsis',
    },
    content: {
      border: 'none',
      padding: '0',
    },
    typography: {
      width: '334px',
      height: '72px',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.5',
      letterSpacing: 'normal',
      textAlign: 'center',
      marginBottom: '0',
    },
    img: {
      width: '205px',
      height: '205px',
      margin: '24px 79.6px 24px 64.4px',
      objectFit: 'contain',
    },
    box: {
      width: '80px',
      height: '32px',
      margin: '0 0 0 30px',
      borderRadius: '6px',
      backgroundColor: 'rgba(94, 190, 132, 0.2)',
    },
    vector: {
      marginTop: '6px',
    },
    copy: {
      width: '32px',
      height: '20px',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.43',
      letterSpacing: 'normal',
      textAlign: 'center',
      margin: '0 0 0px 35px',
      color: '#5EBE84',
    },
    form: {
      padding: '0',
    },
  };
});
