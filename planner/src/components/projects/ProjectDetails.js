import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aspernatur a, quo fugiat aut id eveniet totam odio, accusantium voluptates adipisci aperiam temporibus deleniti, sed ipsum at aliquam debitis mollitia.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Hosted by</div>
                    <div>2nd Septemper</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
