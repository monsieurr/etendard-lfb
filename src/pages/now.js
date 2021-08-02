import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'


const NowPage = () => {
    return(
        <Layout>
            <Seo title="Now" />
            <h2>Programming</h2>
            <p>Nowadays I have been working on some <a href="https://github.com/monsieurr" alt="My Github Link">personal coding projects.</a></p>
            <p>I made this website very recently (end of july 2021) and am keeping it updated, blog posts are coming.</p>
            <p>I am also working on my <a href="https://www.monsieur.space/" alt="Link to monsieur.space">new creative website</a>, letting go of my previous one (otium.network) to create a more interesting and personal experience.</p>
            <p>I like to challenge myself and sometimes do implement the ideas I get daily (I am writing them all but as time is limited and ideas aren't all meant to be
            developped).</p>
            <p>Recently I started doing some <a href="https://leetcode.com/monsieurr/" alt="My Leetcode">Leetcode</a> problem solving every day, keeping myself trained and efficient at writing algorithms. You can find my solutions on this <a href="https://gitlab.com/monsieurr/my_leetcode_solutions" alt="Personal Leetcode solutions Gitlab">Gitlab Repository</a> I update every now and then.</p>
            <p>I'm staying updated on the latest techs, often exploring new tools or framework when I am not improving on what I already know.</p>

            <h2>Making art</h2>
            <p>Outside of programming every day and thinking about computer science and tech, I love making art, particularly using photography but also music composition and 3D modeling.</p>
            <p>Nowadays I like to go outside and take photos whenever I can, edit the best ones using Lightroom and Photoshop and then publishing at various places on the web.</p>
            <p>My <a href="https://www.monsieur.space/" alt="Link to monsieur.space">new creative website</a> I talked about earlier has some of my most recent photography work.</p>

            <h2>Learning new languages</h2>
            <p>As a perpetual learner and </p>

            <h2>Reading</h2>
            

            <h2>Friends</h2>
            <p>Friends are really important so here's a list of my friends websites you can check out, no favourite order of course it's random</p>
        </Layout>
    )
}

export default NowPage