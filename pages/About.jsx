import React from "react"
import bgImg from "../assets/images/about-hero.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t squeeze time when you could relax in a bar.</h1>
                <p>Our mission is to enliven your taste with the perfect watch. Our watches are recertified before each ship to ensure your event can go off without a scratch. (Straps costs extra 😉)</p>
                <p>Our team is full of watch enthusiasts who know firsthand the magic of tasting the world with watches.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your time piece is ready.</h2>
                <Link className="link-button" to="/watches">Explore our watches</Link>
            </div>
        </div>
    );
}