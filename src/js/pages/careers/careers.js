import SimpleDescription from "../components/SimpleDesciption";
import TeamCard from "../components/TeamCard";
import GetInTouch from "../GetInTouch";
import ScrollToTop from "../ScrollTop";
const Data = [
    {imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/image/Frame.svg?tr=w-308,q-100',
    title:'Careers',
    subTitle:'We fiercely climb the growth ladder to generate more value for the world. Solicy emphasizes employing the most advanced technologies to surpass any expectations our clients might have. To provide the highest quality services, we continue to learn, aspire, and achieve new professional milestones.',
    backgroundColor: '',
    flexDirection: 'row-reverse',
    color:'#000'},
    
    {imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/image/illustration-career.svg?tr=w-800,q-100',
      title:'Join Solicy!',
      subTitle:"We keep up with innovations and provide a wide range of services since the high demand for blockchain development services in he market. We grow exponentially, yet preserve the values that have driven us from the first day. We aim to inhale the benefits of lockchain and software technologies into our client's business ambitions.",
      backgroundColor: '#1049b3',
      flexDirection: '',
      color: '#fff'}
    ]

const CardData = [
    {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/image/Full-stack.webp?tr=w-70,q-100',
        backgroundColor: '#fff',
        title: 'Full-Stack JS Developer',
        subTitle:'Learn more',
        fontColor: ''
      },
      {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer.svg?tr=w-70,q-100',
        backgroundColor: '#fff',
        title: 'Solidity Developer',
        subTitle:'Learn more',      
        fontColor: ''
      },
      {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/image/solana-light.svg?tr=w-70,q-100',
        backgroundColor: '#fff',
        title: 'Solana Developer',
        subTitle:'Learn more',
        fontColor: ''
      },
      {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/image/node-light.svg?tr=w-70,q-100',
        backgroundColor: '#fff',
        title: 'Back End Node.js Developer',
        subTitle:"Learn more",
        fontColor: ''
      },
      {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/image/android-developer.svg?tr=w-70,q-100',
        backgroundColor: '#fff',
        title: 'Android Developer',
        subTitle:'Learn more',
        fontColor: ''
      },
      {
        imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/image/ios-developer.svg?tr=w-70,q-100',
        backgroundColor: '#fff',
        title: 'iOS Developer',
        subTitle:'Learn more',
        fontColor: ''
      }
]

const TeamCards = () => {
    return(CardData.map(d => {return <TeamCard data= {d}/>}))
}

const Careers = () => {
    ScrollToTop();
    return(
        <section>
            {Data.map((b) => {return <SimpleDescription data = {b}/>})}
            <h1 style={{padding: '40px'}} className="title_title__mdTgq">Join Our Team</h1>
            <div style={{display: ''}} className='ourValues_ourValuesContainer___46a2'>
                <div style={{display: 'grid', width: '80%'}} className='ourValues_cards__HOB5c'>
                    <TeamCards/>
                </div>
            </div>
        <GetInTouch/>
        </section>
    )
}

export default Careers