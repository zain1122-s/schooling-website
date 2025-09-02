    import React from "react";
    import "./Programs.css";
  import { Telescope, Tent, PaintbrushVertical, FolderGit2,Medal,House } from "lucide-react";


    function Programs() {
    const cards = [
        {
        logo: <Telescope strokeWidth={1}  size={50}  color="#9dc9c5"/>,
        heading: "ART EXPLORATION",
        detail:
            "Our approach to art making for preschoolers and younger kids is age appropriate and fun.",
        },
        {
        logo: <PaintbrushVertical strokeWidth={1}  size={50}  color="#9dc9c5"/>,
        heading: "Fine Art Fundamentals",
        detail:
            "Structured as a developmental program spanning four sessions during one school year.",
        },
        {
        logo: <FolderGit2 strokeWidth={1}  size={50}  color="#9dc9c5"/>,
        heading: "Advanced Exploration",
        detail:
            "This program is designed to develop self-directed art makers, the students design their own projects.",
        },
        {
        logo: <Tent strokeWidth={1}  size={50}  color="#9dc9c5"/>,
        heading: "Spring Break Camps",
        detail:
            "Our week long school break programs are designed to give students a way to grow artistically at a more leisurely pace.",
        },
        {
        logo: <Medal strokeWidth={1}  size={50}  color="#9dc9c5"/>,
        heading: "Art Camps & Classes",
        detail:
            "Our summer art camps allow kids to explore the full variety of art media from drawing still life.",
        },
        {
        logo: <House strokeWidth={1} size={50} color="#9dc9c5"/>,
        heading: "Homeschool Art",
        detail:
            "Our homeschool art classes feature a curriculum that will develop your child’s creative and critical thinking.",
        }
    ];
    console.log("this is card", cards);

    return (
        <div className="main-program">
        <div className="program-top">
            <h1>ALL OUR PROGRAMS</h1>
            <h2>
            At the Marvegos Fine Art School We encourage creativity through art-
            Marking one's. <br /> own choices within a framework is the essence of
            creative choices
            </h2>
        </div>

        <div className="program-bottom">
            {cards.map((item, index) => (   
            <div className="program-card" key={index}>
                <div className="card-icon">{item.logo}</div>
                <h3>{item.heading}</h3>
                <p>{item.detail}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default Programs;
