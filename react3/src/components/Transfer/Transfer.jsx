import React, { Component } from "react";
// import "./style.sass";
// import { getRandomIntInclusive } from "./../../functions/random";

export default class Table extends Component {
    state = Object.assign(
        {
            borderWidth: 0,
        },
        this.props
    );
    render() {
        let { list = [], borderWidth } = this.state;

        return list.length ? (
            <table style={{ borderWidth }}>
                <tbody>
                {list.map((item, index) => (
                    <tr key={index} className={item.active && `item-active`}>
                        {Object.keys(item)
                            .filter((k) => k !== `active`)
                            .map((k, i) => (
                                <td key={i}>{item[k]}</td>
                            ))}
                    </tr>
                ))}
                </tbody>
            </table>
        ) : null;
    }
}