

function Card(props) {
    return (
        <div className="card">
            <img className="card__img" src={props.imgSrc} alt="furniture" />
            <h2>{props.head} </h2>
            <div className="B-NOW">
                <p>$200.00</p>
                <p>BUY NOW</p>
            </div>
        </div>
    )
}
export default Card