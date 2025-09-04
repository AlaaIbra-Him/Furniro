import fur1 from "./assets/f1.png"
import fur2 from "./assets/f2.png"
import fur3 from "./assets/f3.png"
import fur4 from "./assets/f4.png"
import fur5 from "./assets/f5.png"
import fur6 from "./assets/f6.png"
import Card from "./Card"
// import './cards.css'

function Cards() {
    return (
        <div >
            <div className="card__head">
                <h1>OUR FURNITURE</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequuntur facere totam eveniet </p>
            </div>

            <div className="cards">
                <Card imgSrc={fur1} head={"brown chair design"} />
                <Card imgSrc={fur2} head={"double bed design"} />
                <Card imgSrc={fur3} head={"house chair design"} />
                <Card imgSrc={fur4} head={"brown table design"} />
                <Card imgSrc={fur5} head={"blue chair design"} />
                <Card imgSrc={fur6} head={"brown table design"} />
            </div>
        </div>
    )
}
export default Cards

