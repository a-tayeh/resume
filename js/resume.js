function viewModel() {
    this.firstName = "Ali";
    this.lastName = "Tayeh";
    this.fullName = this.firstName + " S. " + this.lastName;

    this.phone = "804-325-0176";
    this.email = "alistayeh@gmail.com";
    this.github = "github.com/a-tayeh";
    this.website = "https://a-tayeh.github.io/resume/"

    this.sections = [{
            header: ["Employment & Volunteering"],
            subsections: [
                {
                    header: [
                        "VCU College of Engineering, Richmond, VA",
                        "Computer Science Teacher Assistant",
                        "Fall 2018-Present"
                    ],
                    bullets: [
                        "Software Tester", [
                            "Inspect and test students' projects written in java against a provided spec sheet",
                            "Analyze and debug any issues that may cause their programs to crash and provide informative feedback"
                        ],
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "Web Master for VCU Ramdev ",
                        "Fall 18 - Present"
                    ],
                    bullets: [
                        "Ensure that proper assets are up to date",
                        "Apply frequent updates to the yml file",
                        "Update meeting times and events to provide more acurate representation of current ramdev activities"
                    ]
                },
                {
                    header: [
                      
                        "Richmond, VA",
                        "Software Apprentice at Maxx Potential",
                        "Fall 2017"
                    ],
                    bullets: [
                        "Engage in software development meetings to ensure project specifications are up to date",
                        "Provide well written coding documentation to enhance the overall clarity of the code functionality"
                    ]
                }
                ,{
                    header: [
                      "Richmond, VA",
                        "Target",
                        "11/2015-Present"
                    ],
                    bullets: [
                        "Electronics",[
                            "Educate customers on using latest available technology and provide technical solutions to their issues"
                        ]
                    ]
                }
            ]
        },
        {
            header: ["Education"],
            subsections: [{
                    header: [
                        "Richmond, VA",
                        "Virginia Commonwealth University",
                        "Expected Graduation: May 2020"
                    ],
                    bullets: [
                        "Junior studying Computer Science with a minor in mathematics",
                        "Seeking a cyber security certification by the time of my graduation(may/2020)"
                    ],

                },
                {
                    header: [
                        "Richmond, VA",
                        "Henrico High",
                        "Fall 2008 - Spring 2011"
                    ],
                    
                }
            ]
        },

        {
            header: ["Prominent Projects"],
            subsections: [
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/a-tayeh/ZeroPWNd"
                    },
                    header: [
                        "ZeroPWNd",
                        "Fall 2018"
                    ],
                    bullets: [
                        "Won <a href='https://devpost.com/software/zeropwnd'>1st place</a> for Willow Tree challenge at RamHacks 2018",
                        "Uses open source API and public data to check if a URL is a phishing link"
                    ]
                },

                {
                    noPrint: true,
                    decorators: {
                        icon: "github",
                        url: "https://github.com/a-tayeh/MadMauss"
                    },
                    header: [
                        "MadMauss",
                        "Fall 2017"
                    ],
                    bullets: [
                        "A project that managed to get me a spot for an apprenticeship at MaxxPotential",[
                            "Built with NodeJS and uses ExpressJS,MongoDB,PassportJS, Google's reCAPTCHA and many more! "
                        ]
                    ]
                },
                {
                
                    
                },
                { 
                    
                },
            ]
        },
        {
            noPrint: true,
            header: ["Clubs and Volunteering"],
            subsections: [{
                    header: [
                        "CyberSec @ VCU",
                        "Fall 2018 - Present"
                    ],
                    bullets: [
                        "Discuss the new trends of securing a network efficienty",
                    ]
                },
                {
                    header: [
                        "The Linux Club",
                        "Summer 2018 - Present"
                    ],
                    bullets: [
                        "Engage in activities that include the history of linux, its various uses in network and cyber security,"+ 
                        "and discuss the functionality of different linux distros",
                        
                    ]
                },
                {
                    header: [
                        "RamDev",
                        "Fall 2018 - Present"
                    ],
                    bullets: [
                        "Participate in weekly meetings to learn and prepare for the ACM Programming Contest"



                    ]
                },

            ]
        }
    ]
};
