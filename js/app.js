window.onload = function(){
    const notyf = new Notyf();

    if (/Mobi/.test(navigator.userAgent)) {
        if(window.innerHeight > window.innerWidth){
            alert("Rotate you device for better playing!");
        }
    }

    // Buttons from mid <div>
    const buttondustgrab = document.getElementById('dustgrb');
    const buttonrockMine = document.getElementById('rockMine');
    const buttondustSell = document.getElementById('dustSell');
    const buttonrockSell = document.getElementById('rockSell');
    //
    
    // Buttons from upgrade <div>
    const buttondustgrabUP = document.getElementById('dustgrabUP');
    const buttonrockMineUP = document.getElementById('rockMineUP');
    //
    
    // Info <p>
    const infodust = document.getElementById('dust');
    const inforock = document.getElementById('rock');
    const infoMoney = document.getElementById('Money');
    const leveldust = document.getElementById('Leveldust');
    const levelrock = document.getElementById('Levelrock');
    //
    
    // Variables
    let money = 0;
    let dust = 0;
    let rock = 0;
    let dustLevel = 1;
    let rockLevel = 0;
    
    let dustValue = 1;
    let rockValue = 5;
    //
    
    // Functions
    function update() {
        infodust.innerHTML = dust;
        inforock.innerHTML = rock;
        infoMoney.innerHTML = money;
        levelIron.innerHTML = dustLevel;
        levelGold.innerHTML = rockLevel;
    
        buttondustMine.innerHTML = "Mine dust <br> " + dustLevel;
        buttonrockMine.innerHTML = "Mine rock <br> " + rockLevel;
    
        buttonIronSell.innerHTML = "Sell All Iron <br> 1 Iron = " + dustValue + "€";
        buttonGoldSell.innerHTML = "Sell All Gold <br> 1 Gold = " + rockValue + "€";
    
        buttondustgrabUP.innerHTML = "Upgrade grab dust <br> " + getPricegrabUP("dust") + "€";
        buttonrockMineUP.innerHTML = "Upgrade Mine rock <br> " + getPriceMineUP("rock") + "€";
    }

    function grab(type) {
        if (type == "dust") {
            if (dustLevel > 0) {
                dust += dustLevel;
            } else {
                notyf.alert("Increase your dust grab level first!");
            }
        } else if (type == "rock") {
            if (rockLevel > 0) {
                rock += rockLevel;
            } else {
                notyf.alert("Increase your rock mine level first!");
            }
        }
    }

    function MineUpgrade(type) {
        if (type == "dust") {
            if (money >= getPricegrabUP("dust")) {
                money -= getPricegrabUP("dust");
                dustLevel++;

                notyf.confirm("Increased dust grab level!");
            } else {
                notyf.alert("You don't have enough money!");
            }
        } else if (type == "rock") {
            if (money >= getPriceMineUP("rock")) {
                money -= getPriceMineUP("rock");
                rockLevel++;

                notyf.confirm("Increased rock mine level!");
            } else {
                notyf.alert("You don't have enough money!");
            }
        }
    }

    function ItemSell(type) {
        if (type == "dust") {
            if (dust > 0) {
                notyf.confirm("You have earned " + dustValue * dust + "€ selling " + dust + " of dust!");

                money += dustValue * dust;
                dust -= dust;
            } else {
                notyf.alert("You don't have any dust!");
            }
        } else if (type == "rock") {
            if (rock > 0) {
                notyf.confirm("You have earned " + rockValue * rock + "€ selling " + rock + " of rock!");

                money += rockValue * rock;
                rock -= rock;
            } else {
                notyf.alert("You don't have any rocks!");
            }
        }
    }

    function getPriceMineUP(type) {
        if (type == "dust") {
            return dustLevel * 100;
        } else if (type == "rock") {
            return (rockLevel + 1) * 500;
        }
    }
    //
    
    // Handle clicks
    buttondustgrab.addEventListener('mousedown', () => grab("dust"));
    
    buttonrockMine.addEventListener('mousedown', () => Mine("rock"));
    
    buttondustSell.addEventListener('mousedown', () => ItemSell("dust"));
    
    buttonrockSell.addEventListener('mousedown', () => ItemSell("rock"));
    
    buttondustgrabUP.addEventListener('mousedown', () => grabUpgrade("dust"));
    
    buttonrockMineUP.addEventListener('mousedown', () => MineUpgrade("rock"));
    //
    
    ////// Update() timer //////
    setInterval (() => update(), 50);
    ///////////////////////////
}
