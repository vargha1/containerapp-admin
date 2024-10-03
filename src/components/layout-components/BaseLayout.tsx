// import { MainContainer } from "./MainContainer"
import { LeftContainer } from "./LeftContainer"
import { MainContainer } from "./MainContainer"

export const BaseLayout = ({ isLogged, setIsLogged }: any) => {
    return (
        <div className='w-full flex justify-end items-center'>
            <LeftContainer setIsLogged={setIsLogged} />
            <MainContainer isLogged={isLogged} setIsLogged={setIsLogged} />
        </div>
    )
}