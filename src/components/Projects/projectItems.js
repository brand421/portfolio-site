import propertySite from "./projectImages/property_management_site.jpg";
import songoftheDay from "./projectImages/songoftheday.jpg";
import todoApp from "./projectImages/to-do-list.jpg";
import blogSite from "./projectImages/blog_site.jpg";

const projectItems = [
  {
    projectName: "Song of the Day",
    projectImg: songoftheDay,
    projectDescr:
      "A website that utilizes APIs, React, Node, and Express to generate a song of the day",
    projectLink: "https://wordsongoftheday.com/",
    projectGithub: "https://github.com/brand421/Song-of-the-day",
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
  {
    projectName: "Blog Site",
    projectImg: blogSite,
    projectDescr: "A blog site that saves composed posts to a DB",
    projectLink: "",
    projectGithub: "https://github.com/brand421/Blog-Site",
  },
];

export default projectItems;
