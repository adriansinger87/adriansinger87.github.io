
var CATEGORY_JOB = "job";
var CATEGORY_STUDY = "studies";

var TECH_SKILL = "technology";
var MISC_SKILL = "miscellaneous";
var LANG_SKILL = "languages";

$.fn.safeBind = function (type, func) {
    this.off(type).on(type, func);
};

function copyTextToClipboard(text) {

    var myText = text;

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(myText);
        return;
    }
    navigator.clipboard.writeText(myText).then(
        function () {
            M.toast({html: 'Copied'})
        },
        function (err) {
            var msg = "Could not copy text: " + err;
            console.error(msg);
            M.toast({html: msg, classes: 'red'});
        }
    );

    // -- inner function

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand("copy");
            var msg = successful ? "successful" : "unsuccessful";
            showToast({ html: "Copied" });
        } catch (err) {
            var msg = "Could not copy text: " + err;
            console.error(msg);
            showErrorToast(msg);
        }

        document.body.removeChild(textArea);
    }
}