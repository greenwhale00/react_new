const DATA = [
    { id: 1, name: '김혜림', age: 7, sleep: false },
    { id: 2, name: '주혜림', age: 17, sleep: true },
    { id: 3, name: '윤혜림', age: 27, sleep: true }
]


const List = () => {
    return (

        <ul>
            {
                DATA.map(
                    (it, idx) =>
                        <li key={it.id}>
                            {idx}번 {it.name}은 {it.age}살 {it.sleep ? 'sleeping' : 'playing'}
                        </li>
                )

            }
        </ul>


    )

}

export default List;