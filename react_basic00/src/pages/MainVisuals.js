import { useRef } from "react";
import MainSlider from "react-slick";
import "slick-carousel/slick/slick.css";




const MainVisual = () => {
    const set = {
        dots: true,
    }

    // 슬릭 메소드 사용하기
    // 1. 슬릭에 이름을 붙여준다. useRef --> 이름.current 
    // 2. 클릭하는 요소에 이벤트를 직접 달아준다.

    const Ms = useRef(null)


    return (

        <div>
            <h3>나는 아이콘이다</h3>
            <i className="xi-bars"></i>

            <MainSlider {...set} ref={Ms}>
                <figure>01</figure>
                <figure>02</figure>
                <figure>03</figure>
            </MainSlider>
            <div className="arrows">
                <i className="xi-arrow-left" onClick={() => Ms.current.slickPrev()}></i>
                <i className="xi-arrow-right" onClick={() => Ms.current.slickNext()}></i>
            </div>
        </div >
    )
}

export default MainVisual;