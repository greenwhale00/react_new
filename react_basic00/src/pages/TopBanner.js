import { useRef, useState } from "react";
import { BsChevronBarUp } from "react-icon/bs";


const TopBanner = () => {

    //1. 아이콘을 클릭한다.
    //2. 아이콘을 클릭하면 TopBanner에 class "on"을 붙였다, 뗀다.
    //3. 변수를 만들어서 true, false되는 스위치를 만들고
    //4. true, false에 따라서 class "on"을 붙였다, 뗀다.

    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={`TopBanner ${toggle ? 'on' : ''}`}>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ab, dolorum ullam consectetur accusamus fuga neque.</p>

                <a href="" onClick={
                    (e) => {
                        e.preventDefault;
                    }
                }>moref</a>
            </div>
            <span onClick={() => {
                setToggle(!toggle)
            }} className={toggle ? 'btn on' : 'btn'}>
                <BsChevronBarUp />
            </span>



        </>
    )
}

export default TopBanner;