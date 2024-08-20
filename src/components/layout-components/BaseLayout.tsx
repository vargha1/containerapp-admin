// import { MainContainer } from "./MainContainer"
import { LeftContainer } from "./LeftContainer"
import { MainContainer } from "./MainContainer"

export const BaseLayout = () => {

    return (
        <div className='w-full flex justify-end items-center'>
            <LeftContainer />
            <MainContainer />
        </div>
    )
}