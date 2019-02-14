function viewModel() {
    this.firstName = "Ali";
    this.lastName = "Tayeh";
    this.fullName = this.firstName + " S. " + this.lastName;

    this.phone = "804-325-0176";
    this.email = "alistayeh@gmail.com";
    this.github = "github.com/a-tayeh";
    this.website = "a-tayeh.github.io/resume/"

    this.sections = [{
            header: ["Employment & Volunteering"],
            subsections: [
                {
                    header: [
                        "VCU College of Engineering, Richmond, VA",
                        "Research Assistant",
                        "Spring 2019-Present"
                    ],
                    bullets: [
                        "Use virtual machine introspection(VMI) to read memeory contents from a target virtual machine and libVMI API to write to memeory.",
                        "Set up the environments on lab computers using xen hypervisor on ubuntu integrated with libvmi to prepare other students interested in cyber security to experiment basic level of hacking."
                    ]
                },
                {
                    header: [
                        "VCU College of Engineering, Richmond, VA",
                        "Teacher Assistant",
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
                        "Update meeting times and events to provide more accurate representation of current ramdev activities"
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
                ,
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
                    noPrint: false,
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
                 noPrint: false,
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
            ]
        },
        {
            noPrint: false,
            header: ["Programming Langauges and Skills"],
            subsections: [{
                    header: [
                        "Java, Python, C, JavaScript, Git, HTML, CSS, Bash, and mongoDB",
 
                    ],
                    
                },
             

            ]
        }
    ]
};
