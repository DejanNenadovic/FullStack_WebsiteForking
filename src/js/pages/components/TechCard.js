const TechCardData = [
    {imgUrl: ''},
    {imgUrl: ''},
    {imgUrl: ''},
    {imgUrl: ''}
]

const TechCard = ({data}) => {
    return(
        <section className="techStack_tech__EtOAG ">
        <div className="techCard_imageItem__PHXmj">
            <div className="techCard_box__j1mN7">
                <span className="techCard_box_span1">
                    <span className="techCard_box_span2">
                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e" data-xblocker="passed"/>
                    </span>
                    <img src={data.imgUrl} className="techCard_img"/>
                </span>
            </div>
        </div>
        </section>
    )
}

export default TechCard