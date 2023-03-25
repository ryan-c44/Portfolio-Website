import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info"><em>{education.degree}</em> <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p><p><a href={education.link} download>Academic Transcript</a></p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info"><em>{work.title}</em><span></span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        
        return <li key={skills.name}><em>{skills.name}</em></li>
      })
      var technologies = this.props.data.technologies.map(function(technologies){
        
        return <li key={technologies.name}><em>{technologies.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work / Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div>
              <div className="bars">

                <ul>
                  {skills}
                </ul>
              </div>
              <div className="bars-right">
                <ul>
                  {technologies}
                </ul>
              </div>
            </div>
          </div>


        </div>
      </section>
    );
  }
}

export default Resume;
