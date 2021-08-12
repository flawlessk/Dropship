import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => {
  return {
    img: {
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
  };
});
