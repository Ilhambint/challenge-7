import React, { useEffect, useState } from "react";
import Head from 'next/head'
import axios from 'axios'

export default function input() {
    const url = ""
    const [data, setData] = useState({name: "", age: "", email: ""});

    function handle(e) {
        const newdata = {
            ...data
        }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <div>
                <form>
                    <input
                        onChange={(e) => handle(e)}
                        id="name"
                        value={data.name}
                        placeholder="name"
                        type="text"></input> <br/>

                    <input
                        onChange={(e) => handle(e)}
                        id="age"
                        value={data.afe}
                        placeholder="age"
                        type="text"></input><br/>

                    <input
                        onChange={(e) => handle(e)}
                        id="email"
                        value={data.email}
                        placeholder="email"
                        type="email"></input>
                </form>
            </div>

            

        </div>

    )
}
