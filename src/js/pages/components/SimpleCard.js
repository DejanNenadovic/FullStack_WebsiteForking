const data={
    imgUrl:'',
    backgroundColor: '#fff',
    title: '',
    subTitle:'',
    fontColor: ''
}

const SimpleCard = ({data}) => {
    return(
        <div className="ourValueCard_wrap__x7pVN">
            <div className="ourValueCard_wrapCard___aCN2">
                <div className="ourValueCard_card__OiI7W false>">
                    <div className="ourValueCard_card__top__Kqkud">
                        <img src = {data.imgUrl}/>
                    </div>
                    <div className="ourValueCard_card__bottom__Sl15u">
                        <h2>{data.title}</h2>
                        <p style={{marginTop: '-20px'}}>{data.subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleCard