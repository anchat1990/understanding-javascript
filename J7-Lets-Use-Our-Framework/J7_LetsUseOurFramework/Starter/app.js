//var g = G$('John', 'Doe');
//g.greet().setLang('es').greet(true).log();
//g.HTMLGreeting("#greeting")
$("#login").click(function() {
    var loginGrtr = G$("Madhumita", "Chatterjee");
    // when login button clicked, hide the login div
    $("#logindiv").hide();
    // demonstrating function chaining. set language to the selected language, 
    // then update using HTMLGreeting method, then log.
    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
})
