import about_img1 from "./assets/b1.jpg"
import about_img2 from "./assets/b2.jpg"
import about_img3 from "./assets/b3.jpg"
import Blog from "./Blog"

function Blogs() {
    return (
            <>
            <h1 className="card__head" >Latest Blog</h1>
        <div className="blogs">
            <Blog imgSrcB={about_img1} headb={"Look even slightly believable. If you are"} />
            <Blog imgSrcB={about_img2} headb={"Anything embarrassing hidden in the middle"} />
            <Blog imgSrcB={about_img3} headb={"Modestias magni natus dolores odio commodi"} />
        </div></>
    )
}
export default Blogs