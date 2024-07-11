import {useState} from 'react'
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing? 'Siguiendo': 'Seguir'
    const buttonClassName = isFollowing?
        'tw-followCard-followButton is-following'
        : 'tw-followCard-followButton'
    return(
        <article className="tw-follow-card">
        <header className="tw-follow-card-header">
            <img className="tw-follow-card-avatar" alt="Avatar" src={`https://unavatar.io/${userName}`} />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span  className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>  
        </aside>
    </article>
    )
}