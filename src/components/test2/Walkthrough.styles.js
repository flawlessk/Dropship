import { BorderBottom } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';


export default makeStyles((theme) => {
    return {
        dot: {
            backgroundColor: '#8f9aa9',
            margin: '0 12px',
            width: '8px',
            height: '8px',
          },
          dotActive: {
            backgroundColor: '#ff9432',
          },
          dialogTitle: {
              display: "flex",
              backgroundColor: "#6AC38D",
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
              color: "#ffffff",
              padding: "28px 28px 28px 36px",
              alignItems: "center",
              fontSize: "18px"
          },
          imgX: {
              width: "24px",
              height: "24px",
              margin: "0 0 0 106px",
              objectFit: "contain",
              cursor: "pointer"
          },
          content: {
            padding: "0",
            overflow: "hidden",
            border: "none"
          },
          text: {
            color: "rgba(29, 52, 82, 0.5)",
            fontSize: "14px",
            lineHeight: "1.71",
            textAlign: "left",
            margin: "22px 32px 10px 32px",
          },
          text2: {
            color: "rgba(29, 52, 82, 0.5)",
            fontSize: "14px",
            lineHeight: "1.71",
            textAlign: "left",
            margin: "0 32px 0 32px",
          },
          press: {
              width: "20x",
              height: "20px",
              margin: "0 10px 0 8px",
              backgroundColor: "#EBEFF5",
              padding: "5px 6px 7px",
          },
          image: {
              width: "20px",
              height: "20px",
              objectFit: "contain",
              color: "#ffffff",
              borderRadius: "100%",
              '&:hover': {
                backgroundColor: '#EAF7EF',
              },
          },
          imagee: {
            width: "20px",
            height: "20px",
            objectFit: "contain",
            borderRadius: "100%",
            '&:hover': {
              backgroundColor: '#5ebe84',
            },
          },
          btnNext: {
              minWidth: 0,
              width: "32px",
              height: "32px",
              padding: "12px",
              borderRadius: "100%",
              border: "solid 8px #dff2e6",
              backgroundColor: "#5ebe84",
            '&:hover': {
                backgroundColor: '#5ebe84',
              },
          },
          btnBack: {
              padding: 0,
              minWidth: 0,
              border: "solid 8px #dff2e6",
              borderRadius: "100%",
              backgroundColor: "#EAF7EF",
            '&:hover': {
                color: '#FF2E6',
              },
          },
          stepper: {
            background: "none",
            margin: "0 32px 32px 32px",
            padding: 0,
          },
          bold: {
            marginLeft: "32px",
            marginBottom: "20px"
          },
          underline: {
            display: "inline-block",
            textDecoration: "underline",
            color: "black"
          },
          flex: {
            display: "flex",
            alignItems: "center"
          },
          flex1: {
            display: "flex",
            alignItems: "center",
            marginBottom: "16px"
          },
          marginLeft: {
            marginLeft: "12px",
            marginRight: "4px"
          },
          marginRight: {
            marginRight: "12px"
          }
    }
})