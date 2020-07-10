const styles = {
    root:{
        backgroundImage:' linear-gradient(to bottom, powderblue,pink, white 80%)',
        height:'100vh',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    container:{
        width:"50%",
        display:'flex',
        flexWrap:'wrap',
        flexDirection:"column"
    },
    nav:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        color:'white',
        alignItems:"center",
        fontSize:'3rem',
        "& a":{
            color:"white",
            backgroundColor: "#f7b42c",
            backgroundImage: "linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",            
            textDecoration:'none',
            padding:'1rem',
            border:'0 px',
            borderRadius:'12px',
            fontSize:'1.5rem',
        },
    
    },
    palettes:{
        boxSizing:'border-box',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:`5%`,
    }
}
export default styles;