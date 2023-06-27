import propertySite from "./projectImages/property_management_site.jpg";
import noteApp from "./projectImages/keeper_app.png";
import todoApp from "./projectImages/to-do-list.jpg";

const projectItems = [
  {
    projectName: "Note-Taking App",
    projectImg: noteApp,
    projectDescr:
      "A note-taking app that utilizes React useState to render notes",
    projectLink: "http://www.google.com",
    projectGithub: "https://github.com/brand421/keeper-app",
  },
  {
    projectName: "To-Do List",
    projectImg: todoApp,
    projectDescr:
      "A to-do list app created using MongoDB, NodeJS, and Mongoose",
    projectLink: "",
    projectGithub: "https://github.com/brand421/To-Do-List-v2",
  },
  {
    projectName: "Property Management Site",
    projectImg: propertySite,
    projectDescr:
      "A website made with HTML, CSS, and Bootstrap, with some Javascript functionality",
    projectLink: "",
    projectGithub: "https://github.com/brand421/Property-Management-Site",
  },
];

export default projectItems;
