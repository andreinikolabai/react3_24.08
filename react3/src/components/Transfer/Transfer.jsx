import React, { useState} from "react";
import './style.sass'

import Buttons from './Buttons';

export default function Transfer() {
    const [listFirst, setListFirst] = useState([
        {
            id: 1,
            title: `Task 1`,
        },
        {
            id: 2,
            title: `Task 2`,
        },
        {
            id: 3,
            title: `Task 3`,
        },
        {
            id: 4,
            title: `Task 4`,
        },
        {
            id: 5,
            title: `Task 5`,
        },
        {
            id: 6,
            title: `Task 6`,
        },
        {
            id: 7,
            title: `Task 7`,
        },
        {
            id: 8,
            title: `Task 8`,
        },
        {
            id: 9,
            title: `Task 9`,
        },
        {
            id: 10,
            title: `Task 10`,
        },
    ]);

    const [listSecond, setListSecond] = useState([]);

    const [listThird, setListThird] = useState([]);

    const transferFromFirstToSecond = () => {
        setListSecond(prevState => [listFirst[0], ...prevState]);
        setListFirst(prevState => prevState.slice(1));
    }

    const transferFromSecondToFirst = () => {
        setListFirst(prevState => [listSecond[0], ...prevState]);
        setListSecond(prevState => prevState.slice(1));
    }

    const transferFromSecondToThird = () => {
        setListThird(prevState => [listSecond[0], ...prevState]);
        setListSecond(prevState => prevState.slice(1));
    }

    const removeLastItem = () => {
        setListThird(prevState => prevState.slice(0,-1));
    }


    // useEffect(() => {
    //     console.log(`in useEffect for listFirst`);
    //     // listFirst.length<3 ? setBgListFirst(`crimson`) : setBgListFirst(null);
    // }, [listFirst])
    //
    // useEffect(() => {
    //     console.log(`in useEffect for listSecond`);
    // }, [listSecond])


    return <div className="container">
        <div className="container_list">
            <ul>
                {listFirst.map((item,index) => <li key={index}>{item.title}</li>)}
            </ul>
            {listFirst.length
                ? <Buttons btns={[
                    {text: `Transfer first to right`, action: transferFromFirstToSecond}
                ]} />
                : null}
        </div>

        <div className="container_list">
            <ul>
                {listSecond.map((item,index) => <li key={index}>{item.title}</li>)}
            </ul>
            {listSecond.length
                ? <Buttons btns={[
                    {text: `Transfer first to left`, action: transferFromSecondToFirst},
                    {text: `Transfer first to right`, action: transferFromSecondToThird}
                ]} />
                : null}
        </div>

        <div className="container_list">
            <ul>
                {listThird.map((item,index) => <li key={index}>{item.title}</li>)}
            </ul>
            {listThird.length
                ? <Buttons btns={[
                    {text: `Remove last item`, action: removeLastItem}
                ]} />
                : null}
        </div>

    </div>;
}