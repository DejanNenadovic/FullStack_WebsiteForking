const blogData = {
    imgUrl:'',
    title:'',
    subTitle:'',
    description:'',
    date:'',
    direction:'',
}

const PostText = ({blogData}) => {
    return(
        <div style={blogData.direction === 'vertical' ? { scale: '0.8'} : {scale: '1', paddingLeft:'20px', width:'30%'}} className="intro_featuredPostText__YerJ8">
            <h2  className="intro_title__OcFox">{blogData.title}</h2>
            <div className="intro_text__NUMYV">
                <p>{blogData.subTitle}</p>
                <h2>{blogData.description}</h2>
            </div>
            <p className="intro_date__WzItW">{blogData.date}</p>
        </div>
    )
}

const BlogCard = ({blogData}) => {
    return(
        <div style={blogData.direction === 'horizontal' ? {display: 'flex'}:{maxWidth:'454px'}} className={blogData.direction === 'horizontal' ? "" : "card_postItem__QaDU_ false"}>
            <img src={blogData.imgUrl} style={blogData.direction === 'horizontal' ? {width:'100%', height: '100%', borderRadius: '10px', maxWidth: '720px'} : { borderRadius: '10px', minWidth:'450px', minHeight:'220px', maxHeight:'220px'}}></img>
            <PostText blogData={blogData}/>
        </div>
    )
}

export default BlogCard