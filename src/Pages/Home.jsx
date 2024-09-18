import Header from "../Components/Header&Footer"
import BackgroundSection from "../Components/IntroductionFilter"
import { ProfileGrid } from "../Components/ProfileCard."
export function Home(){
    return(
        <>
        <Header/>
        <BackgroundSection/>
        <ProfileGrid />
        <>Properties</>
        </>
    )
}