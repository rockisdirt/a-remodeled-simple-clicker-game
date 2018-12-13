window.onload = function(){
    const notyf = new Notyf();

    if (/Mobi/.test(navigator.userAgent)) {
        if(window.innerHeight > window.innerWidth){
            alert("Rotate you device for better playing!");
        }
    }

    // Buttons from mid <div>
    const buttonIronMine = document.getElementById('ironMine');
    const buttonGoldMine = document.getElementById('goldMine');
    const buttonIronSell = document.getElementById('ironSell');
    const buttonGoldSell = document.getElementById('goldSell');
    //
    
    // Buttons from upgrade <div>
    const buttonIronMineUP = document.getElementById('ironMineUP');
    const buttonGoldMineUP = document.getElementById('goldMineUP');
    //
    
    // Info <p>
    const infoIron = document.getElementById('Iron');
    const infoGold = document.getElementById('Gold');
    const infoMoney = document.getElementById('Money');
    const levelIron = document.getElementById('LevelIron');
    const levelGold = document.getElementById('LevelGold');
    //
    
    // Variables
    let money = 0;
    let iron = 0;
    let gold = 0;
    let ironLevel = 1;
    let goldLevel = 0;
    
    let ironValue = 1;
    let goldValue = 5;
    //
    
    // Functions
    function update() {
        infoIron.innerHTML = iron;
        infoGold.innerHTML = gold;
        infoMoney.innerHTML = money;
        levelIron.innerHTML = ironLevel;
        levelGold.innerHTML = goldLevel;
    
        buttonIronMine.innerHTML = "Mine Iron <br> " + ironLevel;
        buttonGoldMine.innerHTML = "Mine Gold <br> " + goldLevel;
    
        buttonIronSell.innerHTML = "Sell All Iron <br> 1 Iron = " + ironValue + "€";
        buttonGoldSell.innerHTML = "Sell All Gold <br> 1 Gold = " + goldValue + "€";
    
        buttonIronMineUP.innerHTML = "Upgrade Mine Iron <br> " + getPriceMineUP("Iron") + "€";
        buttonGoldMineUP.innerHTML = "Upgrade Mine Gold <br> " + getPriceMineUP("Gold") + "€";
    }

    function Mine(type) {
        if (type == "Iron") {
            if (ironLevel > 0) {
                iron += ironLevel;
            } else {
                notyf.alert("Increase your iron mine level first!");
            }
        } else if (type == "Gold") {
            if (goldLevel > 0) {
                gold += goldLevel;
            } else {
                notyf.alert("Increase your gold mine level first!");
            }
        }
    }

    function MineUpgrade(type) {
        if (type == "Iron") {
            if (money >= getPriceMineUP("Iron")) {
                money -= getPriceMineUP("Iron");
                ironLevel++;

                notyf.confirm("Increased iron mine level!");
            } else {
                notyf.alert("You don't have enough money!");
            }
        } else if (type == "Gold") {
            if (money >= getPriceMineUP("Gold")) {
                money -= getPriceMineUP("Gold");
                goldLevel++;

                notyf.confirm("Increased gold mine level!");
            } else {
                notyf.alert("You don't have enough money!");
            }
        }
    }

    function ItemSell(type) {
        if (type == "Iron") {
            if (iron > 0) {
                notyf.confirm("You have earned " + ironValue * iron + "€ selling " + iron + " of iron!");

                money += ironValue * iron;
                iron -= iron;
            } else {
                notyf.alert("You don't have any iron!");
            }
        } else if (type == "Gold") {
            if (gold > 0) {
                notyf.confirm("You have earned " + goldValue * gold + "€ selling " + gold + " of gold!");

                money += goldValue * gold;
                gold -= gold;
            } else {
                notyf.alert("You don't have any gold!");
            }
        }
    }

    function getPriceMineUP(type) {
        if (type == "Iron") {
            return ironLevel * 100;
        } else if (type == "Gold") {
            return (goldLevel + 1) * 500;
        }
    }
    //
    
    // Handle clicks
    buttonIronMine.addEventListener('mousedown', () => Mine("Iron"));
    
    buttonGoldMine.addEventListener('mousedown', () => Mine("Gold"));
    
    buttonIronSell.addEventListener('mousedown', () => ItemSell("Iron"));
    
    buttonGoldSell.addEventListener('mousedown', () => ItemSell("Gold"));
    
    buttonIronMineUP.addEventListener('mousedown', () => MineUpgrade("Iron"));
    
    buttonGoldMineUP.addEventListener('mousedown', () => MineUpgrade("Gold"));
    //
    
    ////// Update() timer //////
    setInterval (() => update(), 50);
    ///////////////////////////
}