"use strict";
const uuidv4 = require("uuid/v4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Skills",
      [
        {
          id: uuidv4(),
          description: "3D Modeling",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "3Ds Max",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "AJAX",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "AWS (Amazon Web Services)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Akka",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Android",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Angular",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Ansible",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Apache",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Architecture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Awk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Azure",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "BSD Unix",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Balsamiq",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Bash",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Big Data",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Blender",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Blockchain",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Bootstrap",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "C",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "C#",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "C++",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "CSS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "CSS Grids",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "CakePHP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Chef",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Clojure",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Clusto",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Cocoa",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Coffeescript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "CosmosDB",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Cryptocurrency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Cryptography",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Cucumber",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "D3.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Data Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Data Visualization",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Datomic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "DevOps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Django",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Docker",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Dojo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Drupal",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "ES6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Elixir",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Ember.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "F#",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Firebase",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Firmware",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Flash",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Flask",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Flexbox",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "GPS Sensors",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Game Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Gameplay",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Google Cloud",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Grails",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "GraphQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Groovy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Gulp",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "HAML",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "HTML",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Hack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Hadoop",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Haskell",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Hive",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "IBM Cloud",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "InDesign",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "InVision",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "J2EE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "JQuery",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "JSON",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Jade",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Java",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "JavaScript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Jenkins",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Jinja2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Kafka",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Keras",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Kotlin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "LAMP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Laravel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Linux / Unix",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Load Testing",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Lua",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "MATLAB",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Malware",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "MariaDB",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Maven",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Maya",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Microservices",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Mithrill.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "MongoDB",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "MySQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Networking",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Node",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "NoSQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Numpy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "OmniGraffle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "OpenAI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "OpenEdge",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "OpenGL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Oracle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "PHP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Perl",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Photoshop",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Pip",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Polymer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "PostgreSQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Powershell",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Prototyping",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Puppet",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Python",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "R",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Radar",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Redis",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Redshift",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "React.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Redux.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Require.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Robotics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Rust",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "SASS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "SQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "SQLite",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "SSIS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Scala",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Security",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Sensors",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Sharepoint",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Silverlight",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Smalltalk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Smart Home",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Socket",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Sonar",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Spark",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Sphinx",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Spring",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Stapes.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Struts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Stylesheets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Swift",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Swing",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Tableau",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "TechOps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "TerraForm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Travis",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "UI Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "UX Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "UX Research",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Unity",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Usability",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "VMware",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Wakewords",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Watir",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Watson",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Wearables",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Windows",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "XML",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Xamarin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Yii",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "backbone.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "coffescript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "express.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "grunt",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "jasmine",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "knockout",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "scipy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "three.js",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "vue.js",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Skills", null, {});
  }
};
