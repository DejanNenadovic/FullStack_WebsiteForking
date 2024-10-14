const data = {
    imgUrl: '',
    title:'',
    subTitle:'',
    backgroundColor: '#000000',
    flexDirection: 'row-reverse',
    color: '#fff'
}


const SimpleDescription = ({data}) => {
    return(
        <section style={{background:data.backgroundColor, minHeight: '620px', display: 'flex', justifyContent: 'center', margin:'20px'}}>
            <div style={{maxWidth: '1440px', overflow:'none', alignItems:'center', display:'flex', columnGap:'6%', flexDirection: data.flexDirection, justifyContent:'flex-end'}}>
                <div className="SimpleDescription_Div">
                    <img  style={data.title === 'Cryptocurrency Wallet Development' ? {width: '300px'} : {width:' '}} alt="" draggable="false" src={data.imgUrl} decoding="async" data-nimg="intrinsic" data-xblocker="passed" className="">
                    </img>
                </div>
                <div style={{width: '55%'}} className="aboutUs_textBox__VgisD aboutUs_textBoxDs__kWnZV">
                    <div className="subTitleText_subTitle__2anJB aboutUs_title__vXzbE">
                        <h1 style={{color: data.color}} className="subTitleText_subTitleText__bQxEn undefined">
                            {data.title}
                        </h1>
                    </div>
                    <div style={{maxWidth: 'none', color: data.color}} className="subTitleText_description__WoiQ_ aboutUs_description__iCjOA">
                        {data.subTitle}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimpleDescription