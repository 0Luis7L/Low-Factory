import { useState, useEffect } from "react"
import React from "react"
import { Link } from "react-router-dom"

export default function Watches () {
    const [watches, setWatches] = useState([])
    useEffect(()=> {
        fetch("/api/watches")
            .then(res => res.json())
            .then(data => setWatches(data.watches))
    }, [])

    const watchElements = watches.map(watch => (
        <div key={watch.id} className="van-tile">
            <Link to={`/watches/${watch.id}`}>
            <img src={watch.imageUrl} />
            <div className="van-info">
                <h3>{watch.name}</h3>
                <p>${watch.price}<span>/week</span></p>
            </div>
            <i className={`van-type ${watch.type} selected`}>{watch.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <div className="van-list">
                {watchElements}
            </div>
        </div>
    )
}
