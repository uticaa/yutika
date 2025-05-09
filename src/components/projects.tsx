import './projects.css';
import cover from '../assets/images/cover.png'; // Import the image
import mess from '../assets/images/mess.png'; // Import the image
import gs_screen from '../assets/images/gs_screen.png'; // Import the image
import atom_ei from '../assets/images/atom_ei.png'; // Import the image
import virtual_classroom from '../assets/images/virtual_classroom.png'; // Import the image
import odyssey from '../assets/images/odyssey.png'; // Import the image

import sticky from '../assets/sticky.svg'; // Import the image

function Projects() {
  const projectData = [
    {
      id: 1,
      image: gs_screen, 
      name: 'Form Pattern Documentation',
      type: 'Goldman Sachs | Internship',
      description: 'My experience working on the form patterns documentation for the GS design system.',
      infoButton: 'Under NDA',
      icon: <i className="fa-solid fa-lock"></i>,
      link: null
    },
    {
      id: 2,
      image: atom_ei,
      name: 'Atom Meditation Mobile App',
      type: 'Atom EI | Internship',
      description: 'Solutions for various design problems within Atom EI - a meditation application making use of behavioural science, gamification and AI.',
      infoButton: 'Coming Soon',
      icon: <i className="fa-solid fa-bolt"></i>,
      link: null
    },
    {
      id: 3,
      image: cover, 
      name: 'Connection Aid',
      type: 'Delhi Govt. | Internship',
      description: 'An application which serves as a link between substance abusers, counsellors and their family members.',
      infoButton: 'Case Study',
      icon: <i className="fab fa-behance"></i>,
      link: "https://www.behance.net/gallery/96335877/Connection-Aid-UIUX"
    },
    {
      id: 4,
      image: virtual_classroom,
      name: 'Virtual Classroom',
      type: 'NIFT | Academic Project',
      description: 'A systems thinking approach to designing a solution for the NIFT Hyderabad Fashion Communication virtual classroom.',
      infoButton: 'Case Study',
      icon: <i className="fab fa-google-drive"></i>,
      link: "https://drive.google.com/file/d/11CD_8AWNKhIJUMeIbeuHgPJ9_NsaEuPx/view"
    },
    {
      id: 5,
      image: mess,
      name: 'NIFT Mess',
      type: 'NIFT | Academic Project',
      description: 'A solution for the NIFT mess to provide a safe and secure eating experience for students when they return to college after the pandemic.',
      infoButton: 'Coming Soon',
      icon: <i className="fa-solid fa-bolt"></i>,
      link: null
    },
    {
      id: 6,
      image: odyssey,
      name: 'Odyssey Buddy',
      type: 'NIFT | Academic Project',
      description: 'A travel application that connects tourists with locals to solve their problems.',
      infoButton: 'Case Study',
      icon: <i className="fab fa-behance"></i>,
      link: "https://www.behance.net/gallery/82132473/Travel-App-Concept"
    },
  ];

  return (
    <section className="page-section projects" id="projects">
      <div className="projects-title">
        <span className="primary">Featured Work</span>
        <a href="https://www.behance.net/uticaa" target="_blank" rel="noopener noreferrer" aria-label="Behance" className='secondary'>More Work <i className="fas fa-external-link-alt"></i> </a>
      </div>
      <div className='projects-disclaimer'>
        <img src={sticky} alt="Sticky" className="sticky-image" style={{alignSelf: "normal"}}/>
        <span style={{display: 'flex', flexDirection: 'column', marginLeft: '1rem', alignItems: "flex-start"}}>
          <span style={{color: "#7f7f7f"}}>Note</span>
          <span style={{textAlign: "left"}}>
          Most of my work is under an NDA. Please <a href="#contact" style={{textDecoration: "underline", color: "white"}}>reach out</a> if you have any questions! :)
          </span>
        </span>
      </div>
      <div className="projects-grid">
        {projectData.map((project) => (
          <a href={project.link !== null ? project.link : "javascript:void(0)"} className={`project-link ${project.link === null ? 'locked-cursor': ''}`} rel="noopener noreferrer" aria-label={project.name} key={project.id}>
            <div key={project.id} className="project-tile">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <span className="project-name">{project.name}</span>
              <span className="project-type">{project.type}</span>
              <span className="project-description">{project.description}</span>
              <span className="hero-job" style={{marginTop: 'auto', fontSize: '0.75rem'}}>
                {project.infoButton} {project.icon}
              </span>
            </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;