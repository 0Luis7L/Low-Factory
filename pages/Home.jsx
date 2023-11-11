import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the scotch, we got the watch.</h1>
            <p>Add adventure to your life by joining the #lowFactory movement. Lease the perfect watch to make your perfect scotch.</p>
            <Link to="vans">Find your watch</Link>
        </div>
    )
};