import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'


const friendsList = [
    {
        name: 'Stending',
        desc: 'bettercollmatt.com',
        link: 'https://bettercollmatt.com/',
    },
    {
        name: 'Uj',
        desc: 'ujj.space',
        link: 'https://ujj.space/',
    },    
    {
        name: 'vmonot',
        desc: 'vmonot.dev',
        link: 'https://vmonot.dev/',
    },    
    {
        name: 'Eresia',
        desc: 'lepesant.me',
        link: 'https://lepesant.me/fr',
    },    
    {
        name: 'Akkes',
        desc: 'akkes.fr',
        link: 'https://akkes.fr/',
    },    
    {
        name: 'AryaJ',
        desc: 'www.aryaj.com',
        link: 'https://www.aryaj.com/',
    },
]

function shuffleArray(arr) {
    var ctr = arr.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

const friendsListShuffled = shuffleArray(friendsList)

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
            <p>I am currently learning Italian, not bad at reading it but can't really speak it yet.</p>

            <h2>Reading</h2>
            <p>I am currently reading  : </p>
            <ul>
                <li><a href="https://www.goodreads.com/book/show/9536015-the-art-of-photography" alt="The Art of Photography"><cite>The Art of Photography: An Approach to Personal Expression</cite></a></li>
                <li><a href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow" alt="Thinking Fast and Slow"><cite>Thinking Fast and Slow</cite></a></li>
            </ul>

            <h2>Friends</h2>
            <p>Friends are really important so here's a list of my friends websites you can check out, no favourite order of course (it's random)</p>

            <ul className="friendList">
                {
                    friendsListShuffled.map((friend) => (
                        <li><a href={friend.link} alt={friend.desc}>{friend.name}</a></li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export default NowPage