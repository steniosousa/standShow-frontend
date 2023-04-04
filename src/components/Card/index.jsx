import './styles.css'
import teste from '../../assets/estande modular.jpeg'
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
                        <img src="https://www.standshow.com.br/imagens/uploads/novidades/miniaturas/800_57a6464db82e63f0ac35eaa6623b9334.jpeg" id="profilelCoin" alt="profile"/>
                    </div>
                    <p><span id="colorTextFinal">Creation of </span>{user}</p>
                </div>
        </div>
    )
}