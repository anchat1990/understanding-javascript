//var g = G$('John', 'Doe');
//g.greet().setLang('es').greet(true).log();
//g.HTMLGreeting("#greeting")
$("#login").click(function() {
    var loginGrtr = G$("Madhumita", "Chatterjee");
    $("#logindiv").hide();
    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
})