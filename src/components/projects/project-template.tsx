import './project-template.css';
import sticky from './../../assets/sticky.svg'; // Import the image
// Define the props type
interface ProjectDetails {
    name: string;
    title: string;
    date: any;
    note: {
      title: string;
      content: any;
    };
    coverImg: string;
    secondaryImg: string;
    problemStatement: any;
    goals: any;
    approaches: any;
    challenges: any;
    outcomes: any;
    takeaways: any;
    description: string;
    overview: string;
  }

function ProjectTemplate({projectDetails}: {projectDetails: ProjectDetails}) {
  return (
    <div className="project-template">
      <div className="inner-container heading">
          <div className="primary-heading">{projectDetails.name}</div>
          <div className="secondary-heading">{projectDetails.title}</div>
      </div>
      <div className="inner-container project-duration" style={{marginTop: "1.5rem"}}>{projectDetails.date}</div>
      <img src={projectDetails.coverImg} alt={"cover-image"} className="cover-image" />
      <div className="inner-container description" style={{paddingBottom: "4rem"}}>
        <span>{projectDetails.description}</span>
      </div>
      <div className="inner-container overview" style={{marginTop: "4rem"}}>
        <span className="overview-heading">
          Overview
        </span>
        <span className='overview-content'>
          {projectDetails.overview}
        </span>
      </div>
      <div className='inner-container project-experience' style={{marginTop: "4rem", marginBottom: "4rem"}}>
          <img src={sticky} alt="Sticky" className="sticky-image" style={{alignSelf: "normal"}}/>
          <span style={{display: 'flex', flexDirection: 'column', marginLeft: '1rem', alignItems: "flex-start"}}>
              <span style={{color: "#7f7f7f"}}>{projectDetails.note.title}</span>
              <span style={{textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem"}}>
                  {projectDetails.note.content}
              </span>
          </span>
      </div>
      <div className="inner-container problem-statement">
        <span style={{fontSize: "2rem", color: "#FFFFFFBF", marginBottom: "2rem"}}>Problem Statement</span>
        <span style={{fontSize: "1rem", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {projectDetails.problemStatement}
        </span>
      </div>
      <div className="inner-container problem-statement">
        <span style={{fontSize: "2rem", color: "#FFFFFFBF", marginBottom: "2rem"}}>Goals</span>
        <span style={{fontSize: "1rem", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {projectDetails.goals}
        </span>
      </div>
      <div className="inner-container problem-statement">
        <span style={{fontSize: "2rem", color: "#FFFFFFBF", marginBottom: "2rem"}}>Approach & Process</span>
        <span style={{fontSize: "1rem", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {projectDetails.approaches}
        </span>
      </div>
      <div className="inner-container problem-statement">
        <span style={{fontSize: "2rem", color: "#FFFFFFBF", marginBottom: "2rem"}}>Challenges and Considerations</span>
        <span style={{fontSize: "1rem", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {projectDetails.challenges}
        </span>
      </div>
      <div className="inner-container problem-statement">
        <span style={{fontSize: "2rem", color: "#FFFFFFBF", marginBottom: "2rem"}}>Outcome</span>
        <span style={{fontSize: "1rem", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {projectDetails.outcomes}
        </span>
      </div>
      <img src={projectDetails.secondaryImg} alt={"secondary-image"} className="inner-container secondary-image" />
      <div className="inner-container problem-statement">
        <span style={{fontSize: "2rem", color: "#FFFFFFBF", marginBottom: "2rem"}}>My Takeaways</span>
        <span style={{fontSize: "1rem", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {projectDetails.takeaways}
        </span>
      </div>
    </div>
  );
}

export default ProjectTemplate;