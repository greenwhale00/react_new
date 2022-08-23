import Some from "../some";

const Test = ({ list, age, name, onClick }) => {
    console.log(onClick)
    return (
        <div>
            <button onClick={onClick}>^^</button>
            <h2>
                My {list} {age} 친구 {name} List
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>


            </h2>
            <Some list={list} />
            <ul>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>
    )

}

export default Test;