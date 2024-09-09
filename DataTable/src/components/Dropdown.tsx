import { useState } from "react";

export default function Dropdown({end,setEnd,start,setStart}) {
    function handleChange (e) {
        setStart(0)
        setEnd(e.target.value)
    }
    return (
        <form >
            <select onChange={handleChange}>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={10}>10</option>
            </select>
        </form>
    );
}