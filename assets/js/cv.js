$(function () {

    // -- fields

    // processing

    init();

    // -- functions

    function init() {
        $(document).ready(function () {
            vue = new VitaeVue('#vitae-app', initVitae())
            .getComponent();

            Vue.nextTick(function() {
                $('.tooltipped').tooltip();
            });
        });
    }

    function initVitae() {   
    
        return {
            person: {
                firstName: "Adrian",
                lastName: "Singer",
                nationality: "German",
                born: "1987-04-20",
                martialStatus: "Married",
                kids: [{name: "Mika", born: "2015-06-04"}, {name: "Jaro", born: "2017-08-13"}], 
                web: "https://www.adrian-singer.de/",
                linkedin: "https://www.linkedin.com/in/adrian-singer-chemnitz/",
                github: "https://github.com/adriansinger87"
            },
            skills: [
                {
                    category: LANG_SKILL,
                    name: "German",
                    rate: 5/5
                },
                {
                    category: LANG_SKILL,
                    name: "English",
                    rate: 4/5
                },
                {
                    category: MISC_SKILL,
                    name: "Office",
                    rate: 5/5
                },
                {
                    category: MISC_SKILL,
                    name: "Project Management",
                    rate: 4.5/5
                },
                {
                    category: TECH_SKILL,
                    name: "C# and .NET",
                    rate: 5/5
                },
                {
                    category: TECH_SKILL,
                    name: "C++",
                    rate: 3/5
                },
                {
                    category: TECH_SKILL,
                    name: "JavaScript",
                    rate: 3.5/5
                },
                {
                    category: TECH_SKILL,
                    name: "HTML and CSS",
                    rate: 3.75/5
                },
                {
                    category: TECH_SKILL,
                    name: "REST APIs with ASP.NET Core",
                    rate: 4/5
                },
                {
                    category: TECH_SKILL,
                    name: "GraphQL",
                    rate: 1.5/5
                },
                {
                    category: TECH_SKILL,
                    name: "Java",
                    rate: 1/5
                },
            ]
        }
    }
});