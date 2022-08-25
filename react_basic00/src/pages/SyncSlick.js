import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



const SyncSlick = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);


    const set = {
        vertical: true,
        dots: true,
    }
    return (
        <>
            <Slider asNavFor={nav2} {...set} ref={slider1 => setNav1(slider1)}>
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </Slider>

            <Slider asNavFor={nav1} {...set} ref={slider2 => setNav2(slider2)}>
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </Slider>

        </>
    )
}

export default SyncSlick;