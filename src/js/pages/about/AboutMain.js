import AboutIntroduction from './AboutIntroduction'
import GetInTouch from '../GetInTouch'
import VideoHome from './AboutVideo'
import SimpleDescription from '../components/SimpleDesciption'
import SimpleCard from '../components/SimpleCard'

const Data = [
  {imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/icons/about.svg?tr=w-570,q-100',
  title:'Excellence Is What We Aim For',
  subTitle:'We fiercely climb the growth ladder to generate more value for the world. Solicy emphasizes employing the most advanced technologies to surpass any expectations our clients might have. To provide the highest quality services, we continue to learn, aspire, and achieve new professional milestones.',
  backgroundColor: 'linear-gradient(89.9deg, #0a2962 .08%, #104fc2 100.59%)',
  flexDirection: '',
  color:'#fff'},
  
  {imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/image/mission.png?tr=w-440,q-100',
    title:'Our Mission',
    subTitle:"We keep up with innovations and provide a wide range of services since the high demand for blockchain development services in he market. We grow exponentially, yet preserve the values that have driven us from the first day. We aim to inhale the benefits of lockchain and software technologies into our client's business ambitions.",
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    color: ''}
  ]

  const CardData = [
    {
      imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/icons/quality.svg?tr=w-41,q-100',
      backgroundColor: '#fff',
      title: 'Quality',
      subTitle:'Our primary focus goes on providing high-quality services. We take the best technological advancement has to offer to build effective solutions.',
      fontColor: ''
    },
    {
      imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/icons/clock.svg?tr=w-41,q-100',
      backgroundColor: '#fff',
      title: 'Fast delivery',
      subTitle:'We know a thing or two about fast delivery. We solve even the most complex issues in a comparably short time.',      fontColor: ''
    },
    {
      imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/icons/lamp.svg?tr=w-41,q-100',
      backgroundColor: '#fff',
      title: 'Enthusiasm',
      subTitle:'Oh, we enjoy our work; every second of it brings us joy. Perhaps that’s why we are good at what we do.',
      fontColor: ''
    },
    {
      imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/icons/person.svg?tr=w-41,q-100',
      backgroundColor: '#fff',
      title: 'People',
      subTitle:"We care about people: not just our clients, but all of the stakeholders a project might have. We put people's safety and ell-being first. Our priority for those individuals is unprecedented.",
      fontColor: ''
    },
    {
      imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/icons/wokspace.svg?tr=w-41,q-100',
      backgroundColor: '#fff',
      title: 'Integrity',
      subTitle:'Our team employs strict integrity policies: intellectual property protection, non-disclosure rules, and a no-cheating code re of great significance to us.',
      fontColor: ''
    },
    {
      imgUrl:'https://ik.imagekit.io/2zlgs27bjo/public/icons/text.svg?tr=w-41,q-100',
      backgroundColor: '#fff',
      title: 'Learning',
      subTitle:'In this evolving industry, we try to keep up. Learning is key to many doors, and we aim to open a lot of those.',
      fontColor: ''
    }
]
const SimpleDesc = () => {
  return(Data.map(d => {return <SimpleDescription data= {d}/>}))
}
const SimpleCards = () => {
  return(CardData.map(d => {return <SimpleCard data= {d}/>}))
}
const About = () => {
  return (
    <div className='about_aboutUsContainer__vtF5S'>
      <AboutIntroduction />
      <VideoHome/>
      <SimpleDesc/>
      <h1 className='title_title__mdTgq'>Our Values</h1>
      <div className='ourValues_ourValuesContainer___46a2'>
        <div className='ourValues_cards__HOB5c'>
          <SimpleCards/>
        </div>
      </div>
      <GetInTouch />
    </div>
  )
}

export default About