import './Projects.css'
import SectionHeader from './sectionHeader'
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/300.css"

export default function Projects() {
  return (
    <div>
      <SectionHeader 
          title="PROJECTS"
          headline="Data Case Studies"
          description="Learn how we’ve served clients needs in various fields"
        />
        <div className="Projects">
            <a href="/case-study" className="project">
                <div className="icon">
                    <img src="./transportCase.png" alt="" />
                </div>
                <p className="type">CASE STUDY</p>
                <p className="caseTitle">Urban Transport Complaints</p>
            </a>
            <a href="/case-study" className="project">
                <div className="icon">
                    <img src="./roseCase.png" alt="" />
                </div>
                <p className="type">CASE STUDY</p>
                <p className="caseTitle">Damous X Rose Inc</p>
            </a>
        </div>
    </div>
  )
}
