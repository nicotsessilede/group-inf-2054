var APP = APP || {
    players: [],
    pCount: 1,
    turnCount: 1,
    currentPlayer: 1,
    saveKey: '',
    currentPlayerArrPos: function() {
        return APP.currentPlayer - 1;
    },
    previousPlayer: function() {
        var prevPlayer;

        if (this.currentPlayer === 1) {
            prevPlayer = this.pCount;
        } else {
            prevPlayer = APP.currentPlayerArrPos();
        }

        return prevPlayer;
    },

    initGame: function() {
        $("#click").click(function() {
            APP.display.hideHomeScreen();
            APP.display.showGameSelectionScreen();
           
        });
        $("#new-game").click(function() {
            APP.display.hideGameSelectionScreen();
            APP.display.showGameSetupScreen();
        });
        $("#load-party").click(function() {
            $("#window").css("background-image", "");
            $("#window").css("background-color", "white" );
            APP.display.hideSetup();
            APP.display.renderBoard();
        });
        $("#continue-game").click(function() {
            $("#window").css("background-image", "");
            $("#window").css("background-color", "white" );
            APP.display.hideSetup();
            APP.display.showFinanceBox();
            APP.display.renderBoard();
        });
    }

};





$(document).ready(function() {
    // init game
    APP.initGame();

    $("#menu-new-game-btn").on("click", function() {
		//new game
        window.location.reload(false);
		//APP.display.newGame();
    });
    $("#menu-save-btn").on("click", function() {
        save(APP.saveKey);
    });
	$("#show-done-btn").on("click", function() {
		var doneBtn = document.getElementById("done-btn");
		if ($(doneBtn).css('display') === 'none'){
			$(doneBtn).show();
		} else {
			$(doneBtn).hide();
		}
	});
	$("#custom-game-indicator").text("Custom");
	
	/*var h, w, f;
	$(".hoverText").hover(function(){
		//get element id of hovered space
		console.log("id: " + this.id);
		
		h = document.getElementById(this.id).style.height;
		w = document.getElementById(this.id).style.width;
		f = document.getElementById(this.id).style.fontSize;
		
		document.getElementById(this.id).style.height = "200px";
		document.getElementById(this.id).style.width = "200px";
		document.getElementById(this.id).style.fontSize = "1.9em";
		
	},function(){
		document.getElementById(this.id).style.height = h;
		document.getElementById(this.id).style.width = w;
		document.getElementById(this.id).style.fontSize = f;
	});*/
	
	//stock form
	/*$("#share-amt-input-sell", "#decrease-shares-sell", "#increase-shares-sell").on("change", function(){
		var price = APP.currentDeal.price;
		var shares = this.value;
		
		document.getElementById("share-sell-total").innerHTML = price * shares;
	});*/

    // Options
    OPTIONS.output.innerHTML = "Normal";
    $("#default-game-indicator").css("color", "#FDD835");
    $("#custom-game-indicator").css("color", "#4E342E");
    $(".off-options").hide(); //-- hides unnused option menu checkboxes
	
	// listen for default settings on each change
    for (var i = 0; i < OPTIONS.checkbox.length; i++) {
        OPTIONS.checkbox[i].addEventListener('change', function() {
            OPTIONS.checkState();
        });
    }

    OPTIONS.slider.oninput = function() {
        if (this.value == 0) {
            OPTIONS.output.innerHTML = "None";
        } else if (this.value == 1) {
            OPTIONS.output.innerHTML = "Normal";
        } else if (this.value == 2) {
            OPTIONS.output.innerHTML = "Salary";
        } else if (this.value == 3) {
            OPTIONS.output.innerHTML = "2x Salary";
        }
        OPTIONS.checkState();
    };

    // Show player options for selected amount of players, updates each input
    var playerInputs = document.querySelectorAll("div.player-input");

    function showPlayerInputs() {
        var val = OPTIONS.playerNumber.value;
        var options = document.querySelectorAll("option.player-number-option");

        for (var i = 1; i <= options.length; i++) {
            var playerInputBox = "#player" + i + "input";
            if (i <= val) {
                $(playerInputBox).show();
            } else {
                $(playerInputBox).hide();
            }
        }
    }
	
    OPTIONS.playerNumber.oninput = function() {
        var val = OPTIONS.playerNumber.value;
        var options = document.querySelectorAll("option.player-number-option");

        for (var i = 1; i <= options.length; i++) {
            var playerInputBox = "#player" + i + "input";
            if (i <= val) {
                $(playerInputBox).show();
            } else {
                $(playerInputBox).hide();
            }
        }
    }
    showPlayerInputs();
});


