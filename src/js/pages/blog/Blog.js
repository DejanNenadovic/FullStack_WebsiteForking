import BlogCard from "../components/BlogCard";

const BlogData = [
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/products/1_O-p1f7zIvOVK5cekJd5JxA_EJrmC0N3o.webp',
        title:'Understanding Bitcoin Network Congestion: High Fees, and What to Do',
        subTitle:'Why is the Bitcoin Network Congested?',
        description:'Higher Transactions Fees',
        date:'Solicy | May 17, 2024',
        direction:'horizontal',
    },
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/products/1_KDoae7kc3Z4t_laOjMABMg_RlL7TCEW9.webp?tr=w-400,q-100',
        title:'The Science of Boosting Productivity In A Workplace: Techniques and Tips',
        subTitle:'Productivity is the key to success in any workplace. Every business should have goals aimed at increasing productivity in the workplace. An excellent plan and bright, diligent personnel are required for any successful business or project. ',
        description:'',
        date:'Solicy | May 17, 2024',
        direction:'vertical',
    },
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/products/1_NWcQDTfQtvh3ssyjlT-38g_ftM77Tw_l.webp?tr=w-400,q-100',
        title:'The Science of Boosting Productivity In A Workplace: Techniques and Tips',
        subTitle:'Productivity is the key to success in any workplace. Every business should have goals aimed at increasing productivity in the workplace. An excellent plan and bright, diligent personnel are required for any successful business or project. ',
        description:'',
        date:'Solicy | May 17, 2024',
        direction:'vertical',
    },
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/products/1_82lNUXiLPFHXTyLwDjaEvw_trmIgR28x.webp?tr=w-400,q-100',
        title:'The Science of Boosting Productivity In A Workplace: Techniques and Tips',
        subTitle:'Productivity is the key to success in any workplace. Every business should have goals aimed at increasing productivity in the workplace. An excellent plan and bright, diligent personnel are required for any successful business or project. ',
        description:'',
        date:'Solicy | May 17, 2024',
        direction:'vertical',
    },
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/products/1_jw_mMMIMVseMqDxY3BLRhQ_-vGOIbAWD.webp?tr=w-400,q-100',
        title:'The Science of Boosting Productivity In A Workplace: Techniques and Tips',
        subTitle:'Productivity is the key to success in any workplace. Every business should have goals aimed at increasing productivity in the workplace. An excellent plan and bright, diligent personnel are required for any successful business or project. ',
        description:'',
        date:'Solicy | May 17, 2024',
        direction:'vertical',
    },
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/products/1_nYr-MsdA-UIlTunHTOGMZA_u7WsAWPBn.webp?tr=w-400,q-100',
        title:'The Science of Boosting Productivity In A Workplace: Techniques and Tips',
        subTitle:'Productivity is the key to success in any workplace. Every business should have goals aimed at increasing productivity in the workplace. An excellent plan and bright, diligent personnel are required for any successful business or project. ',
        description:'',
        date:'Solicy | May 17, 2024',
        direction:'vertical',
    },
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/products/1_EaIb1vhEFsjkO6Ol17rcKw__1__GmHZamI5z.webp?tr=w-400,q-100',
        title:'The Science of Boosting Productivity In A Workplace: Techniques and Tips',
        subTitle:'Productivity is the key to success in any workplace. Every business should have goals aimed at increasing productivity in the workplace. An excellent plan and bright, diligent personnel are required for any successful business or project. ',
        description:'',
        date:'Solicy | May 17, 2024',
        direction:'vertical',
    }
]


const Blog = () => {
    return(
        <section style={{display: 'flex',  justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '85%', paddingTop: '20px'}} className="ntro_introContainer__DP2_F false">
            <div style={{paddingLeft: '200px'}} className="intro_header__H7Ym4">
                <h1 style={{fontWeight: '900', fontSize: '46px'}}>Lessons learned on our journey</h1>
                <p style={{fontWeight: '400', fontSize: '20px'}}>Here at Solicy, we deliver impactful solutions that can give you the best competitive edge. We first burst              onto the scene...</p>
            </div>
            <div style={{paddingLeft: '200px'}}>
                <BlogCard blogData = {BlogData[0]}/>
            </div>
            <div className="posts_container__qR5br">
                <div class="posts_postsContainer__DUfxi">
                    {BlogData.map((d, n) => {if (n !== 0) return <BlogCard blogData = {d}/>})}
                </div>
            </div>
        </div>
        </section>
    )
}

export default Blog