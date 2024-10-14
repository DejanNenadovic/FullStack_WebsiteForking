import SimpleDescription from '../../pages/components/SimpleDesciption'
import {useState} from 'react'
import ComplexDescription from '../components/ComplexDescription'
import GetInTouch from '../../pages/GetInTouch.js'

const SimpleData = {
    imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/icons/portfolio.svg?tr=w-503,q-100',
    title:'Portfolio',
    subTitle:'We prioritize the needs of our clients and offer sustainable, transparent, and highly effective collaboration prospects. Let’s explore our portfolio for a closer look.',
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    color: '#000'
}
const PortfoliaData = [
    {
        imgUrl_1:'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/mbrcld.png?tr=w-820,q-100',
        imgUrl_2:'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/mbrcld-logo.svg?tr=w-213,q-100',
        description:'DAO Maker is a growth technologies provider that creates SaaS solutions for nascent and growing crypto startups. Its flagship product is the DAO Pad',
        imgUrl_3:['https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/angular-logo-new.svg?tr=w-33,q-100', 
                'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100',
                'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/net-logo-new.svg?tr=w-33,q-100'],
        imgUrl_4:[''],
        imgPosition:'',
        tag:'Community Management'
    },
    {
        imgUrl_1:'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao.png?tr=w-820,q-100',
        imgUrl_2:'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao-logo.svg?tr=w-247,q-100',
        description:'DAO Maker is a growth technologies provider that creates SaaS solutions for nascent and growing crypto startups.',
        imgUrl_3:['https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100','https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/angular-logo-new.svg?tr=w-33,q-100'],
        imgUrl_4:['https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100','https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/binance-logo-new.svg?tr=w-33,q-100'],
        imgPosition:'',
        tag:'Blockchain'
    },
    {
        imgUrl_1:'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/akneplatz.png?tr=w-820,q-100',
        imgUrl_2:'https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/akneplatz-logo.svg?tr=w-213,q-100',
        description:'Aktenplatz is a professional service provider specialized in organizing and managing file spaces for small and medium-sized offices.',
        imgUrl_3:['https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100','https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/angular-logo-new.svg?tr=w-33,q-100'],
        imgUrl_4:['https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100','https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/binance-logo-new.svg?tr=w-33,q-100'],
        imgPosition:'',
        tag:'Business Automation'
    },
]

const Tag = [
    'All','Blockchain','Business Automation','Community Management', 'Delivery', 'Electronics', 'Environmental Services', 'Finance','HR','KYC','SaaS','Smart Parking','Social Media'
]

const Portfolio = () => {
    const [tag, SetTag] = useState('All')

    const handleClick = (e) => {
        PortfoliaData.map((d) => {d.imgPosition=''})
        SetTag(e.target.value)
    }
    var nCount = 0
    return(
        <section style={{display:'flow', justifyContent: 'center'}}>
            <SimpleDescription data={SimpleData}/>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <h1 style={{fontSize: '50px', fontFamily: 'Inter', fontWeight: '600'}}>Our Works</h1>
            </div>
            <div style={{display: '', padding: '20px 100px 20px 100px'}}>
                <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {Tag.map((d) => {return <button className='button'  value={d} onClick={handleClick}>{d}</button>})}
                </div>
                <div style={{display:'grid'}}>
                    {
                        PortfoliaData.map((d) => {
                        if (d.tag === tag || tag === 'All') {
                            if (nCount % 2 === 1)   
                                d.imgPosition = 'row-reverse'
                            nCount ++
                            return <ComplexDescription ComplexData={d}/>
                            }})
                    }
                </div>
            </div>
            <GetInTouch/>
        </section>
    )
}

export default Portfolio

