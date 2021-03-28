
const nl = "\r\n";

class VitaeMarkdown {

    constructor(vitae) {
        this.vitae = vitae;
    }

    getMarkdown() {
        var md = "# Curriculum Vitae" + nl + nl;

        md += this.addPerson(this.vitae.person);
        md += this.addCareer(this.vitae.career);
        md += this.addSkills(this.vitae.skills);
        md += this.addFooter(this.vitae.person);

        return md;
    }

    addPerson(p) {
        var loc = p.location;
        var name = p.firstName + " " + p.lastName;
        var md = "" +
            "## Person" + nl +
            "- Name: " + name + nl +
            "- Date of birth: " + p.born + nl +
            "- Nationality: " + p.nationality + nl +
            "- Location: " + loc.address + ", " + loc.zipCode + " " + loc.city + nl +
            "- Martial status: " + p.martialStatus + nl +
            "- Kids: " + getAges(p.kids) + nl +
            "- Links:" + nl +
            "    - [Website](" + p.web + ")" + nl +
            "    - [LinkedIn](" + p.linkedin + ")" + nl +
            "    - [GitHub](" + p.github + ")" + nl +
            nl;
        return md;

        // -- inner functions

        function getAges(kids) {
            var now = new Date();
            var ages = kids.map((i) => {
                var diff = new Date(now - new Date(i.born));
                var age = Math.abs(diff.getUTCFullYear() - 1970);
                return age + "y";
            })
                .join(', ');

            return ages;
        }
    }

    addCareer(career) {
        var md = "## Career" + nl;
        md += "### Jobs" + nl;
        md += addCareerList(career, CATEGORY_JOB);
        md += nl;
        md += "### Studies" + nl;
        md += addCareerList(career, CATEGORY_STUDY);
        md += nl;
        return md;

        // -- inner functions

        function addCareerList(career, category) {
            var md = "";
            career
                .filter((c) =>{
                    return c.category === category;
                })
                .forEach((c) => {
                    md += "- " + c.name + nl;
                    md += (c.department != undefined ? "    - Dept.: " + c.department + nl : "");
                    md += "    - " + getDuration(c) + nl;
                    md += "    - " + c.activities.join(", ") + nl;

                });
            return md;
        }

        function getDuration(c) {
            return "from "+ castDate(c.start) + " to " + castDate(c.end);           
        }

        function  castDate(dateString) {
            if (dateString === undefined) {
                return "present";
            }   
            var d = new Date(dateString);
            return (d.getMonth()+1) + "/" + d.getFullYear();
        }
    }

    addSkills(skills) {
        var md = "## Skills" + nl;
        md += "### Languages" + nl;
        md += addSkillsList(skills, LANG_SKILL);
        md += nl;
        md += "### Technology" + nl;
        md += addSkillsList(skills, TECH_SKILL);
        md += nl;
        md += "### Miscellaneous" + nl;
        md += addSkillsList(skills, MISC_SKILL);
        md += nl;
        return md;

        // -- inner functions

        function addSkillsList(skills, category) {
            var md = "";
            skills
                .filter((s) =>{
                    return s.category === category;
                })
                .forEach((s) => {
                    md += "- `" + castRate(s.rate)  + "` " + s.name + nl;
                });
            return md;
        }

        function castRate(rate) {
            return rate * 100 + "%";
        }
    }

    addFooter(person) {
        var md = "---" + nl +
            "Author: " + person.firstName + " " + person.lastName + nl;
        return md;
    } 
}