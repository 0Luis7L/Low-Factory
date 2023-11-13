import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function WatchDetail() {
    const params = useParams()
    const [ watch, setWatches ] = useState(null)
    console.log(params)

    useEffect(() => {
        fetch(`/api/watches/${params.id}`)
        .then(res => res.json())
        .then(data => setWatches(data.watches))
    }, [params.id])
    return (
        <div className="van-detail-container">
            {watch ? (
                <div className="van-detail">
                    <img src={watch.imageUrl} />
                    <i className={`van-type ${watch.type} selected`}>{watch.type}</i>
                    <h2>{watch.name}</h2>
                    <p className="van-price"><span>${watch.price}</span>/week</p>
                    <p>{watch.description}</p>
                    <button className="link-button">Lease this Watch</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}