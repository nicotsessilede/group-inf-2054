APP.display = {

    hideHomeScreen: function() {
       document.getElementById("home-screen").style.display="none";
    },
    showGameSelectionScreen: function() {
        document.getElementById("newgame-screen").style.display="block";
    },
    hideGameSelectionScreen: function() {
        document.getElementById("newgame-screen").style.display="none";
    },
    hideSetup: function() {
        document.getElementById("menu-screen").style.display="none";
    },
    showGameSetupScreen: function() {
        document.getElementById("menu-screen").style.display="block";
    },
};