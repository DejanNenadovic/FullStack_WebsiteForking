const data = {
    imgUrl_1:'',
    imgUrl_2:'',
    description:'',
    imgUrl_3:[''],
    imgUrl_4:[''],
    imgPosition:'',
    tag:''
}


const ComplexDescription = ({ComplexData}) => {
    return(
        <div style={{display:'flex', marginTop:'30px', flexDirection:`${ComplexData.imgPosition}`}}>
            <div style={{width:'55%', height:'500px', overflow:'hidden'}}>
                <img style={{maxWidth: '800px'}} src={ComplexData.imgUrl_1}></img>
            </div>
            <div style={{display: 'block', width:'40%', height:'500px'}}>
                <div style={{width: '100%'}}>
                    <img src={ComplexData.imgUrl_2}></img>
                </div>
                <div style={{width: '100%'}}>
                    <p>{ComplexData.description}</p>
                </div>
                <div style={{display:'grid', width: '100%'}}>
                    <div style={{display:'flex', width: '80%', backgroundColor:'#00000009', borderRadius: '30px', marginTop: '20px', height: '50px'}}>
                        <p style={{marginLeft: '20px', marginRight: '10px', alignContent: 'end'}}>Tech Stack</p>
                        {ComplexData.imgUrl_3.map((d) => {return <img src={d} style={{borderRadius: '10px', margin:'3px'}}/>}) }
                    </div>
                    <div style={{display:'flex', width: '80%', backgroundColor:'#00000009', borderRadius: '30px', marginTop: '20px', height: '50px'}}>
                        <p style={{marginLeft: '20px', marginRight: '10px', alignContent: 'end'}}>Blockchain</p>
                        {ComplexData.imgUrl_4.map((d) => {return <img src={d} style={{borderRadius: '10px', margin:'3px'}}/>}) }
                    </div>
                </div>
                <button style={{marginTop: '40px', fontSize:'20px', width: '30%'}} className="portfolio_button">
                    View Project
                </button>
            </div>
        </div>
    )
}

export default ComplexDescription