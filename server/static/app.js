Dropzone.autoDiscover = false;

function init() {
    let dz = new Dropzone("#dropzone", {
        url: "/classify_image",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Drop an image to classify",
        autoProcessQueue: false
    });

    dz.on("addedfile", function () {
        if (dz.files[1] != null) {
            dz.removeFile(dz.files[0]);  // Only allow one file at a time
        }
    });

    dz.on("complete", function (file) {
        let imageData = file.dataURL;

        var url = "http://127.0.0.1:5000/classify_image";  // Flask server endpoint

        $.post(url, {
            image_data: imageData  // Send base64 encoded image to Flask
        }, function (data, status) {
            console.log(data);  // Log response for debugging

            if (!data || data.length === 0) {
                $("#resultHolder").hide();
                $("#divClassTable").hide();
                $("#error").show();  // Show error message
                return;
            }

            // List of players
            let players = ["eldor_shomurodov", "erling_haaland", "fayzullaye_abbos", "harry_kane", "lionel_messi"];

            let match = null;
            let bestScore = -1;

            // Find the best match
            for (let i = 0; i < data.length; ++i) {
                let maxScoreForThisClass = Math.max(...data[i].class_probability);
                if (maxScoreForThisClass > bestScore) {
                    match = data[i];
                    bestScore = maxScoreForThisClass;
                }
            }

            // Display match information
            if (match) {
                $("#error").hide();
                $("#resultHolder").show();
                $("#divClassTable").show();

                // Display the matched player card
                $("#resultHolder").html($(`[data-player="${match.class}"`).html());

                // Update the score table
                let classDictionary = match.class_dictionary;
                for (let personName in classDictionary) {
                    let index = classDictionary[personName];
                    let probabilityScore = match.class_probability[index];
                    let elementName = "#score_" + personName;
                    $(elementName).html(probabilityScore.toFixed(2));  // Display score
                }
            }
        });
    });

    // Trigger processing of the uploaded file when the button is clicked
    $("#submitBtn").on('click', function () {
        dz.processQueue();
    });
}

$(document).ready(function () {
    console.log("Page loaded");
    $("#error").hide();
    $("#resultHolder").hide();
    $("#divClassTable").hide();

    init();  // Initialize Dropzone on page load
});
