import { useRef } from "react"
import Introduction from './HomeIntroduction'
import GetInTouch from '../GetInTouch'
import HomeAchievement from "./HomeAchievement"
import HomeOurClients from "./HomeOurClients"
import HomeAbout from "./HomeAboutSolicy"
import HomeOurServices from "./HomeOurServices"
import HomeTechStack from "./HomeTechStack"
import HomeJoin from "./HomeJoinCommunity"

export default function Home(){
    const scrollToGetInTouchRef = useRef(null)
    const scrollToGetInTouch = () => {
        if (scrollToGetInTouchRef.current)
            scrollToGetInTouchRef.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
        <Introduction scrollToGetInTouch = {scrollToGetInTouch}/>
        <HomeAchievement/>
        <HomeOurClients/>
        <HomeAbout/>
        <HomeOurServices/>
        <HomeTechStack/>
        <HomeJoin/>
        <div ref={scrollToGetInTouchRef} style={{position: 'relative', bottom: '100px'}}></div>
        <GetInTouch/>
        </>
    )
}
