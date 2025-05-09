import gs_cover from '../../assets/images/gs_cover.png';
import gs_alt from '../../assets/images/gs_alt.png';
import ProjectTemplate from './project-template';

function GsInternship() {
    const projectDetails = {
        name: "GS Design System",
        title: "Form Pattern Documentation",
        date: <span><i className="fa-solid fa-calendar" style={{marginRight: "4px"}}></i>  June 2021 | <i className="fa-solid fa-clock" style={{marginRight: "8px", marginLeft: "4px"}}></i>8 Weeks</span>,
        description: "The Goldman Sachs Design System is customized for institutional finance and allows teams to create digital products that put clients first.",
        overview: "As part of my internship, I led the effort to document the first pattern in the design system—the Form Pattern. This project aimed to bring clarity, consistency, and scalability to form design across the firm. By combining internal insights with industry research and close collaboration with the design system team, I created a comprehensive resource that could be leveraged by designers, developers, and product managers.",
        note: {
            title: "Note",
            content: 
            <>
                <span>The documentation was originally published on the external-facing design portal (design.gs.com) in September 2021. However, as of 2024, the portal is no longer publicly accessible.</span>
            </>
            ,
        },
        problemStatement: 
        <>
            <span>As the design system continued to evolve, there existed an opportunity to support scalability, ensure alignment across teams, and reduce repeated effort during the implementation of common interface patterns. While forms were already widely used across products, there hadn’t yet been a formalized reference for how to design or implement them within the system. </span>
        </>,
        coverImg: gs_cover,
        secondaryImg: gs_alt,
        goals: 
        <>
        <ul style={{paddingLeft: "1rem", listStyle: "numbers", display: "flex", flexDirection: "column",gap: "0.5rem"}}>
            <li>Create the first documented pattern to set the foundation for future design system contributions.</li>
            <li>Establish a clear, scalable framework for designing accessible and consistent forms.</li>
            <li>Support faster and more confident decision-making across teams using forms.</li>
            <li>Provide value to designers as the primary audience, while also making it usable for developers and product managers.</li>
        </ul>
        </>,
        approaches: 
        <>
        <span>To build a well-rounded and authoritative pattern, I followed a multi-layered design process:</span>
        <ul style={{paddingLeft: "1rem", listStyle: "numbers", display: "flex", flexDirection: "column",gap: "0.5rem"}}>
            <li>Benchmarking: I reviewed and analyzed form-related documentation from leading design systems including IBM Carbon, Atlassian, Salesforce Lightning, Google’s Material Design, and Apple’s Human Interface Guidelines. This helped identify best practices, commonalities, and different ways systems approached form design.</li>
            <li>Internal Research: I spoke with designers across various divisions within the firm to understand how forms were currently being created in practice. This helped ground the work in real use cases and internal needs.</li>
            <li>Secondary Research: I consulted design blogs, academic research papers, and select books to deepen my understanding of user experience and usability best practices related to forms—particularly around accessibility, cognitive load, and mobile behavior.</li>
            <li>Collaboration: I worked closely with the design system team to synthesize findings and shape the structure of the documentation. We aligned on language, hierarchy, and the level of prescriptiveness suitable for different contexts.</li>
            <li>Design & Iteration: I created visual examples using components from our design system to accompany each guideline, clearly illustrating both recommended and discouraged practices. I then presented the documentation to various design groups for feedback and refined it accordingly.</li>
        </ul>
        </>,
        challenges: "One of the key challenges was determining how prescriptive the documentation should be. While consistency was a priority, some design decisions—like label placement or form structure—were highly context-specific. Striking the right balance between flexibility and guidance was essential to keep the documentation usable across teams.",
        outcomes: 
        <>
        <span>The final documentation offered a comprehensive and structured approach to form design using the design system components. It covered topics such as form anatomy, layout types (including full-page, modal, and side panel), spacing, responsive behavior, column layouts, and section grouping. It also addressed strategies for long forms such as progressive disclosure, multi-step flows, and accordion sections. Guidelines around labels—including placement and the use of optional or required indicators—were defined, along with recommendations for input fields, help text, button placement and hierarchy, error handling and validation, accessibility considerations, and mobile-specific adaptations.</span>
        <span>To ensure clarity and usability, each section included visual examples along with “do’s and don’ts,” using components from the design system. The documentation struck a balance between being prescriptive and allowing flexibility, especially where context-specific decisions were necessary.</span>
        <span>The documentation was published and made publicly available on the external-facing design portal-design.gs.com.</span>
        </>,
        takeaways: 
        <>
        <span>This was my first corporate design experience, offering valuable insight into how large organizations operate and how enterprise tools support everyday work. I gained a clearer understanding of the many practical roles forms play in this environment—from simple requests to complex workflows—and the importance of clarity and consistency at scale.</span>
        <span>Along the way, I developed a stronger appreciation for how design systems function behind the scenes, and the crucial role they play in helping teams scale design consistently and efficiently. I also saw the impact of bringing together multiple perspectives—internal and external, theoretical and practical—to create something both usable and meaningful.</span>
        <span>This process deepened my understanding of form design: how small interface decisions affect usability, how to balance structure with flexibility, and how thoughtful documentation can drive alignment and efficiency across teams.</span>
        </>,
    }
  return (
    <ProjectTemplate projectDetails={projectDetails}></ProjectTemplate>
  );
}

export default GsInternship;