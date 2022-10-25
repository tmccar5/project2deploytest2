import {useState} from 'react';

function GrabDataTest() {
    const [state, setState] = useState([])

    const getData = async () => {
        console.log('We got clicked!!')
        const data = await fetch("/blog")
        console.log('data label hahaha!', data)
        const cleanData = await data.json()

        console.log('clean data', cleanData)
        setState(cleanData)
    }

    console.log('State !!!!!!!!!', state)

    return(

        <div>
            <button onClick={getData}>Grab Blog Posts!</button>
            {state.map((eachThing)=> {
                return (
                    <h1>{eachThing.title}</h1>
                )
            })}
        
        </div>
    );

}
export default GrabDataTest;