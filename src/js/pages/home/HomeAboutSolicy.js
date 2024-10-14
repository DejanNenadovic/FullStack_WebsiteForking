import { useTheme } from '@mui/system'

export default function HomeAbout(){
    const theme = useTheme()
    return(
    <div className="about_aboutContainer__Vz4Xr false">
        <div className="about_gifBox__pC24z">
            <span>
                <img alt="aboutLogo.svg" draggable="false" src="https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutLogo.svg?tr=w-340,q-100" decoding="async" data-nimg="intrinsic" className=""/>
                <noscript>
                    <img alt="aboutLogo.svg" draggable="false" srcSet="https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutLogo.svg?tr=w-340,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutLogo.svg?tr=w-340,q-100 2x" src="https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutLogo.svg?tr=w-340,q-100" decoding="async" data-nimg="intrinsic" className="" loading="lazy"/>
                </noscript>
            </span>
        </div>
        <div className="about_textBox__P2R7e">
            <div className="subTitleText_subTitle__2anJB about_title__BVzgD subTitleText_about__Gga7C">
                <h1 className={theme.palette.mode === 'light'? "subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--primary-color-white-mod__H_tOL" : "subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE"}>About Solicy</h1>
            </div>
            <div className="subTitleText_description__WoiQ_ about_description__OOdkf">Solicy is a fast-growing company providing Blockchain and Software solutions to customers from around the globe. Due to the high demand for Blockchain development services in the market, we keep up with innovations and provide a wide range of services.</div>
            <span href="/about">
                <button type="button" className="ant-btn ant-btn-default button_btn__XHL7T about_moreBtn__nJfbm button_light__M4f83 button_direction-row__QRu0d">
                    <p>See More</p>
                </button>
            </span>
        </div>
    </div>
    )
}