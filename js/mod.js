let modInfo = {
	name: "The Battle Tree",
	id: "Battle",
	author: "DeFe308",
	pointsName: "点数",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.2.0",
	name: "Level 25",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1.0 2026/5/4</h3><br>
		- 增加基础功能，完成前15关<br>
	<h3>v0.2.0 2026/5/17</h3><br>
		- 完成前25关，增加了难度系统<br>`

let winText = `恭喜！你 >暂时< 通关了！`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
    return false
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	devSpeed: n(1),
}}

// Display extra things at the top of the page
var displayThings = [

]

// Determines when the game "ends"
function isEndgame() {
	return false
}

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

//快捷定义
function n(num){
    return new Decimal(num)
}

function AnyOperation(){
	player.m.TWtext=''
	player.m.RoundUsed = player.m.RoundUsed.add(1)
	if(player.m.TWPoison.gt(0)){player.m.TWPoison=player.m.TWPoison.sub(1).max(0)
			player.m.TWhp=player.m.TWhp.sub(tmp.m.CurrentATK.times(2))
		}
	if(player.m.TWhp.gt(0)){
		player.m.TWbp=player.m.TWbp.add(player.m.TWbpPerRound)
		player.m.currentHP=player.m.currentHP.sub(player.m.TWatk)
		TWskill(tmp.m.goal[player.m.currentLevel.toNumber()].TimewallId)
	}
	if(player.m.TWhp.lte(0)){
		player.m.TWhp=n(0)
		player.m.BasicPoint=player.m.BasicPoint.add(player.m.TWbp.div(2))
		player.m.TWbp=n(0)
	}
	if(getClickableState('m',41)>0) setClickableState('m',41,getClickableState('m',41)-1)
	player.m.currentStrBuff=player.m.currentStrBuff.add(-1).max(0)
	if(player.m.currentHpBuff.gt(0)) {player.m.currentHpBuff=player.m.currentHpBuff.add(-1).max(0)
		player.m.currentHP=player.m.currentHP.add(tmp.p.maxHP.times(0.2))
	}
	if(player.m.currentPoiBuff.gt(0)) {player.m.currentPoiBuff=player.m.currentPoiBuff.add(-1).max(0)
		player.m.currentHP=player.m.currentHP.sub(tmp.p.maxHP.times(getBuyableAmount('p',32).times(-0.001).add(0.1)).add(getBuyableAmount('p',32).times(-0.01).add(1).times(50)))
	}
    player.m.TimeToNext = n(0.5)
	player.m.ButtonShowId = n(0)
}

function RanBox(NormChance = 0.8) {
	mult=n(1)
	a=Math.random()
	if(a>NormChance) mult=mult.times(-1)
	
	b=n(Math.random()).times(5)
	if(b.floor().eq(0)) player.m.currentHP=player.m.currentHP.add(mult.times(100))
	if(b.floor().eq(1)) player.m.currentSP=player.m.currentSP.add(mult.times(20))
	if(b.floor().eq(2)) player.m.BasicPoint=player.m.BasicPoint.add(mult.times(200))
	if(b.floor().eq(3)) player.m.RoundUsed=player.m.RoundUsed.add(mult.times(-5))
	if(b.floor().eq(4)) player.points=player.points.add(mult.times(50))
}

function TWskill(id){
        if(id.eq(2)) {
		if(Math.random()>0.5) {player.m.TWhp=player.m.TWhp.add(50)
            player.m.TWtext=player.m.TWtext+'时间墙回复了50血量！<br>'}
		if(Math.random()>0.8) {player.m.currentHP=player.m.currentHP.sub(player.m.TWatk.times(4))
            player.m.TWtext=player.m.TWtext+'时间墙使用了暴击技能，总共对你造成了5倍伤害！<br>'}
		}
		if(id.eq(3)) {if(Math.random()>0.75){player.m.currentPoiBuff=player.m.currentPoiBuff.add(2)
			player.m.TWtext=player.m.TWtext+'时间墙给你施加了2回合的剧毒效果！<br>'}
		}
		if(id.eq(4)) {
		if(Math.random()>0.5) {player.m.TWbp=player.m.TWbp.add(240)
            player.m.TWtext=player.m.TWtext+'时间墙使用了超级点击技能，总共获得了5倍的普通点数！<br>'}
		if(Math.random()>0.6) {player.m.TWPoison=n(0)
            player.m.TWtext=player.m.TWtext+'时间墙使用了蜂蜜，清除了自身的剧毒效果！<br>'}
		if(player.m.BasicPoint.lt(player.m.TWbp)) {player.m.currentHP=n(-9999)
			player.m.TWtext=player.m.TWtext+'你的普通点数被时间墙压制了，时间墙将你秒杀了！<br>'}
		}
		if(id.eq(5)) {
		if(Math.random()>0.8) {player.m.currentHP=player.m.currentHP.sub(tmp.p.maxHP.times(0.1))
            player.m.TWtext=player.m.TWtext+'时间墙使用了偷袭技能，对你造成了最大血量10%的伤害！<br>'}
		if(player.m.RoundUsed.div(3).floor().eq(player.m.RoundUsed.div(3))) {player.m.currentSP=n(0)
            player.m.TWtext=player.m.TWtext+'时间墙清除了你的技能点！<br>'}
		}
    }