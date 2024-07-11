import "./App.css"
import { TwitterFollowCard } from "./TwFollowCard"
import { useState } from "react"

const users = [
    {
        userName: "manuu1812",
        name: "Manu",
        isFollowing: true
    },
    {
        userName: "PancorboIsabel",
        name: "Isa",
        isFollowing: true
    },
    {
        userName: "elonmusk",
        name: "Elon MUsk",
        isFollowing: false
    }
]
export function App () {
    const [isFollowing, setIsFollowing] = useState(false);
    return (
        <>
        {
            users.map(({userName, name, isFollowing}) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
            )
            )
        }
   
        
        <button onClick={()=> setIsFollowing(!isFollowing)}>Cambio estado</button>
        </>
       
    )
}