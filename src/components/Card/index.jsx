import './styles.css'
export default function Card({urlImage}){
    return(
        <div className="container">
            <div className="avatar" style={{backgroundImage: `url(${urlImage})`}}></div>
                <div className="title">
                    <h1>Equilibrium</h1>
                </div>

                <div className="text">
                <p>
                    Our Equilibrium collection promotes
                    <br></br>
                    balance and calm.
                </p>
                </div>

                <div className="value">
                <div className="coinValue">
                    <span className="colorInternalLeft">Fortaleza - CE </span>
                </div>

                <div className="date">
                    <span className="colorInternalRight">2019</span>
                </div>
                </div>


                <div className="owner">
                    <div className="picture">
                        <img src="./image/Vitalik-Buterin-PNG.png" id="profilelCoin"/>
                    </div>
                    <p><span id="colorTextFinal">Ceation of </span>Jules Wyvern</p>
                </div>
        </div>
    )
}