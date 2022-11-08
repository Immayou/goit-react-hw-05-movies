import {NotFoundTitle} from './NotFound.styled'

export const NotFound = () => {
    return (
        <main>
            <NotFoundTitle>This page is not found!</NotFoundTitle>
            <img src={(require('../../img/not-found.jpg'))} alt="" />
        </main>
    )
}