const buttonIronMine = document.getElementById('ironMine');
const buttonGoldMine = document.getElementById('goldMine');
const buttonIronSell = document.getElementById('ironSell');
const buttonGoldSell = document.getElementById('goldSell');


const buttonIronMineUP = document.getElementById('ironMineUP');
const buttonGoldMineUP = document.getElementById('goldMineUP');


const buttonwIronSellUP = document.getElementById('wironSellUP');
const buttonwGoldSellUP = document.getElementById('wgoldSellUP');


const buttonIronSellUP = document.getElementById('ironSellUP');
const buttonGoldSellUP = document.getElementById('goldSellUP');


const infoIron = document.getElementById('Iron');
const infoGold = document.getElementById('Gold');
const infoMoney = document.getElementById('Money');
const levelIron = document.getElementById('LevelIron');
const levelGold = document.getElementById('LevelGold');
const wlevelIron = document.getElementById('wLevelIron');
const wlevelGold = document.getElementById('wLevelGold');


let money = 0;
let iron = 0;
let gold = 0;
let ironLevel = 1;
let goldLevel = 0;

let ironValue = 1;
let goldValue = 5;

let ironUPValue = 1;
let goldUPValue = 1;

let workerLevelIron = 0;
let workerLevelGold = 0;

function update() {
    infoIron.innerText = "Iron: " + iron;
    infoGold.innerText = "Gold: " + gold;
    infoMoney.innerText = "Money: " + money + "€";
    levelIron.innerText = "Iron Level: " + ironLevel;
    levelGold.innerText = "Gold Level: " + goldLevel;
    wlevelIron.innerText = "Worker Iron Level: " + workerLevelIron;
    wlevelGold.innerText = "Worker Gold Level: " + workerLevelGold;

    buttonIronMine.innerHTML = "Mine Iron <br> " + ironLevel;
    buttonGoldMine.innerHTML = "Mine Gold <br> " + goldLevel;

    buttonIronSell.innerHTML = "Sell All Iron <br> 1 Iron = " + ironValue + "€";
    buttonGoldSell.innerHTML = "Sell All Gold <br> 1 Gold = " + goldValue + "€";

    buttonIronMineUP.innerHTML = "Upgrade Mine Iron <br> " + ironLevel * 100 + "€";
    if (goldLevel > 0) {
        buttonGoldMineUP.innerHTML = "Upgrade Mine Gold <br> " + goldLevel * 500 + "€";
    }

    if (workerLevelIron > 0) {
        buttonwIronSellUP.innerHTML = "Upgrade Worker Iron Level <br> " + workerLevelIron * 1000 + "€";
    }
    if (workerLevelGold > 0) {
        buttonwGoldSellUP.innerHTML = "Upgrade Worker Gold Level <br> " + workerLevelGold * 2500 + "€";
    }

    buttonIronSellUP.innerHTML = "Upgrade Iron Value <br> " + ironUPValue * 10000 + "€";
    buttonGoldSellUP.innerHTML = "Upgrade Gold Value <br> " + goldUPValue * 25000 + "€";
}

buttonIronMine.addEventListener('click', function() {
    iron+=ironLevel;

    update();
});

buttonGoldMine.addEventListener('click', function() {
    if (goldLevel >= 1) {
        gold+=goldLevel;
    }

    update();
});

buttonIronSell.addEventListener('click', function() {
    if (iron > 0) {
        money+=ironValue * iron;
        iron-=iron;

        update();
    }
});

buttonGoldSell.addEventListener('click', function() {
    if (gold > 0) {
        money+=goldValue * gold;
        gold-=gold;

        update();
    }
});

buttonIronMineUP.addEventListener('click', function() {
    if (money >= (ironLevel) * 100) {
        money -= (ironLevel) * 100;
        ironLevel++;

        update();
    }
});

buttonGoldMineUP.addEventListener('click', function() {
    if (money >= (goldLevel) * 500) {
		if (goldLevel == 0) {
			money -= (goldLevel + 1) * 500;
		} else {
			money -= (goldLevel) * 500;
		}     
		goldLevel++;

        update();
    }
});

buttonIronSellUP.addEventListener('click', function() {
    if (money >= ironUPValue * 10000) {
        money-=ironUPValue * 10000;
        ironUPValue++;
        ironValue++;
        update();
    }
});

buttonGoldSellUP.addEventListener('click', function() {
    if (money >= goldUPValue * 25000) {
        money-=goldUPValue * 25000;
        goldUPValue++;
        goldValue++;
        update();
    }
});

buttonwIronSellUP.addEventListener('click', function() {
    if (workerLevelIron > 0) {
		if (money >= workerLevelIron * 1000) {
			money-=workerLevelIron * 1000;
			
			
			workerLevelIron++;
		}

	} else {
		if (money >= (workerLevelIron + 1) * 1000) {
			money-=(workerLevelIron + 1) * 1000;
			
			
			workerLevelIron++;
		}
	}
	
	update();
});

buttonwGoldSellUP.addEventListener('click', function() {
	if (workerLevelGold > 0) {
		if (money >= workerLevelGold * 2500) {
			money-=workerLevelGold * 2500;
			
			workerLevelGold++;
		}

	} else {
		if (money >= (workerLevelGold + 1) * 2500) {
			money-=(workerLevelGold + 1) * 2500;
			
			workerLevelGold++;
		}
	}
	
	update();
});

setInterval (function () {
    if (workerLevelIron > 0) {
        iron += workerLevelIron * ironLevel;
    }

    if (workerLevelGold > 0 && goldLevel > 0) {
        gold += workerLevelGold * goldLevel;
    }

    update();
}, 1000);