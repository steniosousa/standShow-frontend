import './styles.css'
export default function Card({urlImage,title,text,city,yeah,user}){
    return(
        <div className="container" id="events">
            <div className="avatar" style={{backgroundImage: `url(${urlImage})`}}></div>
                <div className="title">
                    <h1>{title}</h1>
                </div>

                <div className="text">
                <p>
                   {text}
                </p>
                </div>

                <div className="value">
                <div className="coinValue">
                    <span className="colorInternalLeft">{city}</span>
                </div>

                <div className="date">
                    <span className="colorInternalRight">{yeah}</span>
                </div>
                </div>

                <div className="owner">
                    <div className="picture">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" id="profilelCoin" alt="profile"/>
                    </div>
                    <p><span id="colorTextFinal">Creation of </span>{user}</p>
                </div>
        </div>
    )
}