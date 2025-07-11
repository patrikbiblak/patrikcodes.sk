import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { NavLink } from "react-router-dom";
import "../styles/aboutpage.css";

const AboutPage = () => {

    return (
        <div className="about-page container">
            <div className="aboutme-heading">
                <h1>Kto som</h1>
                <p>Som mladý a nadšený front-end developer ktorý kladie dôraz na transparentnú komunikáciu, dodržiavanie termínov a vysokú kvalitu.</p>
                <p>Vytváram rýchle a responzívne webové stránky presne podľa vašich predstáv, ktoré plynulo fungujú na rôznych zariadeniach. Môžete sa na mňa spoľahnúť, že vaše nápady premením na pútavú online prezentáciu, ktorá osloví vašich návštevníkov.</p>
                <p>Potrebujete niekoho, kto zvládne developerské šprinty? Ste na správnom mieste!</p>
            </div>

            <div className="logo-carousel">
                <div className="logo-track">
                    {[SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub].map((Icon, i) => (
                    <Icon key={i} size={48} />
                    ))}
                    {[SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub].map((Icon, i) => (
                    <Icon key={i+6} size={48} />
                    ))}
                </div>
            </div>

            <div className="aboutme-text-row">
                <img className="aboutme-text-item" src='images/bpaatrik.png' alt="me" />
                <div className="aboutme-text-item text-gap">
                    <h3>
                        <NavLink to="https://www.instagram.com/bpaatrik/">@bpaatrik</NavLink>
                    </h3>
                    <p>Káva, kód a disciplína tvoria môj dokonalý trojboj. Do každého projektu vkladám stovku percent, aby výsledok bežal hladko a bez bugov. Po práci ma šport udrží v kondícii a pomáha mi udržať si čistú myseľ.</p>
                    <p className="hashtags">#front-end &nbsp; #self-improvement &nbsp; #athlete</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;