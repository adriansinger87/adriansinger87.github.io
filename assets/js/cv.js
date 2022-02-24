$(function () {

    // -- fields

    var vitae;
    var markdown;
    var json;

    // -- processing

    init();

    // -- functions

    function init() {
        $(document).ready(function () {
            vitae = initVitae();
            json = JSON.stringify(vitae, null, 4);
            markdown = new VitaeMarkdown(vitae).getMarkdown();

            new VitaeVue('#vitae-app', vitae).getComponent();
            $("#vitae-code").text(json);  
            $("#vitae-markdown").text(markdown);

            initActions();

            Vue.nextTick(function() {
                hljs.highlightAll();
                $('.tooltipped').tooltip();
                $('.tabs').tabs();
            });
        });
    }

    function initActions() {

        $(".skill-tip").safeBind(
            "click", function(event) {
                var html = "<span>"+ event.currentTarget.dataset.tip +"</span><a class='btn-flat toast-action'>OK</a>";
                M.toast({
                    html: html,
                    classes: "skill-toast",
                    displayLength: 6000
                });

                $(".toast-action").safeBind(
                    "click", function() {
                        var toast = document.querySelector('.toast');
                        var toast = M.Toast.getInstance(toast);
                        toast.dismiss();
                    });
        });

        $(".download-markdown").safeBind(
            "click", function() {
                download(markdown, "cv_adrian_singer.md");
        });
        $(".copy-markdown").safeBind(
            "click", function() {
                copyTextToClipboard(markdown);
        });

        $(".download-json").safeBind(
            "click", function() {
                download(json, "cv_adrian_singer.json");
        });
        $(".copy-json").safeBind(
            "click", function() {
                copyTextToClipboard(json);
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
                    name: "German",
                    tip: "native language",
                    rate: 5/5
                },
                {
                    category: LANG_SKILL,
                    name: "English",
                    tip: "fluent speech and writing",
                    rate: 4/5
                },
                {
                    category: TECH_SKILL,
                    name: "C# and .NET",
                    tip: "since 2008, .NET Framework 2.0 till .NET 6",
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
                    tip: "since 2011",
                    rate: 3/5
                },
                {
                    category: TECH_SKILL,
                    name: "Git, GitHub, GitLab",
                    tip: "daily work and API knowledge since 2016",
                    rate: 4.25/5
                },
                {
                    category: TECH_SKILL,
                    name: "JavaScript, HTML and CSS",
                    tip: "including frameworks like jQuery, Angular, VueJS or d3js",
                    rate: 3.75/5
                },
                {
                    category: TECH_SKILL,
                    name: "Protocols: HTTP, MQTT, TCP, gRPC, OPC UA",
                    rate: 3.75/5
                },
                {
                    category: TECH_SKILL,
                    name: "Databases: relational, time series, graph based",
                    rate: 1.5/5
                },
                {
                    category: TECH_SKILL,
                    name: "GraphQL",
                    rate: 2.5/5
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
                    name: "Project Management",
                    tip: "includes PMP advanced trainings and agile workflows (SCRUM, KANBAN)",
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
                    tip: "strong communication and supportive skills",
                    rate: 5/5
                },
                {
                    category: MISC_SKILL,
                    name: "Leadership",
                    tip: "leading a DevOps team since 2020",
                    rate: 4/5
                },
                {
                    category: MISC_SKILL,
                    name: "2D Graphics and Design",
                    tip: "Adobe Photoshop, CorelDRAW and Corel PHOTO-PAINT",
                    rate: 3.75/5
                }
            ]
        }
    }

    function download(text, filename) {
        M.toast({html: 'Downloading...'})

        var link = document.createElement('a');
        link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        link.setAttribute('download', filename);     
        link.style.display = 'none';
        document.body.appendChild(link);
      
        link.click();
      
        document.body.removeChild(link);
    }
});