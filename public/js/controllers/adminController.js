function adminController() {
    $("#boutonActivites").click(function() {
        $("#modifInfosPratiques").hide();
        $("#modifPartenaires").hide();
        $("#modifActivites").toggle("slow");
    });
    $("#boutonInfos").click(function() {
        $("#modifActivites").hide();
        $("#modifPartenaires").hide();
        $("#modifInfosPratiques").toggle("slow");
    });
    $("#boutonPart").click(function() {
        $("#modifActivites").hide();
        $("#modifInfosPratiques").hide();
        $("#modifPartenaires").toggle("slow");
    });

}
