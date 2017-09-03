/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var DATA = '%data%';

 var bio = {
   name: 'Chen Lu',
   role: 'AI/Machine Learning Enthusiat',
   contacts: {
     mobile: '314-402-8727',
     email: 'lvchen727@gmail.com',
     github: 'lvchen727',
     location: 'St. Louis, USA'
   },
   welcomeMessage: 'Hello! I am Chen Lu! I am PhD researcher in Biochemistry with '+
                  'joint MS in Computer Science in Washington University in St. Louis. '+
                  'My current interests are in deep learning, machine learning and '+
                  'artificial intelligence.' ,
   skills: ['Machine Learning', 'Data structures and Algorithms', 'Front-end/Back-end Web Development',
            'Bioinformatics', 'Cancer Research', 'Analytical Chemistry'],
   biopic: 'images/Chen.jpg',
   display: function() {
     var formattedName = HTMLheaderName.replace(DATA, bio.name);
     var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

     var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
     var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
     var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    //  var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
     var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

     var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
     var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

     $('#header').prepend(formattedName + formattedRole);
     $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
       formattedGithub + formattedLocation);
     $('#header').append(formattedBioPic);
     $('#header').append(formattedWelcomeMessage);

     if (bio.skills.length > 0) {
       $('#header').append(HTMLskillsStart);

       for (var i = 0, len = bio.skills.length; i < len; i++) {
         var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

         $('#skills').append(formattedSkills);
       }
     }
   }
 };

 var work = {
   jobs: [
     {
       employer: 'Washington University in St. Louis',
       title: 'PhD Researcher',
       location: 'St. Louis, USA',
       dates: 'September 2012 - Present',
       description: 'I work in Saiku that offers a user friendly, web based ' +
                    'analytics solution that lets users, quickly and easily ' +
                    'analyse corporate data and create and share reports. The ' +
                    'solution connects to a range of OLAP Servers including ' +
                    'Mondrian, Microsoft Analysis Services, SAP BW and Oracle ' +
                    'Hyperion and can be deployed rapidly and cost effectively ' +
                    'to allow users to explore data in real time.'
     },
     {
       employer: 'Washington University in St. Louis',
       title: 'Graudate Teaching Assistant',
       location: 'St. Louis, USA',
       dates: 'September 2012 - May 2014',
       description: 'I worked (part-time) researcher at NUTES/UEPB, where I had ' +
                    'the opportunity to study and develop a software of ' +
                    'electrocardiograms (ECG) and a web app for view medical records.'
     }
   ],
   display: function() {
     if (work.jobs.length > 0) {
       for (var i = 0, len = work.jobs.length; i < len; i++) {
         var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
         var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
         var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
         var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
         var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;

         $('#workExperience').append(HTMLworkStart);
         $('.work-entry:last').append(formattedEmployerTitle);
         $('.work-entry:last').append(formattedDates);
         $('.work-entry:last').append(formattedLocation);
         $('.work-entry:last').append(formattedDescription);
       }
     }
   }
 };

 var projects = {
   projects: [
     {
       'title': 'Notifier for Udacity Reviewer',
       'dates': 'July 2016',
       'description': 'The extension checks for new notifications every minute ' +
                      'and displays notifications that arrived after the last ' +
                      'check if there are any. Clicking on the notification ' +
                      'opens it on Udacity Dashboard.',
       'images': ['images/notifier-udacity-1.png', 'images/notifier-udacity-2.png']
     },
     {
       'title': 'CSS Flexbox snippets',
       'dates': 'Dezember 2015',
       'description': 'CSS Flexbox for Sublime Text and Atom editor. ' +
                      'With more than 3K download.',
       'images': ['images/css-flexbox-snippets.gif']
     },
     {
       'title': 'A Saiku REST API client for Node.js',
       'dates': 'June 2015',
       'description': 'This client is designed to make it easy for your Node.js ' +
                      'application to request specific resources from Saiku. ' +
                      'It uses a query builder-style syntax to let you craft ' +
                      'the request being made to the Saiku endpoints, then ' +
                      'returns the API server is response to your application ' +
                      'as a JavaScript object.',
       'images': []
     },
     {
       'title': 'SIGSAB - Sistema de Gestão da Informação e do Conhecimento ' +
                'do Semiárido Brasileiro',
       'dates': 'September 2014',
       'description': 'This projects aim is to institutionalize, consolidate ' +
                      'and operationalize a computerized information and ' +
                      'knowledge management system, through a databank linked ' +
                      'to a Geographical Information System (Sistema de ' +
                      'Informações Geográficas – SIG) to generate scientific ' +
                      'information connected to popular knowledge, aiming at ' +
                      'subsidizing the formulation of policies that match the ' +
                      'regions context. Another goal is to support other ' +
                      'strategic studies and offer relevant services to policy ' +
                      'and decision makers.',
       'images': ['images/sigsab.png']
     },
     {
       'title': 'Saiku UI Plugin Boilerplate',
       'dates': 'July 2014',
       'description': 'A jump-start for Saiku UI plugins development.',
       'images': []
     },
     {
       'title': 'CSS Comments snippets',
       'dates': 'May 2014',
       'description': 'CSS comments snippets for Sublime Text. ' +
                      'With more than 7K download.',
       'images': ['images/css-comments-snippets.gif']
     },
     {
       'title': 'Web App Boilerplate',
       'dates': 'August 2013',
       'description': 'Project designed to create web applications in ' +
                      'WebView to Android.',
       'images': []
     },
     {
       'title': 'Meu Drink App for Windows 8',
       'dates': 'May 2013',
       'description': 'Meu Drink application offers its users the best drink ' +
                      'recipes. App available for download in the Windows ' +
                      'Store Brazil.',
       'images': ['images/meu-drink-app-win8.jpeg']
     },
     {
       'title': 'Tic tac toe Paper App for Windows 8',
       'dates': 'April 2013',
       'description': 'Classic game tic tac toe for two players (not online). ' +
                      'The player who succeeds in placing three respective ' +
                      'marks (X and O) in a horizontal, vertical, or diagonal ' +
                      'row wins the game.',
       'images': ['images/tic-tac-toe-paper-app-win8.jpeg']
     },
     {
       'title': 'Descontos na Net App for Windows 8',
       'dates': 'March 2013',
       'description': 'The Application Descontos na Net its users the best ' +
                      'offers from 10 shops of the largest internet e-commerce ' +
                      'in Brazil. App available for download in the Windows ' +
                      'Store Brazil.',
       'images': ['images/descontos-na-net-app-win8.jpeg']
     },
     {
       'title': 'Game Hero Eros - GGJ 2013',
       'dates': 'January 2013',
       'description': 'The Global Game Jam (GGJ) is the world is largest game ' +
                      'jam event (game creation) taking place around the world ' +
                      'at physical locations. It is all condensed into a 48 ' +
                      'hour development cycle. The GGJ encourages people with ' +
                      'all kinds of backgrounds to participate and contribute ' +
                      'to this global spread of game development and creativity.',
       'images': ['images/game-hero-eros.jpg']
     },
     {
       'title': 'SENAI Student Portal',
       'dates': 'July 2012',
       'description': 'Web system developed at SENAI-PB, for students ' +
                      'visualize class schedules, notes and fill ' +
                      'institutional forms.',
       'images': []
     },
     {
       'title': 'SGM - Sistema Gerenciador de Metas',
       'dates': 'May 2011',
       'description': 'Web system developed at SENAI-PB to work in the ' +
                      'strategic management of the institution.',
       'images': []
     },
     {
       'title': 'Site Descontos na Net',
       'dates': 'May 2010',
       'description': 'Web site that gathers coupons of the largest e-commerce ' +
                      'stores in Brazil.',
       'images': []
     }
   ],
   display: function() {
     if (projects.projects.length > 0) {
       for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
         var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
         var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
         var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

         $('#projects').append(HTMLprojectStart);
         $('.project-entry:last').append(formattedTitle);
         $('.project-entry:last').append(formattedDates);
         $('.project-entry:last').append(formattedDescription);

         for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
           var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

           $('.project-entry:last').append(formattedImage);
         }
       }
     }
   }
 };

 var education = {
   schools: [
     {
       'name': 'Facisa - Faculdade de Ciências Sociais e Aplicadas',
       'location': 'Campina Grande, Paraíba, Brazil',
       'degree': 'Bachelor of Computer (BSc.), Information Systems',
       'majors': ['Information Systems'],
       'dates': '2009 - 2015',
       'url': 'http://www.cesed.br'
     }
   ],
   onlineCourses: [
    {
      'title': 'HTML5 - Homologado pelo W3C',
      'school': 'Microsoft Virtual Academy',
      'dates': 'April 2012',
      'url': 'https://mva.microsoft.com/pt-br/training-courses/html5-homologado-pelo-w3c-8551?l=ZbUEQe10_1804984382'
    },
    {
      'title': 'React for Beginners',
      'school': 'Wes Bos',
      'dates': 'November 2015',
      'url': 'https://reactforbeginners.com'
    }
   ],
   display: function() {
     if (education.schools.length > 0 || education.onlineCourses.length > 0) {
       for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
         var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
         var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
         var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
         var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
         var formattedNameDegree = formattedName + formattedDegree;

         $('#education').append(HTMLschoolStart);
         $('.education-entry:last').append(formattedNameDegree);
         $('.education-entry:last').append(formattedSchoolDates);
         $('.education-entry:last').append(formattedLocation);

         for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
           var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

           $('.education-entry:last').append(formattedMajor);
         }
       }

       $('#education').append(HTMLonlineClasses);

       for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
         var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
         var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
         var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
         var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
         var formattedTitleSchool = formattedTitle + formattedSchool;

         $('#education').append(HTMLschoolStart);
         $('.education-entry:last').append(formattedTitleSchool);
         $('.education-entry:last').append(formattedOnlineDates);
         $('.education-entry:last').append(formattedUrl);
       }
     }
   }
 };

 bio.display();
 work.display();
 projects.display();
 education.display();
 $('#mapDiv').append(googleMap);
