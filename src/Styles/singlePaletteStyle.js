import  chroma from 'chroma-js';
const style  = {
    Palette:{
      height: '100vh',
      display: 'flex',
      flexDirection:'column'
    },
    Colors:{
      height: "90%"
    },
    goBack:{
        width:'20%',
        height: "49%",
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        backgroundColor:'black',
        opacity:'1',
    "& a":{
        padding:'2px',
        width: '100px',
        height:'30px',
        position: 'absolute',
        display: 'inline-block',
        top:'50%',
        left:' 50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textalign: 'center',
        outline: 'none',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color:"white",
        textTransform: 'uppercase',
        cursor: 'pointer',
        border:'none',
        textDecoration:'none',
        paddingLeft:'0.8rem'
    }
    },
};
export default style;