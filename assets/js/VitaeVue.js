class VitaeVue {

    constructor(selector, vitae) {
        this.vue = new Vue({
            el: selector,
            data: vitae,
            computed: {
                fullName: function() {
                    return this.person.firstName + " " + this.person.lastName;
                },
                kidsAndAges: function() {

                    return getAges(this.person.kids);

                    // -- inner function

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
                },
                techSkills: function() {
                    return this.skills.filter((s) => {
                        return s.category === TECH_SKILL;
                    });
                },
                langSkills: function() {
                    return this.skills.filter((s) => {
                        return s.category === LANG_SKILL;
                    });
                },
                miscSkills: function() {
                    return this.skills.filter((s) => {
                        return s.category === MISC_SKILL;
                    });
                }
            },
            methods: {
                castRateTooltip: this.castRateTooltip,
                castRateMdi: this.castRateMdi
            }
        });
    }

    // -- functions 

    getComponent() {
        return this.vue;
    }

    castRateTooltip(rate) {
        return rate * 100 + "%";
    }

    castRateMdi(rate) {
        var percent = rate * 100;
        var mdiClass = "mdi mdi-sm ";
        if (percent == 0)           mdiClass += "mdi-circle-outline deep-orange-text";
        else if (percent < 14)      mdiClass += "mdi-circle-slice-1 blue-grey-text";
        else if (percent < 28)      mdiClass += "mdi-circle-slice-2 blue-text text-accent-2";
        else if (percent < 42)      mdiClass += "mdi-circle-slice-3 cyan-text";
        else if (percent < 56)      mdiClass += "mdi-circle-slice-4 teal-text";
        else if (percent < 70)      mdiClass += "mdi-circle-slice-5 lime-text";
        else if (percent < 84)      mdiClass += "mdi-circle-slice-6 light-green-text";
        else if (percent < 100)     mdiClass += "mdi-circle-slice-7 green-text";
        else                        mdiClass += "mdi-circle-slice-8 light-green-text text-accent-4";
        return mdiClass;
    }
}