$(function () {

    // -- fields

    // processing

    init();

    // -- functions

    function init() {
        $(document).ready(function () {
            var vitae = initVitae();
            vue = new VitaeVue('#vitae-app', vitae)
                .getComponent();
            var jsonString = JSON.stringify(vitae, null, 4);

            $("#vitae-code").text(jsonString);
            var markdown = new VitaeMarkdown(vitae).getMarkdown();
            $("#vitae-markdown").text(markdown);

            Vue.nextTick(function() {
                hljs.highlightAll();
                $('.tooltipped').tooltip();
                $('.tabs').tabs();
            });
        });
    }

    function initVitae() {   
    
        return {
            person: {
                firstName: "Adrian",
                lastName: "Singer",
                nationality: "German",
                location: {
                    state: "Germany",
                    city: "Chemnitz",
                    address: "Hübschmannstr. 3",
                    zipCode: "09112"
                },
                born: "1987-04-20",
                martialStatus: "Married",
                kids: [{name: "Mika", born: "2015-06-04"}, {name: "Jaro", born: "2017-08-13"}], 
                web: "https://www.adrian-singer.de/",
                linkedin: "https://www.linkedin.com/in/adrian-singer-chemnitz/",
                github: "https://github.com/adriansinger87"
            },
            career: [
                {
                    category: CATEGORY_JOB,
                    start: "2015-06-01",
                    name: "Fraunhofer-Institute for forming technology and tooling machines",
                    department: "Digitalization in Production",
                    activities: [
                        "scientific staff",
                        "project and program manager",
                        "group leader 'Information Management and Communication Systems'"]
                },
                {
                    category: CATEGORY_JOB,
                    start: "2014-10-01",
                    end: "2015-03-31",
                    name: "Micas AG",
                    department: "Research and Develompment",
                    activities: ["Deputy Head of Development"]
                },
                {
                    category: CATEGORY_JOB,
                    start: "2011-10-01",
                    end: "2014-09-30",
                    name: "Hochschule Mittweida - University of Applied Sciences",
                    department: "Professorship of communication technology / radio technology",
                    activities: ["PhD student and scientific staff"]
                },
                {
                    category: CATEGORY_STUDY,
                    start: "2005-09-01",
                    end: "2011-09-30",
                    name: "Hochschule Mittweida - University of Applied Sciences",
                    activities: [
                        "Industrial Management, Master of Science (grade 1.4)", 
                        "Mulimedia Technology, Graduate Engineer (grade 1.6)"]
                }
            ],
            skills: [
                {
                    category: LANG_SKILL,
                    name: "German (native language)",
                    rate: 5/5
                },
                {
                    category: LANG_SKILL,
                    name: "English (fluent speech and writing)",
                    rate: 4/5
                },
                {
                    category: TECH_SKILL,
                    name: "C# and .NET",
                    rate: 5/5
                },
                {
                    category: TECH_SKILL,
                    name: "REST APIs with ASP.NET Core",
                    rate: 4/5
                },
                {
                    category: TECH_SKILL,
                    name: "C++",
                    rate: 3/5
                },
                {
                    category: TECH_SKILL,
                    name: "Git, GitHub, GitLab",
                    rate: 4.25/5
                },
                {
                    category: TECH_SKILL,
                    name: "JavaScript, HTML and CSS",
                    rate: 3.75/5
                },
                {
                    category: TECH_SKILL,
                    name: "Protocols: HTTP, MQTT, TCP, gRPC",
                    rate: 3.5/5
                },
                {
                    category: TECH_SKILL,
                    name: "Databases: relational, time series, graph based",
                    rate: 2.5/5
                },
                {
                    category: TECH_SKILL,
                    name: "GraphQL",
                    rate: 1.5/5
                },
                {
                    category: TECH_SKILL,
                    name: "Java, Scala",
                    rate: 1/5
                },
                {
                    category: MISC_SKILL,
                    name: "Office tools",
                    rate: 5/5
                },
                {
                    category: MISC_SKILL,
                    name: "Project Management (PMP and Agile)",
                    rate: 4.5/5
                },
                {
                    category: MISC_SKILL,
                    name: "Clean Code and Clean Architecture Principles",
                    rate: 4.5/5
                },
                {
                    category: MISC_SKILL,
                    name: "Team spirit",
                    rate: 5/5
                },
                {
                    category: MISC_SKILL,
                    name: "Leadership",
                    rate: 4/5
                },
                {
                    category: MISC_SKILL,
                    name: "2D Graphics and Design",
                    rate: 3.75/5
                }
            ]
        }
    }
});