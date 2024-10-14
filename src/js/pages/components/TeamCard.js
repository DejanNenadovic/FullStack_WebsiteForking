const data={
    imgUrl:'',
    backgroundColor: '#fff',
    title: '',
    subTitle:'',
    fontColor: ''
}

const TeamCard = ({data}) => {
    return(
        <div style={{width: '100%', display: 'inline-block'}} className="joinOurTeam_carousel__3h05Y">
            <div className="positionItems_positionItems__moVHI false">
                <div className="ourValueCard_card__OiI7W false>">
                    <div style={{justifyContent: 'center'}} className="positionItems_card__yE_EF">
                        <img src = {data.imgUrl}/>
                    </div>
                    <h2 style={{fontWeight: '600'}} className="positionItems_text__ncZZe">{data.title}</h2>
                    <p className="positionItems_link__gy6RO">{data.subTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard