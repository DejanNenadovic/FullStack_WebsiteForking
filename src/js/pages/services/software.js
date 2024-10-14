import GetInTouch from "../GetInTouch";
import SimpleDescription from "../components/SimpleDesciption";
import TechCard from "../components/TechCard";

const Data = [
    {
        imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/icons/software-intro.svg?tr=w-570,q-100',
        title:'Software Development',
        subTitle:'Solicy keeps up with the latest developments and offers a wide range of services due to the strong demand for blockchain development services in the industry. Being experts in this area, we provide services ranging from decentralized exchange (DEX) development to NFT marketplace creation. Ethereum, Solana, Cardano, Polkadot, and ATOS are among the top Blockchain platforms that we employ.',
        backgroundColor: '#fff',
        flexDirection: 'row-reverse',
        color: '#000'
    },
    {
        imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100',
        title:'Web Development',
        subTitle:'To facilitate quick and secure transactions on leading blockchains, Solicy will provide sustainable cryptocurrency exchange platforms.',
        backgroundColor: '#f1f7ff',
        flexDirection: 'row-reverse',
        color: '#000'
    },
    {
        imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100',
        title:'Software Architecture',
        subTitle:'For any platform and currency, Solicy is skilled in developing secure cryptocurrency wallets. Using the best that technologies can offer, we create and include your cryptocurrency wallet on various trading or investment sites.',
        backgroundColor: '#fff',
        flexDirection: '',
        color: '#000'
    },
    {
        imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100',
        title:'Project Management',
        subTitle:"Your business logic can be incorporated inside the Smart Contract by our developers.We can create highly customizable digital contracts that are adjusted to your company's needs due to our extensive experience with Solidity and other blockchain-compatible programming languages.",
        backgroundColor: '#f1f7ff',
        flexDirection: 'row-reverse',
        color: '#000'
    },
    {
        imgUrl: 'https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100',
        title:'UI/UX Design',
        subTitle:"Solicy builds the best NFT Marketplace development strategies for your company. We assist companies in developing NFT Marketplaces where users may bid, sell, and trade NFTs. Thanks to our solid foundation in Decentralized Apps and the most recent blockchain technologies, we do that with high quality. The marketplace 's integrated smart contract also makes it possible to execute all conditions.",
        backgroundColor: '#fff',
        flexDirection: '',
        color: '#000'
    }
]
const TechCardData = [
    {imgUrl : 'https://ik.imagekit.io/2zlgs27bjo/public/image/solana.webp?tr=w-350,q-100'},
    {imgUrl : 'https://ik.imagekit.io/2zlgs27bjo/public/image/solidity.webp?tr=w-350,q-100'},
    {imgUrl : 'https://ik.imagekit.io/2zlgs27bjo/public/image/ethereum.webp?tr=w-350,q-100'},
    {imgUrl : 'https://ik.imagekit.io/2zlgs27bjo/public/image/aptos.webp?tr=w-350,q-100'},
    {imgUrl : 'https://ik.imagekit.io/2zlgs27bjo/public/image/polygon.webp?tr=w-350,q-100'},
    {imgUrl : 'https://ik.imagekit.io/2zlgs27bjo/public/image/avalanche.webp?tr=w-350,q-100'}
]
const Software = () => {
    return(
        <section>
            <SimpleDescription data={Data[0]}/>
            <div className="techStack_container__hE2tN">
                <div className="title_titleContainer__SvQXY false">
                    <div className="title_title__mdTgq">
                        <h1 className="title_title__mdTgq">Tech Stack</h1>
                    </div>
                    <div className="techStack_techCard__TZj_F">
                        {TechCardData.map((d) => {return <TechCard data={d}/>})}
                    </div>
                </div>
            </div>
            <h1 style={{padding: '40px'}} className="title_title__mdTgq">Our Services</h1>
            {
                Data.map((d, n) => {if (n !== 0) return <SimpleDescription data={d}/>})
            }
            <GetInTouch/>
        </section>
    )
}

export default Software