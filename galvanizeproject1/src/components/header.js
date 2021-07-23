import React from 'react'
import ReactIcon from '../static/ReactIcon.svg'
import './Header.css';

export default function header() {
    return (
        <div>
            <nav class="navbar navbar-dark">
                <strong>
                    <a class="navbar-brand" href="#">
                        <img src={ReactIcon}
                            width="30"
                            height="30"
                            class="d-inline-block align-top"
                            alt="" />
                        Partition Calculator
                    </a>
                </strong>


            </nav>
        </div>
    )
}
