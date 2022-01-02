/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Manikant Kumar",
  title: "Hi all, I'm Manikant",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building software with JavaScript / Reactjs / Nodejs / Python / Flask and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19iWAawcN87ety1YmwNXnn2yG3Z6E9UqR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devil-cyber",
  linkedin: "https://www.linkedin.com/in/mani360/",
  gmail: "mani2474695@gmail.com",
  facebook:
    "https://www.facebook.com/people/Manikant-Kumar-Dangi/100010144698878/",
  medium: "https://devil-cyber.medium.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end & high performace based backend"
    ),
    emoji("⚡ Machine Learning based application"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology Arunachal Pradesh",
      logo: require("./assets/images/nitap.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2018 - May 2022",
      desc: "Got 8.35 / 10.0 CGPA upto 6th semester.",
      descBullets: [
        " Took courses about OPPs, Data Structure & Algorithm, Database Management, Software Engineering, Operating Systems, ..."
      ]
    },
    {
      schoolName: "Kanti Devi Secondry High School",
      logo: require("./assets/images/bh.png"),
      subHeader: "Higher Secondary Certificate",
      duration: "August 2015 - June 2017",
      desc: "Completed my hsc with 70 / 100"
    },
    {
      schoolName: "Mahesh Academy",
      logo: require("./assets/images/mlogo.png"),
      subHeader: "Secondary School Certificate,",
      duration: "August 2013 - June 2015",
      desc: "Completed my  ssc with 10 / 10 CGPA"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",
      progressPercentage: "90%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "iNeuron.ai",
      companylogo: require("./assets/images/ine.png"),
      date: "Jan 2021 – April 2021",
      descBullets: [
        " Customized the front end of the intern on-boarding site using React.js and made itresponsive and fixed some bugs in authentication system,",
        " Created new functionality for the intern dashboard, so that intern can keep the track of project progress and team member"
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Thermelgy",
      companylogo: require("./assets/images/th.png"),
      date: "Jun 2020 – Aug 2020",
      descBullets: [
        " Developed REST API for getting data from all the remote sensors using Node.js and MongoDB",
        "Developed a service API using Node.js that keeps track of Heat Pump sensors data and integrated that API with the user dashboard"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "DEVLOPED A WEB APP TO CODE AND DEBUG AT REAL TIME WITH PEERS USING VIDEO CALL OR CHAT",
  projects: [
    {
      image: require("./assets/images/editrox.png"),
      projectName: "EditRox",
      projectDesc: "A collaborative platform to code and debug",
      footerLink: [
        {
          name: "EditRox",
          url: "https://editrox.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Student Code-In Mentor",
      subtitle:
        "Mentored more than 10 student on their project, Data Structure & Algorithm",
      image: require("./assets/images/sd.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://media-exp1.licdn.com/dms/image/C562DAQHtg9JEmLOz8w/profile-treasury-image-shrink_800_800/0/1612419508621?e=1641193200&v=beta&t=7SmSLOvW8FRe8G68g9brsehtBJdaUeIV9TyYOsgFbao"
        }
      ]
    },
    {
      title: "TensorFlow & Keras | 9.8k user",
      subtitle:
        "This is a keras & TensorFlow vscode extension that provide boilerplate for different CNN algorithm.",
      image: require("./assets/images/keras.png"),
      footerLink: [
        {
          name: "View Vs-Code Extension",
          url: "https://marketplace.visualstudio.com/items?itemName=devil-cyber.keras-snippet"
        }
      ]
    },

    {
      title: "Got Selected for AWS Machine Learning Scholarship program",
      subtitle: "Completed Course with best in class.",
      image: require("./assets/images/ud.png"),
      footerLink: [
        {
          name: "Recipient Letter",
          url: "https://drive.google.com/file/d/1c3JmR6BuHNSlxpUAI8eazgs1C6qXJND_/view?usp=sharing"
        }
      ]
    },
    {
      title: "Got 3 ⭐ at CodeChef",
      subtitle: "Solved 30+ questions on codechef till date.",
      image: require("./assets/images/code.png"),
      footerLink: [
        {
          name: "Profile",
          url: "https://www.codechef.com/users/ghostoperator"
        }
      ]
    },
    {
      title: "Got 5 ⭐ at HackerRank",
      subtitle: "Got 5 ⭐ in Python & Problem Solving",
      image: require("./assets/images/hack.png"),
      footerLink: [
        {
          name: "Profile",
          url: "https://www.hackerrank.com/mani360?hr_r=1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://devil-cyber.github.io/CodingSpace/execution-context/",
      title: " How JavaScript Execution Context Work?",
      description: "Learn the complext concept js execution context"
    },
    {
      url: "https://devil-cyber.github.io/CodingSpace/TensorFlow/",
      title: "Get started with TensorFlow",
      description: "Learn the basic of TensorFlow"
    },
    {
      url: "https://devil-cyber.github.io/CodingSpace/TensorFlow/",
      title: "Linear Regression at a glance",
      description: "Learn the core concept of linear regression"
    },
    {
      url: "https://devil-cyber.github.io/CodingSpace/confusion/",
      title: "Confusion Matrix is not so confusing 😂",
      description: "Confusion Matrix"
    },
    {
      url: "https://devil-cyber.github.io/CodingSpace/mask/",
      title: "Face Mask Detection Using Tensorflow",
      description: "Project"
    },
    {
      url: "https://devil-cyber.github.io/CodingSpace/pagerank/",
      title: "Understanding PageRank",
      description: "Indexing the web pages"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9546778777",
  email_address: "mani2474695@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
