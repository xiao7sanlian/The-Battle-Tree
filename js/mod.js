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
	num: "1.3.0",
	name: "Level 70",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1.0 2026/5/4</h3><br>
		- 增加基础功能，完成前15关<br>
	<h3>v0.2.0 2026/5/17</h3><br>
		- 完成前25关，增加了难度系统<br>
	<h3>v1.0.0 2026/5/24~2026/5/31</h3><br>
		- 完成前35关，增加了技能升级与里程碑<br>
		- 内置vue.js<br>
		<h3>v1.0.1 2026/6/27</h3><br>
		- 完成前36关，实现了所有技能升级的额外效果<br>
	<h3>v1.1.0 2026/7/4</h3><br>
		- 完成前40关<br>
		- 下个版本要搞一个在屏幕随机位置出现的敌人，不知道该怎么做了，请大家提供建议<br>
	<h3>v1.2.0 2026/7/10~2026/7/11</h3><br>
		- 完成前55关，加入3种敌人<br>
		- 加入章节系统<br>
	<h3>v1.3.0 2026/7/19~2026/7/20</h3><br>
		- 完成前70关，又加入3种敌人<br>`

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
	MineNum:n(0),
	dt:n(0),
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

	if(getBuyableAmount('p',41).gte(20)&&divisible(player.m.RoundUsed,10)) player.m.BasicPoint = player.m.BasicPoint.add(n(clickableEffect('m',41)).times(5))
	if(getBuyableAmount('p',43).gte(20)&&divisible(player.m.RoundUsed,5)){a=n(0.95)
		if(getBuyableAmount('p',43).gte(40)) a=n(0.9)
		player.m.TWhp = player.m.TWhp.times(a)}
	if(getBuyableAmount('p',44).gte(40)&&divisible(player.m.RoundUsed,10)){player.m.BasicPoint = player.m.BasicPoint.add(player.m.TWbp.times(0.2))
            player.m.TWbp = player.m.TWbp.times(0.8)}

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

	if(player.m.EnemyState.length>0){
		for (let i = 0; i < player.m.EnemyState.length; i++) {
			if(n(player.m.EnemyState[i].HP).gt(0)) {player.m.currentHP=player.m.currentHP.sub(player.m.EnemyState[i].ATK)
				if(player.m.EnemyState[i].Type=='药水小墙'){a=Math.floor(Math.random()*10)
				if(a==0) player.m.EnemyState[i].HP = n(player.m.EnemyState[i].HP).add(n(200).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5)))
				if(a==1) player.m.currentPoiBuff = player.m.currentPoiBuff.add(3)
				if(a==2) player.m.currentWeakBuff = player.m.currentWeakBuff.add(3)
				if(a==3) player.m.currentHP=player.m.currentHP.sub(n(150).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5)))
				if(a==4) player.m.currentSP=player.m.currentSP.sub(50)
			}
			}
			//if(n(player.m.EnemyState[i].HP).lte(0)) 
		for (let i = player.m.EnemyState.length - 1; i >= 0; i--) {
  			if (player.m.EnemyState[i].HP < 0) {
				if(player.m.EnemyState[i].Type=='普通小墙') player.m.PendingPt = player.m.PendingPt.add(10)
				if(player.m.EnemyState[i].Type=='强化小墙') player.m.PendingPt = player.m.PendingPt.add(20)
				if(player.m.EnemyState[i].Type=='迅捷小墙') player.m.PendingPt = player.m.PendingPt.add(20)
				if(player.m.EnemyState[i].Type=='装甲小墙') player.m.PendingPt = player.m.PendingPt.add(30)
				if(player.m.EnemyState[i].Type=='地雷小墙') {player.m.PendingPt = player.m.PendingPt.add(30)
					player.MineNum=player.MineNum.sub(1)
				}
				if(player.m.EnemyState[i].Type=='药水小墙') player.m.PendingPt = player.m.PendingPt.add(50)
    			player.m.EnemyState.splice(i, 1);
  			}
			}//从DeepSeek那里抄来的
		}
	}

	if(getClickableState('m',41)>0) setClickableState('m',41,getClickableState('m',41)-1)
	player.m.currentStrBuff=player.m.currentStrBuff.add(-1).max(0)
	player.m.currentWeakBuff=player.m.currentWeakBuff.add(-1).max(0)
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
		TWRecover(50,0.5)
		TWCritical(4,0.2)
		}
		if(id.eq(3)) {
		TWPoison(0.25,2)
		}
		if(id.eq(4)) {
		TWSuperClick(4,0.5)
		TWHoney(0.4)
		TWBPcheck()
		}
		if(id.eq(5)) {
		TWtouxi(0.1,0.2)
		if(player.m.RoundUsed.div(3).floor().eq(player.m.RoundUsed.div(3))) {player.m.currentSP=n(0)
            player.m.TWtext=player.m.TWtext+'时间墙清除了你的技能点！<br>'}
		}
		if(id.eq(6)) {
		if(player.m.TWhp.lte(1920000)){player.m.TWhp=n(0)
			player.m.TWtext=player.m.TWtext+'时间墙因血量流失过多，感到耻辱，自尽了！<br>'}
		}
		if(id.eq(7)) {
		TWRecover(233,0.5)
		TWCritical(2,0.2)
		TWSuperClick(3,0.5)
		if(player.m.currentPoiBuff.lt(5)) TWPoison(0.5,1)
    	}
		if(id.eq(8)) {
		TWSuperClick(4,0.5)
		TWCritical(5,0.1)
		TWhpLine(0.1)
		if(Math.random() < 0.5) makeParticles(Gear, 5)
		}
		if(id.eq(9)) {
		TWPoison(0.75,2)
		TWaddATK(0.5,5)
		}
		if(id.eq(10)){
			if(divisible(player.m.RoundUsed,2)) summonEnemy('Regular',n(Math.random()*3+1).floor().toNumber(),true)
		}
		if(id.eq(11)){
		summonEnemy('Strong',1,true)
		TWPoison(0.75,2)
		}
		if(id.eq(12)){if(divisible(player.m.RoundUsed,5)) summonEnemy('Regular',n(Math.random()*5+1).floor().toNumber(),true)
		TWRecover(300,0.5)
		TWCritical(4,0.25)
		}
		if(id.eq(13)){TWgetBP(0.5,300,0.3)
			TWCritical(4,0.2)
		}
		if(id.eq(14)){
			player.m.TWhp=player.m.TWhp.sub(100)
			a=['Regular','Strong','Fast']
			summonEnemy(a[Math.floor(Math.random() * 3)],2,true)
		}
		if(id.eq(15)){
			if(divisible(player.m.RoundUsed,2)) summonEnemy('Regular',Math.floor(Math.random() * 3 + 1),true)
			if(divisible(player.m.RoundUsed,3)) summonEnemy('Strong',Math.floor(Math.random() * 3 + 1),true)
			if(divisible(player.m.RoundUsed,5)) summonEnemy('Armed',Math.floor(Math.random() * 3 + 1),true)
		}
		if(id.eq(16)){
			TWRecover(200,1)
			if(player.m.TWbp.sub(player.m.BasicPoint).gte(1000)) TWSuperClick(4,0.25)
			if(player.m.TWhp.lt(1500)) summonEnemy('Regular',Math.floor(Math.random() * 3 + 3),true)
			TWBPcheck()
		}
		if(id.eq(17)){
			player.m.TWhp=player.m.TWhp.sub(1500)
			a=['Regular','Strong','Fast','Armed','Mine']
			summonEnemy(a[Math.floor(Math.random() * 5)],Math.floor(Math.random() * 2+1),true)
		}
	}

function TWpassiveSkill(id,diff){
	if(id.eq(14))player.m.TWhp=player.m.TWhp.add(n(100).times(diff))
}

//Timewall Common Skill
function TWSuperClick(mult,chance){
	if(Math.random()> 1-chance) {player.m.TWbp=player.m.TWbp.add(player.m.TWbpPerRound.times(mult))
    player.m.TWtext=player.m.TWtext+'时间墙使用了超级点击技能，总共获得了'+format(n(1).add(mult),1)+'倍的普通点数！<br>'}
}

function TWRecover(HP,chance){
	if(Math.random()> 1-chance) {player.m.TWhp=player.m.TWhp.add(HP)
	player.m.TWtext=player.m.TWtext+'时间墙回复了'+format(HP,2)+'点血量！<br>'}
}

function TWCritical(mult,chance){
	if(Math.random()> 1-chance) {player.m.currentHP=player.m.currentHP.sub(player.m.TWatk.times(mult))
	player.m.TWtext=player.m.TWtext+'时间墙使用了暴击技能，总共对你造成了'+format(n(1).add(mult),1)+'倍的伤害！<br>'}
}

function TWBPcheck(){
	if(player.m.BasicPoint.lt(player.m.TWbp)) {player.m.currentHP=n(-9999)
	player.m.TWtext=player.m.TWtext+'你的普通点数被时间墙压制了，时间墙将你秒杀了！<br>'}
}

function TWPoison(chance,round){
	if(Math.random()> 1-chance) {player.m.currentPoiBuff=player.m.currentPoiBuff.add(round)
	player.m.TWtext=player.m.TWtext+'时间墙给你施加了'+format(round,0)+'回合的剧毒效果！<br>'}
}

function TWHoney(chance){
	if(Math.random()> 1-chance) {player.m.TWPoison=n(0)
	player.m.TWtext=player.m.TWtext+'时间墙使用了蜂蜜，清除了自身的剧毒效果！<br>'}
}

function TWtouxi(percent,chance){
	if(Math.random()> 1-chance) {player.m.currentHP=player.m.currentHP.sub(tmp.p.maxHP.times(percent))
	player.m.TWtext=player.m.TWtext+'时间墙使用了偷袭技能，对你造成了最大血量'+format(percent.times(100),0)+'%的伤害！<br>'}
}
function TWhpLine(percent){
	if(player.m.currentHP.div(tmp.p.maxHP).lte(percent)) {player.m.currentHP=n(-9999)
	player.m.TWtext=player.m.TWtext+'时间墙使用了斩杀技能，将你斩杀了！<br>'}
}

function TWaddATK(chance,ATK){
	if(prob(chance)) {player.m.TWatk=player.m.TWatk.add(ATK)
		player.m.TWtext=player.m.TWtext+'时间墙增加了'+format(ATK)+'点攻击力！<br>'
	}
}

function TWgetBP(chance,bp,bpPercent=0){
	if(prob(chance)){a=player.m.BasicPoint.times(bpPercent).add(bp)
		player.m.BasicPoint=player.m.BasicPoint.sub(a)
		player.m.TWbp=player.m.TWbp.add(a)
		player.m.TWtext=player.m.TWtext+'时间墙使用了点数夺取技能，夺取了'+format(a)+'普通点数！<br>'
	}
}

function prob(n){
	return Math.random()<n
}

function divisible(num,con){return n(num).div(con).floor().eq(n(num).div(con))}

const Gear = {//齿轮出现时扣除你的100普通点数，被点击后恢复
    image:"options_wheel.png",
	angle:0,
    spread: 72,
    gravity: 0,
	offset:0,
    time: 5,
	width: 65,
    height: 65,
	speed:5,
	Timer:0,
	color:"#ff0000",
	x() {return Math.random() * (window.innerWidth - 100) + 50},
    y() {return Math.random() * (window.innerHeight - 100) + 50},
	onDelete(){player.m.BasicPoint=player.m.BasicPoint.sub(100)},//onStart
	onClick(){player.m.BasicPoint=player.m.BasicPoint.add(100)
		Vue.delete(particles, this.id)},
}

function summonEnemy(type,number,message=false){
	if(type == 'Regular'){
		for (let i = 0; i < number; i++) {
            a=n(200).times(Math.random()).add(200).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//HP
            b=n(5).times(Math.random()).add(10).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//ATK
            c=n(0.25)//DEF
			d=0//闪避率,EVA
            player.m.EnemyState.push({Type:'普通小墙',HP:n(a),ATK:n(b),DEF:n(c),EVA:d})}
		if(message) player.m.TWtext=player.m.TWtext+'时间墙召唤了'+format(number,0)+'个普通小墙！<br>'
	}
	if(type == 'Strong'){
		for (let i = 0; i < number; i++) {
            a=n(250).times(Math.random()).add(500).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//HP
            b=n(15).times(Math.random()).add(15).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//ATK
            c=n(0.4)//DEF
			d=0//闪避率,EVA
            player.m.EnemyState.push({Type:'强化小墙',HP:n(a),ATK:n(b),DEF:n(c),EVA:d})}
		if(message) player.m.TWtext=player.m.TWtext+'时间墙召唤了'+format(number,0)+'个强化小墙！<br>'
	}
	if(type == 'Fast'){
		for (let i = 0; i < number; i++) {
            a=n(50).times(Math.random()).add(250).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//HP
            b=n(20).times(Math.random()).add(40).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//ATK
            c=n(0)//DEF
			d=0.5//闪避率,EVA
            player.m.EnemyState.push({Type:'迅捷小墙',HP:n(a),ATK:n(b),DEF:n(c),EVA:d})}
		if(message) player.m.TWtext=player.m.TWtext+'时间墙召唤了'+format(number,0)+'个迅捷小墙！<br>'
	}
	if(type == 'Armed'){
		for (let i = 0; i < number; i++) {
            a=n(200).times(Math.random()).add(400).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//HP
            b=n(10).times(Math.random()).add(10).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//ATK
            c=n(0.75)//DEF
			d=0//闪避率,EVA
            player.m.EnemyState.push({Type:'装甲小墙',HP:n(a),ATK:n(b),DEF:n(c),EVA:d})}
		if(message) player.m.TWtext=player.m.TWtext+'时间墙召唤了'+format(number,0)+'个装甲小墙！<br>'
	}
	if(type == 'Mine'){
		for (let i = 0; i < number; i++) {
            a=n(200).times(Math.random()).add(800).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//HP
            b=n(40).times(Math.random()).add(40).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//ATK
            c=n(0)//DEF
			d=0//闪避率,EVA
            player.m.EnemyState.push({Type:'地雷小墙',HP:n(a),ATK:n(b),DEF:n(c),EVA:d})}
			player.MineNum = player.MineNum.add(number)
		if(message) player.m.TWtext=player.m.TWtext+'时间墙召唤了'+format(number,0)+'个地雷小墙！<br>'
	}
	if(type == 'Potion'){
		for (let i = 0; i < number; i++) {
            a=n(200).times(Math.random()).add(500).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//HP
            b=n(0).times(Math.random()).add(0).times(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel.pow(0.5))//ATK
            c=n(0.5)//DEF
			d=0.25//闪避率,EVA
            player.m.EnemyState.push({Type:'药水小墙',HP:n(a),ATK:n(b),DEF:n(c),EVA:d})}
		if(message) player.m.TWtext=player.m.TWtext+'时间墙召唤了'+format(number,0)+'个药水小墙！<br>'
	}
}

const Mine = {//地雷，鼠标放上去没事，离开后普通点数-100，血量-100
    image:"remove.png",
	angle:0,
    spread: 72,
    gravity: 0,
	offset:0,
    time: 3,
	width: 65,
    height: 65,
	speed:0,
	Timer:0,
	fadeInTime:1,
	color:"#dc25ec",
	//x: Math.random() * window.innerWidth,
    //y: Math.random() * window.innerHeight,
	x() {return Math.random() * (window.innerWidth - 100) + 50},
    y() {return Math.random() * (window.innerHeight - 100) + 50},
	onMouseLeave(){player.m.BasicPoint=player.m.BasicPoint.sub(100)
		player.m.currentHP=player.m.currentHP.sub(100)
		Vue.delete(particles, this.id)},
	onClick: function() {},
}