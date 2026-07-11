addLayer("I", {
    name: "Info", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#2600ff",
    //requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "信息", // Name of prestige currency
    //baseResource: "点数", // Name of resource prestige is based on
    //baseAmount() {return player.points}, // Get the current amount of baseResource
    //type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    update(diff){
    },
    row: 'side', // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat: {
   "General": {
        content: [ "main-display",["infobox",'About'],["infobox",'Basic1'],["infobox",'Lv'],["infobox",'Skill'],
        ["infobox",'Timewall'],["infobox",'Skill2'],["infobox",'Shop'],["infobox",'Item1'],["infobox",'Item2'],
        ["infobox",'Lv9'],["infobox",'Item3'],["infobox",'HPLoss'],["infobox",'Item4'],["infobox",'Upg1'],
        ["infobox",'TWskill'],["infobox",'Poison'],["infobox",'Poison2'],["infobox",'RanBox'],["infobox",'Upg2'],
        ["infobox",'Skill3'],["infobox",'Mil'],["infobox",'Skill4'],["infobox",'skillUpg'],["infobox",'Chapter'],
        ["infobox",'Enemy'],],
    },
    "Timewall": {
        content: [ "main-display",["infobox",'2'],["infobox",'3'],["infobox",'4'],["infobox",'5'],["infobox",'6'],["infobox",'7'],
                ["infobox",'8'],["infobox",'9'],["infobox",'10'],["infobox",'11'],["infobox",'12'],["infobox",'13'],["infobox",'14'],],
        unlocked(){return player.m.points.gte(15)}
    },
    "Enemy": {
        content: [ "main-display",["infobox",'Regular'],["infobox",'Strong'],["infobox",'Fast'],],
        unlocked(){return player.m.points.gte(41)}
    },},
    infoboxes: {
    About: {
        title: "关于此树",
        body() { return "这个树并不是一个真正的增量游戏，而是一个以增量为背景的RPG游戏。你需要不断提升自己，打败强力的敌人（时间墙），最终统治增量宇宙！" },
    },
    Basic1: {
        title: "关于通关奖励",
        body() { return "基础通关奖励的计算公式如下：获得点数 = 普通点数x0.1 + 当前关卡数x10" },
        unlocked(){return player.m.points.gt(1)}
    },
    Lv: {
        title: "关于等级系统",
        body() { return "等级系统在通过关卡2时解锁，你可以使用点数进行升级<br>每升一级，你的初始血量将会提升15，初始技能点提升5，攻击力提升2" },
        unlocked(){return player.m.points.gt(2)}
    },
    Skill: {
        title: "关于技能",
        body() { return "技能在关卡3时解锁，你解锁的第一个技能是“超级点击”，使你立刻获得5倍普通点击获得的普通点数，但是需要花费20技能点与20点数" },
        unlocked(){return player.m.points.gte(3)}
    },
    Timewall: {
        title: "关于时间墙",
        body() { return "时间墙是本游戏的第一种大型敌人，在第5关首次出现，拥有大量的血量。时间墙每回合会被动获得一些普通点数并进行一次攻击。除此之外，每一关的时间墙还会有不同的技能。当你击败时间墙时，你会获得时间墙所拥有普通点数的一半。记住，前期关卡的时间墙没有任何特殊技能！" },
        unlocked(){return player.m.points.gte(5)}
    },
    Skill2: {
        title: "关于暴击",
        body() { return "在关卡6，你会解锁技能“暴击”，对敌人立即造成5倍伤害，但是需要花费30技能点与30点数" },
        unlocked(){return player.m.points.gte(6)}
    },
    Shop: {
        title: "关于商店",
        body() { return "通过关卡6后，商店将会解锁，你可以在此购买关卡内使用的道具，更多信息请参见商店页面" },
        unlocked(){return player.m.points.gte(7)}
    },
    Item1: {
        title: "关于道具",
        body() { return "每关可用的各种道具数量取决于你在商店里购买的道具次数，且在退出关卡后重置" },
        unlocked(){return player.m.points.gte(7)}
    },
    Item2: {
        title: "关于技能药水",
        body() { return "技能药水可以让你回满技能点，在后面的关卡会频繁用到" },
        unlocked(){return player.m.points.gte(9)}
    },
    Lv9: {
        title: "关于关卡9",
        body() { return "技能药水在关卡9中确实很重要，但是有没有办法不用技能药水通过关卡9呢？试一试吧！" },
        unlocked(){return player.m.points.gte(10)}
    },
    Item3: {
        title: "关于力量药水",
        body() { return "力量药水的效果可以与暴击的效果叠加！让敌人看看15倍伤害的实力吧！" },
        unlocked(){return player.m.points.gte(10)}
    },
    HPLoss: {
        title: "关于血量流失",
        body() { return "血量流失在关卡11首次出现。与敌人的攻击不同，这一机制会让你每秒被动扣血，因此一定要速战速决！如果反应不过来，记得善用暂停功能！" },
        unlocked(){return player.m.points.gte(11)}
    },
    Item4: {
        title: "关于治疗药水",
        body() { return "你应该也看到了治疗药水的这么一个特性：当你使用治疗药水时，它会在本回合立刻生效！这个特性在后面可能有所帮助！" },
        unlocked(){return player.m.points.gte(12)}
    },
    Upg1: {
        title: "关于加点升级",
        body() { return "加点升级是本游戏的另外一个升级机制，可以加强你在某个特定方面的能力。加点升级需要用特别的点数解锁，这些新的点数也可以通过关卡胜利来获得！<br>防御点数奖励 = 钻石奖励x10x(通关时剩余血量/总血量)，最小为0" },
        unlocked(){return player.m.points.gte(14)}
    },
    TWskill: {
        title: "关于时间墙技能",
        body() { return "在关卡15，你将首次见到有特殊技能的时间墙！时间墙的具体特殊技能请至'Timewall'页面查看。同时，本游戏的基础玩法也已经完全地呈现给你了，在关卡15后你便需要综合运用游戏内的机制了" },
        unlocked(){return player.m.points.gte(15)}
    },
    Poison: {
        title: "关于毒气",
        body() { return "毒气在关卡16首次出现。这一机制会让你和时间墙（如果有的话）每隔一段时间增加1回合的剧毒效果，而剧毒效果会让你每回合减少50血量+10%总血量，因此这也需要你速战速决！" },
        unlocked(){return player.m.points.gte(16)}
    },
    Poison2: {
        title: "关于关卡效果表示",
        body() { return "在之前，你已经看到了毒气与血量流失这两个效果在每次出现时后面都有大串描述，而所有描述加起来会导致关卡目标很长，怎么办呢？注意到每个效果都只有一个变量，因此每个效果就可以表示为“效果名称(x)”的格式了！从关卡17开始，这个格式将会被正式启用。" },
        unlocked(){return player.m.points.gte(16)}
    },
    RanBox: {
        title: "关于天降礼盒",
        body() { return "天降礼盒在关卡21首次出现。其会每隔一段时间给你一个免费礼盒，在任意时刻都可以使用。但需要注意，免费礼盒出现负面事件的概率为50%！" },
        unlocked(){return player.m.points.gte(21)}
    },
    Upg2: {
        title: "关于点击点数",
        body() { return "点击点数可以让你购买可以提升点击获得的普通点数的加点升级！<br>点击点数奖励 = 通关时普通点数" },
        unlocked(){return player.m.points.gte(26)}
    },
    Skill3: {
        title: "关于偷袭",
        body() { return "偷袭技能在关卡29解锁，它能让你对敌人造成基于敌人当前血量的百分比伤害，有时会发挥出特别的效果！" },
        unlocked(){return player.m.points.gte(29)}
    },
    Mil: {
        title: "关于里程碑",
        body() { return "你的第一个里程碑在通过关卡30后解锁，可以在p层级'Milestones'页面查看。里程碑会在通过特定关卡时解锁，可以给你全局加成（如减少升级所需点数等）。继续探索吧！" },
        unlocked(){return player.m.points.gte(31)}
    },
    Skill4: {
        title: "关于点数夺取",
        body() { return "点数夺取技能在关卡31解锁，它能让你从时间墙那里夺取一定比例的普通点数，在某些时刻也会用到！" },
        unlocked(){return player.m.points.gte(31)}
    },
    skillUpg: {
        title: "关于技能升级",
        body() { return "在通过关卡32后，你将会解锁技能升级系统。技能升级需要一种特殊的货币——技能水晶，这种货币只能在商店中购买。技能升级与加点升级一样，都是推进游戏进度所必须的！" },
        unlocked(){return player.m.points.gte(33)}
    },
    Chapter: {
        title: "关于章节",
        body() { a="本游戏有一个隐藏的章节系统，仅表现为'm'层级的颜色变化。当前章节列表：第1章--关卡1~35，第2章--关卡36~???"
            return a
        },
        unlocked(){return player.m.points.gte(35)}
    },
    Enemy: {
        title: "关于敌人",
        body() { return "敌人在关卡41首次出现，也是贯穿此后绝大部分关卡的内容。一般来说，敌人的属性包括：血量、攻击力、防御力与等级。防御力以百分数表示，x%防御力意味着你对敌人造成的伤害会减少x%。等级会影响敌人的血量与攻击力，但是在目前不会出现大于1级的敌人。敌人的种类多种多样，具体种类及其特性详见'Enemies'界面。注意只有普通攻击与技能能对敌人造成伤害" },
        unlocked(){return player.m.points.gte(41)}
    },
    //TWskill
    2: {
        title: "Level 15 (ID:2)",
        body() { return "1.每回合有50%概率恢复50血量<br>1.每回合有20%概率使用暴击技能，造成5倍伤害<br>注：ID相同的时间墙，技能相同；此处没列举的关卡代表无任何特殊技能" },
        unlocked(){return player.m.points.gte(15)}
    },
    3: {
        title: "Level 18 (ID:3)",
        body() { return "每回合有25%概率给你施加2回合的剧毒效果" },
        unlocked(){return player.m.points.gte(18)}
    },
    4: {
        title: "Level 20 (ID:4)",
        body() { return "1.每回合有50%概率使用超级点击技能，获得5倍的普通点数<br>2.每回合有40%概率使用蜂蜜，清除剧毒效果<br>3.当你的普通点数小于时间墙的时，你将直接被秒杀" },
        unlocked(){return player.m.points.gte(20)}
    },
    5: {
        title: "Level 25 (ID:5)",
        body() { return "1.每回合有20%概率使用偷袭技能，造成最大血量10%的伤害<br>2.每3回合清除你的技能点"},
        unlocked(){return player.m.points.gte(25)}
    },
    6: {
        title: "Level 29 (ID:6)",
        body() { return "当时间墙血量在1920000及以下时会自尽"},
        unlocked(){return player.m.points.gte(29)}
    },
    7: {
        title: "Level 30 (ID:7)",
        body() { return "1.每回合有50%概率恢复233血量<br>2.每回合有20%概率使用暴击技能，造成4倍伤害<br>3.每回合有20%概率使用超级点击技能，获得5倍的普通点数<br>4.当你的剧毒效果持续时间小于5回合时，每回合有50%概率给你施加1回合的剧毒效果" },
        unlocked(){return player.m.points.gte(30)}
    },
    8: {
        title: "Level 35 (ID:8)",
        body() { a="1.每回合有50%概率使用超级点击技能，获得5倍的普通点数<br>2.每回合有10%概率使用暴击技能，造成5倍伤害<br>3.当你的血量小于最大血量的10%时，使用斩杀技能，你将被秒杀"
            a=a+"<br>4.每回合有50%概率在随机位置生成5个齿轮并朝5个方向扩散，每个齿轮生成时扣除你的100普通点数，持续5s后消失（不返还普通点数），点击可使其立即消失并返回普通点数" 
        return a},
        unlocked(){return player.m.points.gte(35)}
    },
    9: {
        title: "Level 40 (ID:9)",
        body() { return "1.每回合有75%概率给你施加2回合的剧毒效果<br>2.每回合有50%概率增加5攻击力" },
        unlocked(){return player.m.points.gte(40)}
    },
    10: {
        title: "Level 45 (ID:10)",
        body() { return "每2回合召唤1~3个普通小墙" },
        unlocked(){return player.m.points.gte(45)}
    },
    11: {
        title: "Level 49 (ID:11)",
        body() { return "1.每回合召唤1个强化小墙<br>2.每回合有75%概率给你施加2回合的剧毒效果" },
        unlocked(){return player.m.points.gte(49)}
    },
    12: {
        title: "Level 50 (ID:12)",
        body() { return "1.每5回合召唤1~5个普通小墙<br>2.每回合有50%概率恢复300血量<br>3.每回合有25%概率使用暴击技能，造成5倍伤害" },
        unlocked(){return player.m.points.gte(50)}
    },
    13: {
        title: "Level 54 (ID:13)",
        body() { return "1.每回合50%概率使用点数夺取技能，夺取你的50%+300普通点数<br>2.每回合有20%概率使用暴击技能，造成5倍伤害" },
        unlocked(){return player.m.points.gte(54)}
    },
    14: {
        title: "Level 55 (ID:14)",
        body() { return "1.每秒增加100血量<br>2.每回合献祭100血量，召唤2个随机敌人(在前3种敌人中随机选择)" },
        unlocked(){return player.m.points.gte(55)}
    },
    //Enemy
    Regular:{
        title: "普通小墙（内部名：Regular）",
        body() { return "血量范围：200~400，攻击力范围：10~15，防御力：25%<br>无任何其他特性，击败后掉落10点数，通关后随正常奖励一并获取<br>等级对敌人血量与攻击力的影响倍数：等级<sup>0.5</sup>" },
        unlocked(){return player.m.points.gte(41)}
    },
    Strong:{
        title: "强化小墙（内部名：Strong）",
        body() { return "血量范围：500~750，攻击力范围：15~30，防御力：40%<br>无任何其他特性，击败后掉落20点数" },
        unlocked(){return player.m.points.gte(46)}
    },
    Fast:{
        title: "快速小墙（内部名：Fast）",
        body() { return "血量范围：250~300，攻击力范围：40~60，防御力：0%，闪避率：50%<br>闪避率：每次攻击有x%概率闪避此次伤害<br>击败后掉落20点数" },
        unlocked(){return player.m.points.gte(51)}
    },
    }
})

addLayer("m", {
    name: "Maingame", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,

		points: new Decimal(1),
        page: n(0),
        selectedLevel: n(0),
        currentLevel: n(0),

        ButtonShowId: n(0),
        BasicPoint: n(0),
        RoundUsed: n(0),
        TimeToNext: n(0),

        SkillLim:[n(0),n(0),n(0),n(0)],


        currentHP: n(100),
        currentSP: n(20),

        currentRanBox:n(0),
        currentSPot:n(0),
        currentStrPot:n(0),
        currentHpPot:n(0),
        currentPoiPot:n(0),
        currentHoney:n(0),

        currentStrBuff:n(0),
        currentHpBuff:n(0),
        currentPoiBuff:n(0),

        TWhp:n(0),
        TWbp:n(0),
        TWbpPerRound:n(0),
        TWatk:n(0),

        TWPoison:n(0),

        EnemyState:[],
        PendingPt:n(0),

        allTimer:n(0),
        TimerforPoison:n(0),

        TimerforRanBox:n(0),
        FreeRanBox:n(0),

        TWtext:'',
    }},
    //color: "#ffffff",
    color(){a="#ffffff"
        if(player.m.page.gte(7)) a="#fff952"
        return a
    },
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "最高关卡", // Name of prestige currency
    baseResource: "金币", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: 暂停", onPress(){setClickableState(this.layer,52,1-getClickableState(this.layer,52))}},
    ],
    update(diff){
        player.devSpeed = n(1-getClickableState('m',52))
        if(player.m.TimeToNext.gt(0)) player.m.TimeToNext=player.m.TimeToNext.sub(diff).max(0)
        if(player.m.currentLevel.gt(0)&&!tmp.m.LevelSucceed&&!tmp.m.LevelFailed){player.m.allTimer=player.m.allTimer.add(diff)
             player.m.TimerforPoison=player.m.TimerforPoison.add(diff)
            player.m.TimerforRanBox=player.m.TimerforRanBox.add(diff)
            if(player.m.TimerforPoison.gte(tmp.m.goal[player.m.currentLevel.toNumber()].PoiTime)&&tmp.m.goal[player.m.currentLevel.toNumber()].PoiTime!==undefined&&player.devSpeed.gt(0)){
                player.m.TimerforPoison=player.m.TimerforPoison.sub(tmp.m.goal[player.m.currentLevel.toNumber()].PoiTime)
                player.m.currentPoiBuff=player.m.currentPoiBuff.add(1)
                if(player.m.TWhp.gt(0)) player.m.TWPoison=player.m.TWPoison.add(1)
            }
        if(player.m.TimerforRanBox.gte(tmp.m.goal[player.m.currentLevel.toNumber()].RanBox)&&tmp.m.goal[player.m.currentLevel.toNumber()].RanBox!==undefined&&player.devSpeed.gt(0)){
                player.m.TimerforRanBox=player.m.TimerforRanBox.sub(tmp.m.goal[player.m.currentLevel.toNumber()].RanBox)
                player.m.FreeRanBox=player.m.FreeRanBox.add(1)
            }
        }
        if(tmp.m.goal[player.m.currentLevel.toNumber()].DPS!==undefined&&tmp.m.ButtonCanBeSeen) player.m.currentHP=player.m.currentHP.sub(tmp.m.HPActualLoss.times(diff))
        player.m.currentHP=player.m.currentHP.min(tmp.p.maxHP)

        if(player.m.TWhp.gt(0)&&tmp.m.goal[player.m.currentLevel.toNumber()].TimewallId!=undefined) TWpassiveSkill(tmp.m.goal[player.m.currentLevel.toNumber()].TimewallId,diff)
    },
    layerShown(){return true},
    passiveGeneration()
    {
        mult = 0
        return mult
    },
    tabFormat: {
    "MainGame": {
        content: [ "main-display",["clickables",[1,2]],["display-text", () => tmp.m.Leveltext],["clickables",[3]],
        ["display-text", () => tmp.m.InLeveltext],["clickables",[4,6,7]],["display-text", () => player.m.TWtext],["clickables",[5]],
        ["display-text", () => tmp.m.Enemytext],
        ],
        unlocked(){return true},
    },
    },
    clickables: {
    11: {
        title() {return "Level "+format(player.m.page.times(5).add(1),0)},
        display() {return "目标："+tmp.m.goaldescription[player.m.page.times(5).toNumber()]},
        unlocked() {return player.m.currentLevel.eq(0)},
        canClick() {return player.m.points.gte(player.m.page.times(5).add(1))&&player.m.page.times(5).add(1).lte(tmp.m.goaldescription.length)},
        onClick() {player.m.selectedLevel = player.m.page.times(5).add(1)},
    },
    12: {
        title() {return "Level "+format(player.m.page.times(5).add(2),0)},
        display() {return "目标："+tmp.m.goaldescription[player.m.page.times(5).add(1).toNumber()]},
        unlocked() {return player.m.points.gte(2)&&player.m.currentLevel.eq(0)},
        canClick() {return player.m.points.gte(player.m.page.times(5).add(2))&&player.m.page.times(5).add(2).lte(tmp.m.goaldescription.length)},
        onClick() {player.m.selectedLevel = player.m.page.times(5).add(2)},
    },
    13: {
        title() {return "Level "+format(player.m.page.times(5).add(3),0)},
        display() {return "目标："+tmp.m.goaldescription[player.m.page.times(5).add(2).toNumber()]},
        unlocked() {return player.m.points.gte(3)&&player.m.currentLevel.eq(0)},
        canClick() {return player.m.points.gte(player.m.page.times(5).add(3))&&player.m.page.times(5).add(3).lte(tmp.m.goaldescription.length)},
        onClick() {player.m.selectedLevel = player.m.page.times(5).add(3)},
    },
    14: {
        title() {return "Level "+format(player.m.page.times(5).add(4),0)},
        display() {return "目标："+tmp.m.goaldescription[player.m.page.times(5).add(3).toNumber()]},
        unlocked() {return player.m.points.gte(4)&&player.m.currentLevel.eq(0)},
        canClick() {return player.m.points.gte(player.m.page.times(5).add(4))&&player.m.page.times(5).add(4).lte(tmp.m.goaldescription.length)},
        onClick() {player.m.selectedLevel = player.m.page.times(5).add(4)},
    },
    15: {
        title() {return "Level "+format(player.m.page.times(5).add(5),0)},
        display() {return "目标："+tmp.m.goaldescription[player.m.page.times(5).add(4).toNumber()]},
        unlocked() {return player.m.points.gte(5)&&player.m.currentLevel.eq(0)},
        canClick() {return player.m.points.gte(player.m.page.times(5).add(5))&&player.m.page.times(5).add(5).lte(tmp.m.goaldescription.length)},
        onClick() {player.m.selectedLevel = player.m.page.times(5).add(5)},
    },
    21: {
        title() {return "上一页"},
        display() {return "当前页数："+format(player.m.page,0)},
        unlocked() {return player.m.currentLevel.eq(0)},
        canClick() {return player.m.page.gte(1)},
        onClick() {player.m.page = player.m.page.sub(1)},
    },
    22: {
        title() {return "下一页"},
        display() {return "当前页数："+format(player.m.page,0)},
        unlocked() {return player.m.currentLevel.eq(0)},
        canClick() {return player.m.points.gte(player.m.page.times(5).add(6))},
        onClick() {player.m.page = player.m.page.add(1)},
    },
    //Start
    31: {
        title() {return "开始游戏"},
        display() {return '进入Level '+format(player.m.selectedLevel,0)},
        unlocked() {return player.m.selectedLevel.neq(0)&&player.m.currentLevel.eq(0)},
        canClick() {return player.m.currentLevel.eq(0)},
        onClick() {player.m.currentLevel = player.m.selectedLevel
            player.m.currentHP = tmp.p.maxHP
            player.m.currentSP = tmp.p.maxSP
            player.m.currentRanBox = getBuyableAmount('p',11)
            player.m.currentSPot = getBuyableAmount('p',12)
            player.m.currentStrPot = getBuyableAmount('p',13)
            player.m.currentHpPot = getBuyableAmount('p',14)
            player.m.currentPoiPot = getBuyableAmount('p',21)
            player.m.currentHoney = getBuyableAmount('p',22)
            if(tmp.m.goal[player.m.currentLevel.toNumber()].TimewallId!==undefined){
                player.m.TWhp = tmp.m.goal[player.m.currentLevel.toNumber()].TimewallHP
                player.m.TWatk = tmp.m.goal[player.m.currentLevel.toNumber()].TimewallATK
                player.m.TWbpPerRound = tmp.m.goal[player.m.currentLevel.toNumber()].TimewallBP
            }
            player.m.allTimer=n(0)
            player.m.TimerforPoison=n(0)
            player.m.TimerforRanBox=n(0)
            player.m.FreeRanBox=n(0)
            player.m.SkillLim=[n(-1),n(-1),n(-1),n(-1)]
            if(tmp.m.goal[player.m.currentLevel.toNumber()].Skill1Limit!=undefined) player.m.SkillLim[0]=tmp.m.goal[player.m.currentLevel.toNumber()].Skill1Limit
            if(tmp.m.goal[player.m.currentLevel.toNumber()].Skill2Limit!=undefined) player.m.SkillLim[1]=tmp.m.goal[player.m.currentLevel.toNumber()].Skill2Limit
            if(tmp.m.goal[player.m.currentLevel.toNumber()].Skill3Limit!=undefined) player.m.SkillLim[2]=tmp.m.goal[player.m.currentLevel.toNumber()].Skill3Limit
            if(tmp.m.goal[player.m.currentLevel.toNumber()].Skill4Limit!=undefined) player.m.SkillLim[3]=tmp.m.goal[player.m.currentLevel.toNumber()].Skill4Limit
            player.m.EnemyState=[]
            if(tmp.m.goal[player.m.currentLevel.toNumber()].Enemies.Regular!=undefined) summonEnemy('Regular',tmp.m.goal[player.m.currentLevel.toNumber()].Enemies.Regular.toNumber())
            if(tmp.m.goal[player.m.currentLevel.toNumber()].Enemies.Strong!=undefined) summonEnemy('Strong',tmp.m.goal[player.m.currentLevel.toNumber()].Enemies.Strong.toNumber())
            if(tmp.m.goal[player.m.currentLevel.toNumber()].Enemies.Fast!=undefined) summonEnemy('Fast',tmp.m.goal[player.m.currentLevel.toNumber()].Enemies.Fast.toNumber())
        },
    },
    //In-level Basic contents(id=0)
    41: {
        title() {return "点击"},
        display() {return "获得"+format(clickableEffect(this.layer,this.id))+'普通点数，有1回合的冷却时间<br>当前剩余冷却时间：'+format(n(getClickableState(this.layer,this.id)),0)+'回合'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(0)},
        effect(){a=n(100).add(getBuyableAmount('p',33))
            return a
        },
        canClick() {a= getClickableState(this.layer,this.id) == 0&&tmp.m.ButtonCanClick
            return a
        },
        onClick() {player.m.BasicPoint = player.m.BasicPoint.add(clickableEffect(this.layer,this.id))
            if(getBuyableAmount('p',41).gte(40)&&chance(0.05)) player.m.BasicPoint = player.m.BasicPoint.add(n(clickableEffect('m',41)).times(5))
            setClickableState(this.layer,this.id,2)
            AnyOperation()
        },
    },
    42: {
        title() {return "轻度点击"},
        display() {return "获得"+format(clickableEffect(this.layer,this.id))+'普通点数，无冷却时间'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(0)},
        effect(){a=n(50).add(getBuyableAmount('p',34))
            return a
        },
        canClick() {a=tmp.m.ButtonCanClick
            return a
        },
        onClick() {player.m.BasicPoint = player.m.BasicPoint.add(clickableEffect(this.layer,this.id))
            if(getBuyableAmount('p',41).gte(40)&&chance(0.05)) player.m.BasicPoint = player.m.BasicPoint.add(n(clickableEffect('m',41)).times(5))
            AnyOperation()
        },
    },
    43: {
        title() {return "切换至技能界面"},
        display() {return "切换至技能界面"},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(0)&&player.m.points.gte(3)},
        canClick() {a=tmp.m.ButtonCanClick&&!tmp.m.goal[player.m.currentLevel.toNumber()].noSkill
            return a
        },
        onClick() {player.m.ButtonShowId = n(1)
        },
    },
    44: {
        title() {return "切换至道具界面"},
        display() {return "切换至道具界面"},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(0)&&player.m.points.gte(7)},
        canClick() {a=tmp.m.ButtonCanClick&&!tmp.m.goal[player.m.currentLevel.toNumber()].noItem
            return a
        },
        onClick() {player.m.ButtonShowId = n(2)
        },
    },
    45: {
        title() {return "攻击"},
        display() {return "对敌人进行一次攻击，造成"+format(tmp.m.CurrentATK)+'伤害<br>仅当敌人存活时可使用'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(0)&&player.m.points.gte(5)},
        canClick() {a=tmp.m.ButtonCanClick&&(player.m.TWhp.gt(0)||player.m.EnemyState.length>0)
            return a
        },
        onClick() {player.m.TWhp = player.m.TWhp.sub(tmp.m.CurrentATK)
            if(getBuyableAmount('p',41).gte(40)&&chance(0.05)) player.m.TWhp = player.m.TWhp.sub(tmp.m.CurrentATK.times(5))
            if(player.m.EnemyState.length>0){
		        for (let i = 0; i < player.m.EnemyState.length; i++) {
			        if(prob(1-player.m.EnemyState[i].EVA)) player.m.EnemyState[i].HP=n(player.m.EnemyState[i].HP).sub(tmp.m.CurrentATK.times(n(1).sub(player.m.EnemyState[i].DEF)))
		        }
	        }
            AnyOperation()
        },
    },
    46: {
        title() {return "使用免费礼盒"},
        display() {return "剩余免费礼盒："+format(player.m.FreeRanBox,0)},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(0)&&tmp.m.goal[player.m.currentLevel.toNumber()].RanBox!==undefined},
        canClick() {a=player.devSpeed.gt(0)&&player.m.FreeRanBox.gte(1)
            return a
        },
        onClick() {player.m.FreeRanBox=player.m.FreeRanBox.sub(1)
            RanBox(0.5)
        },
    },
    //Skill(id=1)
    61: {
        title() {return "超级点击"},
        display() {a= "消耗"+format(this.SPcost())+"技能点与"+format(this.PTcost())+"点数，获得"+format(clickableEffect(this.layer,this.id),1)+'倍点击所获得的普通点数'
            if(player.m.SkillLim[0].gte(0)) a=a+'<br>剩余使用次数：'+format(player.m.SkillLim[0])
            return a
        },
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(1)},
        effect(){return getBuyableAmount('p',41).times(0.1).add(5)},
        canClick() {a= tmp.m.ButtonCanClick&&player.points.gte(this.PTcost())&&player.m.currentSP.gte(this.SPcost())&&player.m.SkillLim[0].neq(0)
            return a
        },
        SPcost(){a=n(20)
            if(getBuyableAmount('p',41).gte(30)) a=a.sub(5)
            return a
        },
        PTcost(){a=n(20)
            if(getBuyableAmount('p',41).gte(30)) a=a.sub(5)
            return a
        },
        onClick() {player.m.BasicPoint = player.m.BasicPoint.add(n(clickableEffect(this.layer,41)).times(clickableEffect(this.layer,this.id)))
            if(getBuyableAmount('p',41).gte(10)&&chance(0.2)) player.m.BasicPoint = player.m.BasicPoint.add(clickableEffect(this.layer,42))
            player.points=player.points.sub(this.PTcost())
            player.m.currentSP=player.m.currentSP.sub(this.SPcost())
            player.m.SkillLim[0]=player.m.SkillLim[0].sub(1)
            AnyOperation()
        },
    },
    62: {
        title() {return "暴击"},
        display() {a="消耗"+format(this.SPcost())+"技能点与"+format(this.PTcost())+"点数，对敌人造成"+format(clickableEffect(this.layer,this.id),1)+'倍伤害<br>仅当敌人存活时可使用'
            if(player.m.SkillLim[1].gte(0)) a=a+'<br>剩余使用次数：'+format(player.m.SkillLim[1])
            return a
        },
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(1)&&player.m.points.gte(6)},
        effect(){return getBuyableAmount('p',42).times(0.1).add(5)},
        canClick() {a= tmp.m.ButtonCanClick&&player.points.gte(this.PTcost())&&player.m.currentSP.gte(this.SPcost())&&(player.m.TWhp.gt(0)||player.m.EnemyState.length>0)&&player.m.SkillLim[1].neq(0)
            return a
        },
        SPcost(){a=n(30)
            if(getBuyableAmount('p',42).gte(30)) a=a.sub(5)
            return a
        },
        PTcost(){a=n(30)
            if(getBuyableAmount('p',42).gte(30)) a=a.sub(5)
            return a
        },
        onClick() {player.m.TWhp = player.m.TWhp.sub(tmp.m.CurrentATK.times(clickableEffect(this.layer,this.id)))
            if((getBuyableAmount('p',42).gte(10)&&chance(0.2))||(getBuyableAmount('p',42).gte(20)&&chance(0.5))) player.m.currentHP=player.m.currentHP.add(tmp.p.maxHP.times(0.05))
            if(player.m.EnemyState.length>0){
		        for (let i = 0; i < player.m.EnemyState.length; i++) {
			        if(prob(1-player.m.EnemyState[i].EVA)) player.m.EnemyState[i].HP=n(player.m.EnemyState[i].HP).sub(tmp.m.CurrentATK.times(5).times(n(1).sub(player.m.EnemyState[i].DEF)))
		        }
	        }
            player.points=player.points.sub(this.PTcost())
            player.m.currentSP=player.m.currentSP.sub(this.SPcost())
            player.m.SkillLim[1]=player.m.SkillLim[1].sub(1)
            AnyOperation()
        },
    },
    63: {
        title() {return "偷袭"},
        display() {a= "消耗"+format(this.SPcost())+"技能点与"+format(this.PTcost())+"点数，对敌人造成敌人当前血量的"+format(clickableEffect(this.layer,this.id).times(100),1)+'%伤害<br>仅当敌人存活时可使用'
            if(player.m.SkillLim[2].gte(0)) a=a+'<br>剩余使用次数：'+format(player.m.SkillLim[2])
            return a
        },
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(1)&&player.m.points.gte(29)},
        effect(){return n(0.2).add(getBuyableAmount('p',43).times(0.002))},
        canClick() {a= tmp.m.ButtonCanClick&&player.points.gte(this.PTcost())&&player.m.currentSP.gte(this.SPcost())&&(player.m.TWhp.gt(0)||player.m.EnemyState.length>0)&&player.m.SkillLim[2].neq(0)
            return a
        },
        SPcost(){a=n(50)
            if(getBuyableAmount('p',43).gte(30)) a=a.sub(10)
            return a
        },
        PTcost(){a=n(100)
            if(getBuyableAmount('p',43).gte(30)) a=a.sub(25)
            return a
        },
        onClick() {player.m.TWhp = player.m.TWhp.times(n(1).sub(clickableEffect(this.layer,this.id)))
            if(getBuyableAmount('p',43).gte(10))player.m.TWhp = player.m.TWhp.sub(tmp.m.CurrentATK)
            if(player.m.EnemyState.length>0){
		        for (let i = 0; i < player.m.EnemyState.length; i++) {
			        player.m.EnemyState[i].HP=n(player.m.EnemyState[i].HP).times(n(1).sub(clickableEffect(this.layer,this.id)))
		        }
	        }
            player.points=player.points.sub(this.PTcost())
            player.m.currentSP=player.m.currentSP.sub(this.SPcost())
            player.m.SkillLim[2]=player.m.SkillLim[2].sub(1)
            AnyOperation()
        },
    },
    64: {
        title() {return "点数夺取"},
        display() {a="消耗"+format(this.SPcost())+"技能点与"+format(this.PTcost())+"点数，夺取时间墙普通点数的"+format(clickableEffect(this.layer,this.id).times(100),1)+'%<br>仅当时间墙存活时可使用'
            if(player.m.SkillLim[3].gte(0)) a=a+'<br>剩余使用次数：'+format(player.m.SkillLim[3])
            return a
        },
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(1)&&player.m.points.gte(31)},
        effect(){return n(0.5).add(getBuyableAmount('p',44).times(0.005))},
        canClick() {a= tmp.m.ButtonCanClick&&player.points.gte(this.PTcost())&&player.m.currentSP.gte(this.SPcost())&&player.m.TWhp.gt(0)&&player.m.SkillLim[3].neq(0)
            return a
        },
        SPcost(){a=n(30)
            if(getBuyableAmount('p',44).gte(30)) a=a.sub(5)
            return a
        },
        PTcost(){a=n(60)
            if(getBuyableAmount('p',44).gte(30)) a=a.sub(20)
            return a
        },
        onClick() {player.m.BasicPoint = player.m.BasicPoint.add(player.m.TWbp.times(clickableEffect(this.layer,this.id)))
            player.m.TWbp = player.m.TWbp.times(n(1).sub(clickableEffect(this.layer,this.id)))
            if(getBuyableAmount('p',44).gte(10)) {player.m.BasicPoint = player.m.BasicPoint.add(100)
            player.m.TWbp = player.m.TWbp.sub(100)}
            if(getBuyableAmount('p',44).gte(20)) player.point = player.m.point.add(50)
            player.points=player.points.sub(this.PTcost())
            player.m.currentSP=player.m.currentSP.sub(this.SPcost())
            player.m.SkillLim[3]=player.m.SkillLim[3].sub(1)
            AnyOperation()
        },
    },
    65: {
        title() {return "退出技能界面"},
        display() {return "回到普通界面"},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(1)},
        canClick() {a= tmp.m.ButtonCanClick
            return a
        },
        onClick() {player.m.ButtonShowId = n(0)
        },
    },
    //Item(Id=2)
    71: {
        title() {return "惊喜礼盒("+format(player.m.currentRanBox,0)+')'},
        display() {return '使用一次惊喜礼盒，具体效果见商店页面'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(2)&&player.m.points.gte(7)},
        canClick() {a= tmp.m.ButtonCanClick&&player.m.currentRanBox.gte(1)
            return a
        },
        onClick() {player.m.currentRanBox = player.m.currentRanBox.sub(1)
            RanBox()
            AnyOperation()
        },
    },
    72: {
        title() {return "技能药水("+format(player.m.currentSPot,0)+')'},
        display() {return '使用一次技能药水，恢复技能点'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(2)&&player.m.points.gte(9)},
        canClick() {a= tmp.m.ButtonCanClick&&player.m.currentSPot.gte(1)
            return a
        },
        onClick() {player.m.currentSPot = player.m.currentSPot.sub(1)
            player.m.currentSP=tmp.p.maxSP
            AnyOperation()
        },
    },
    73: {
        title() {return "力量药水("+format(player.m.currentStrPot,0)+')'},
        display() {return '使用一次力量药水，获得5回合的力量buff'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(2)&&player.m.points.gte(10)},
        canClick() {a= tmp.m.ButtonCanClick&&player.m.currentStrPot.gte(1)
            return a
        },
        onClick() {player.m.currentStrPot = player.m.currentStrPot.sub(1)
            player.m.currentStrBuff=player.m.currentStrBuff.add(6)
            AnyOperation()
        },
    },
    74: {
        title() {return "治疗药水("+format(player.m.currentHpPot,0)+')'},
        display() {return '使用一次治疗药水，获得5回合的生命恢复buff'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(2)&&player.m.points.gte(11)},
        canClick() {a= tmp.m.ButtonCanClick&&player.m.currentHpPot.gte(1)
            return a
        },
        onClick() {player.m.currentHpPot = player.m.currentHpPot.sub(1)
            player.m.currentHpBuff=player.m.currentHpBuff.add(5)
            AnyOperation()
        },
    },
    75: {
        title() {return "剧毒药水("+format(player.m.currentPoiPot,0)+')'},
        display() {return '使用一次剧毒药水，使敌人获得5回合的剧毒buff<br>仅当敌人存活时可使用'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(2)&&player.m.points.gte(13)},
        canClick() {a= tmp.m.ButtonCanClick&&player.m.currentPoiPot.gte(1)&&player.m.TWhp.gt(0)
            return a
        },
        onClick() {player.m.currentPoiPot = player.m.currentPoiPot.sub(1)
            player.m.TWPoison=player.m.TWPoison.add(5)
            AnyOperation()
        },
    },
    76: {
        title() {return "蜂蜜("+format(player.m.currentHoney,0)+')'},
        display() {return '使用一次蜂蜜，清除你的剧毒buff<br>仅当你拥有剧毒buff时可使用'},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(2)&&player.m.points.gte(17)},
        canClick() {a= tmp.m.ButtonCanClick&&player.m.currentHoney.gte(1)&&player.m.currentPoiBuff.gt(0)
            return a
        },
        onClick() {player.m.currentHoney = player.m.currentHoney.sub(1)
            player.m.currentPoiBuff=n(0)
            AnyOperation()
        },
    },
    77: {
        title() {return "退出道具界面"},
        display() {return "回到普通界面"},
        unlocked() {return tmp.m.ButtonCanBeSeen&&player.m.ButtonShowId.eq(2)},
        canClick() {a= tmp.m.ButtonCanClick
            return a
        },
        onClick() {player.m.ButtonShowId = n(0)
        },
    },
    //Other
    51: {
        title() {a="退出关卡"
            if(tmp.m.LevelSucceed) a='继续'
            return a
        },
        display() {a= '回到选关界面'
            if(tmp.m.LevelSucceed) a=a+'并领取通关奖励'
            return a
        },
        unlocked() {return player.m.currentLevel.neq(0)},
        canClick() {return true},
        onClick() {if(tmp.m.LevelSucceed){player.points = player.points.add(tmp.m.LevelReward)
            if(player.m.points.gte(14))player.p.DefensePoint=player.p.DefensePoint.add(tmp.m.LevelReward2)
            if(player.m.points.gte(26))player.p.pointPoint=player.p.pointPoint.add(tmp.m.LevelReward3)
            if(player.m.currentLevel.eq(player.m.points)) player.m.points=player.m.points.add(1)
        }
            player.m.ButtonShowId=n(0)
            player.m.currentLevel = n(0)
            player.m.BasicPoint = n(0)
            player.m.RoundUsed = n(0)
            player.m.TimeToNext = n(0)
            setClickableState('m',41,0)
            player.m.TWhp = n(0)
            player.m.TWatk = n(0)
            player.m.TWbpPerRound = n(0)
            player.m.TWbp = n(0)
            player.m.TWtext=''
            player.m.currentStrBuff=n(0)
            player.m.currentHpBuff=n(0)
            player.m.currentPoiBuff=n(0)
            player.m.TWPoison=n(0)
            player.m.PendingPt=n(0)
        },
    },
    52: {
        title() {a="暂停游戏"
            return a
        },
        display() {a= '点击暂停游戏，再次点击以恢复'
            return a
        },
        unlocked() {return true},
        canClick() {return true},
        onClick() {setClickableState(this.layer,this.id,1-getClickableState(this.layer,this.id))
        },
    },
    },
    goaldescription(){a=['获得900普通点数','在6回合内获得450普通点数','在2回合内获得600普通点数','在6回合内获得900普通点数','击败时间墙并获得1500普通点数',//1-5
        '在5回合内击败时间墙且获得1100普通点数','在1回合内获得850普通点数','在7回合内获得1400普通点数','在3回合内击败时间墙并获得600普通点数','在16回合内击败时间墙并获得1250普通点数',//6-10
        '在血量流失的状态下获得2000普通点数（每秒流失10血量）','在血量流失的状态下5回合内获得2000普通点数（每秒流失30血量）','在血量流失的状态下不使用技能5回合内击败时间墙并获得1300普通点数（每秒流失15血量）',//11-13
        '在血量流失的状态下2回合内获得1000普通点数（每秒流失150血量）','击败时间墙并获得1500普通点数','在毒气中获得3500普通点数（每3秒增加1回合剧毒buff）',//14-16
        '在毒气(0.1)中不使用技能3回合内击败时间墙并获得850普通点数','在血量流失(45)的情况下不使用技能击败时间墙并获得600普通点数','在血量流失(35)与毒气(2)的情况下10回合内击败时间墙并获得1000普通点数',//17-19
        '在血量流失(30)与毒气(5)的情况下击败时间墙并获得2100普通点数','在天降礼盒(5)的情况下5回合内获得3600普通点数','在天降礼盒(3)的情况下1回合内获得3000普通点数',//20-22
        '在血量流失(50)与天降礼盒(1)的情况下不使用技能1回合内获得300普通点数','在血量流失(25)与天降礼盒(1)的情况下15回合内获得5000普通点数','在血量流失(50)与天降礼盒(2)的情况下10回合内击败时间墙并获得1500普通点数',//23-25
        '在6回合内不使用技能与物品获得456普通点数','在天降礼盒(2)的情况下10回合内不使用技能与物品获得1000普通点数','在血量流失(25)的情况下14回合内获得6120普通点数','在血量流失(30)的情况下3回合内击败时间墙并获得200普通点数',//26-29
        '在毒气(3)下击败时间墙并获得3500普通点数','在6回合内不使用物品击败时间墙并获得1575普通点数','在天降礼盒(1)的情况下8回合内获得6000普通点数','在血量流失(150)的情况下3回合内不使用物品获得1606.5普通点数',//30-33
        '在血量流失(100)的情况下2回合内不使用物品击败时间墙并获得2000普通点数','在60回合内击败时间墙并获得7000普通点数',//34-35
        //Chepter 2
        '在5回合内不使用物品获得1420.4普通点数且最多使用2次超级点击技能','在3回合内不使用物品击败时间墙且最多使用2次暴击技能','在血量流失(20)的情况下获得3500普通点数且最多使用3次超级点击技能',//36-38
        '在天降礼盒(1)的情况下1回合内获得1000普通点数且最多使用1次超级点击技能','在25回合内击败时间墙并获得2400普通点数且所有技能最多使用2次',//39~40
        '在7回合内击败所有敌人并获得500普通点数','在13回合内不使用物品击败所有敌人并获得600普通点数','在血量流失(30)的情况下击败所有敌人并获得1500普通点数','在血量流失(15)的情况下击败所有敌人并获得600普通点数且最多使用1次暴击技能',//41~44
        '在15回合内击败时间墙与所有敌人并获得1200普通点数','在11回合内击败所有敌人并获得1500普通点数且最多使用2次超级点击技能','在天降礼盒(3)的情况下不使用技能击败所有敌人','在8回合内击败所有敌人并获得750普通点数且最多使用1次超级点击与暴击技能',//45~48
        '在毒气(3)的情况下15回合内击败时间墙与所有敌人并获得1000普通点数','在血量流失(25)与毒气(5)的情况下30回合内击败时间墙与所有敌人并获得3000普通点数且所有技能最多使用4次',//49~50
        '在5回合内击败所有敌人并获得1普通点数','在10回合内不使用技能击败所有敌人并获得400普通点数','在血量流失(30)与毒气(5)的情况下击败所有敌人并获得3500普通点数',//51~53
        '在血量流失(50)的情况下击败时间墙与所有敌人并获得3500普通点数','在11回合内击败时间墙与所有敌人并获得1600普通点数且所有技能最多使用3次'//54~55
    ]
        return a
    },
    goal:{0:{},
        1:{BasicPoint:n(900),Difficulty:n(1.0),},
        2:{BasicPoint:n(450),RoundLimit:n(6),Difficulty:n(1.1),},
        3:{BasicPoint:n(600),RoundLimit:n(2),Difficulty:n(1.1),},
        4:{BasicPoint:n(900),RoundLimit:n(6),Difficulty:n(1.2),},
        5:{BasicPoint:n(1500),TimewallId:n(1),TimewallHP:n(120),TimewallATK:n(5),TimewallBP:n(100),Difficulty:n(1.4),},
        6:{BasicPoint:n(1100),RoundLimit:n(5),TimewallId:n(1),TimewallHP:n(70),TimewallATK:n(20),TimewallBP:n(400),Difficulty:n(1.6),},
        7:{BasicPoint:n(850),RoundLimit:n(1),Difficulty:n(1.8),},
        8:{BasicPoint:n(1400),RoundLimit:n(7),Difficulty:n(2.0),},
        9:{BasicPoint:n(600),RoundLimit:n(3),TimewallId:n(1),TimewallHP:n(140),TimewallATK:n(20),TimewallBP:n(600),Difficulty:n(2.1),},
        10:{BasicPoint:n(1250),RoundLimit:n(16),TimewallId:n(1),TimewallHP:n(378),TimewallATK:n(20),TimewallBP:n(200),Difficulty:n(2.5),},
        11:{BasicPoint:n(2000),DPS:n(10),Difficulty:n(1.9),},
        12:{BasicPoint:n(2000),RoundLimit:n(5),DPS:n(30),Difficulty:n(2.1),},
        13:{BasicPoint:n(1250),RoundLimit:n(5),DPS:n(15),noSkill:true,TimewallId:n(1),TimewallHP:n(180),TimewallATK:n(10),TimewallBP:n(500),Difficulty:n(2.4),},
        14:{BasicPoint:n(1000),RoundLimit:n(2),DPS:n(150),Difficulty:n(2.6),},
        15:{BasicPoint:n(1500),TimewallId:n(2),TimewallHP:n(850),TimewallATK:n(15),TimewallBP:n(250),Difficulty:n(3.0),},
        16:{BasicPoint:n(3500),PoiTime:n(3),Difficulty:n(2.5),},
        17:{BasicPoint:n(850),RoundLimit:n(3),PoiTime:n(0.1),noSkill:true,TimewallId:n(1),TimewallHP:n(140),TimewallATK:n(10),TimewallBP:n(750),Difficulty:n(3.2),},
        18:{BasicPoint:n(600),DPS:n(45),noSkill:true,TimewallId:n(3),TimewallHP:n(1000),TimewallATK:n(0),TimewallBP:n(0),Difficulty:n(4.2),},
        19:{BasicPoint:n(1000),RoundLimit:n(10),PoiTime:n(2),DPS:n(35),TimewallId:n(1),TimewallHP:n(850),TimewallATK:n(20),TimewallBP:n(150),Difficulty:n(3.8),},
        20:{BasicPoint:n(2100),PoiTime:n(5),DPS:n(30),TimewallId:n(4),TimewallHP:n(1145),TimewallATK:n(20),TimewallBP:n(60),Difficulty:n(5.1),},
        21:{BasicPoint:n(3600),RoundLimit:n(5),RanBox:n(5),Difficulty:n(2.5),},
        22:{BasicPoint:n(3000),RoundLimit:n(1),RanBox:n(3),Difficulty:n(2.8),},
        23:{BasicPoint:n(300),RoundLimit:n(1),RanBox:n(1),DPS:n(50),noSkill:true,Difficulty:n(3.1),},
        24:{BasicPoint:n(5000),RoundLimit:n(15),RanBox:n(1),DPS:n(25),Difficulty:n(3.6),},
        25:{BasicPoint:n(1500),RoundLimit:n(10),RanBox:n(2),DPS:n(50),TimewallId:n(5),TimewallHP:n(1200),TimewallATK:n(30),TimewallBP:n(200),Difficulty:n(4.3),},
        26:{BasicPoint:n(456),RoundLimit:n(6),noSkill:true,noItem:true,Difficulty:n(2.1),},
        27:{BasicPoint:n(1000),RoundLimit:n(10),RanBox:n(2),noSkill:true,noItem:true,Difficulty:n(3.0),},
        28:{BasicPoint:n(6120),RoundLimit:n(14),DPS:n(25),Difficulty:n(3.2),},
        29:{BasicPoint:n(200),RoundLimit:n(3),DPS:n(30),TimewallId:n(6),TimewallHP:n(3000000),TimewallATK:n(40),TimewallBP:n(200),Difficulty:n(3.4),},
        30:{BasicPoint:n(3500),PoiTime:n(3),TimewallId:n(7),TimewallHP:n(2330),TimewallATK:n(15),TimewallBP:n(120),Difficulty:n(4.5),},
        31:{BasicPoint:n(1575),RoundLimit:n(6),noItem:true,TimewallId:n(1),TimewallHP:n(480),TimewallATK:n(50),TimewallBP:n(450),Difficulty:n(3.7),},
        32:{BasicPoint:n(6000),RoundLimit:n(8),RanBox:n(1),Difficulty:n(4.3),},
        33:{BasicPoint:n(1606.5),RoundLimit:n(3),noItem:true,DPS:n(150),Difficulty:n(2.7),},
        34:{BasicPoint:n(2000),RoundLimit:n(2),noItem:true,DPS:n(100),TimewallId:n(1),TimewallHP:n(193),TimewallATK:n(100),TimewallBP:n(3000),Difficulty:n(3.1),},
        35:{BasicPoint:n(7000),RoundLimit:n(60),TimewallId:n(8),TimewallHP:n(4000),TimewallATK:n(44),TimewallBP:n(150),Difficulty:n(4.6),},
        //Chapter 2
        36:{BasicPoint:n(1420.4),RoundLimit:n(5),noItem:true,Skill1Limit:n(2),Difficulty:n(2.5),},
        37:{BasicPoint:n(0),RoundLimit:n(3),noItem:true,Skill2Limit:n(2),TimewallId:n(1),TimewallHP:n(478.8),TimewallATK:n(0),TimewallBP:n(0),Difficulty:n(2.7),},
        38:{BasicPoint:n(3500),DPS:n(20),Skill1Limit:n(3),Difficulty:n(3.5),},
        39:{BasicPoint:n(1000),RoundLimit:n(1),RanBox:n(1),Skill1Limit:n(1),Difficulty:n(3.9),},
        40:{BasicPoint:n(2400),RoundLimit:n(25),Skill1Limit:n(2),Skill2Limit:n(2),Skill3Limit:n(2),Skill4Limit:n(2),TimewallId:n(9),TimewallHP:n(1800),TimewallATK:n(30),TimewallBP:n(200),Difficulty:n(4.2),},
        41:{BasicPoint:n(500),RoundLimit:n(7),Difficulty:n(2.1),
            Enemies:{Regular:n(6),},EnemyLevel:n(1),},
        42:{BasicPoint:n(600),RoundLimit:n(13),noItem:true,Difficulty:n(2.4),
            Enemies:{Regular:n(3),},EnemyLevel:n(1),},
        43:{BasicPoint:n(1500),DPS:n(30),Difficulty:n(2.3),
            Enemies:{Regular:n(5),},EnemyLevel:n(1),},
        44:{BasicPoint:n(600),DPS:n(15),Skill2Limit:n(1),Difficulty:n(2.6),
            Enemies:{Regular:n(4),},EnemyLevel:n(1),},
        45:{BasicPoint:n(1200),RoundLimit:n(15),TimewallId:n(10),TimewallHP:n(2026),TimewallATK:n(50),TimewallBP:n(300),Difficulty:n(4.1),
            Enemies:{Regular:n(3),},EnemyLevel:n(1),},
        46:{BasicPoint:n(1500),RoundLimit:n(11),Skill1Limit:n(2),Difficulty:n(2.2),
            Enemies:{Regular:n(3),Strong:n(2),},EnemyLevel:n(1),},
        47:{noSkill:true,RanBox:n(3),Difficulty:n(3.6),
            Enemies:{Regular:n(4),Strong:n(3),},EnemyLevel:n(1),},
        48:{BasicPoint:n(750),RoundLimit:n(8),Skill1Limit:n(1),Skill2Limit:n(1),Difficulty:n(3.8),
            Enemies:{Strong:n(3),},EnemyLevel:n(1),},
        49:{BasicPoint:n(1000),RoundLimit:n(12),PoiTime:n(3),TimewallId:n(11),TimewallHP:n(1500),TimewallATK:n(40),TimewallBP:n(200),Difficulty:n(4.2),
            Enemies:{Strong:n(1)},EnemyLevel:n(1),},
        50:{BasicPoint:n(3000),RoundLimit:n(30),DPS:n(25),PoiTime:n(5),Skill1Limit:n(4),Skill2Limit:n(4),Skill3Limit:n(4),Skill4Limit:n(4),TimewallId:n(12),TimewallHP:n(3200),TimewallATK:n(20),TimewallBP:n(100),Difficulty:n(4.4),
            Enemies:{Regular:n(3)},EnemyLevel:n(1),},
        51:{BasicPoint:n(1),RoundLimit:n(5),Difficulty:n(2.3),
            Enemies:{Fast:n(4),},EnemyLevel:n(1),},
        52:{BasicPoint:n(400),RoundLimit:n(10),noSkill:true,Difficulty:n(2.8),
            Enemies:{Regular:n(3),Fast:n(1),},EnemyLevel:n(1),},
        53:{BasicPoint:n(3500),DPS:n(20),PoiTime:n(5),Difficulty:n(3.7),
            Enemies:{Regular:n(2),Strong:n(2),Fast:n(2),},EnemyLevel:n(1),},
        54:{BasicPoint:n(3500),DPS:n(50),TimewallId:n(13),TimewallHP:n(2233),TimewallATK:n(50),TimewallBP:n(500),Difficulty:n(4.1),
            Enemies:{Regular:n(1),Strong:n(1),Fast:n(1),},EnemyLevel:n(1),},
        55:{BasicPoint:n(1500),RoundLimit:n(11),Skill1Limit:n(3),Skill2Limit:n(3),Skill3Limit:n(3),Skill4Limit:n(3),TimewallId:n(14),TimewallHP:n(2000),TimewallATK:n(0),TimewallBP:n(0),Difficulty:n(3.9),
            Enemies:{Regular:n(1),Strong:n(1),Fast:n(1),},EnemyLevel:n(1),},
    },
    Leveltext(){a='<br>当前选择关卡：Level '+format(player.m.selectedLevel,0)
        a=a+"<br>目标："+tmp.m.goaldescription[player.m.selectedLevel.sub(1).toNumber()]
        if(player.m.selectedLevel.eq(0)) a='<br>你当前未选择任何关卡'
        a=a+'<br>'
    return a},
    InLeveltext(){if(player.m.currentLevel.eq(0)) return ''
        a='<br>当前关卡： Level '+format(player.m.currentLevel,0)
        a=a+'<br>玩家信息：<br>普通点数：'+format(player.m.BasicPoint)
        a=a+'<br>血量：'+format(player.m.currentHP)+'/'+format(tmp.p.maxHP)
        if(player.m.currentHpBuff.gt(0)) a=a+'(生命恢复Buff：'+format(player.m.currentHpBuff,0)+')'
        if(player.m.currentPoiBuff.gt(0)) a=a+'(剧毒Buff：'+format(player.m.currentPoiBuff,0)+')'
        if(tmp.m.goal[player.m.currentLevel.toNumber()].DPS!==undefined&&tmp.m.goal[player.m.currentLevel.toNumber()].DPS.neq(0)) a=a+'(血量流失：-'+format(tmp.m.HPActualLoss)+'/s)'
        a=a+'<br>技能点：'+format(player.m.currentSP)+'/'+format(tmp.p.maxSP)
        a=a+'<br>攻击力：'+format(tmp.m.CurrentATK)
        if(player.m.currentStrBuff.gt(0)) a=a+'(力量Buff：'+format(player.m.currentStrBuff,0)+')'
        a=a+'<br>'

        if(tmp.m.goal[player.m.currentLevel.toNumber()].TimewallId!==undefined){
        a=a+'<br>时间墙信息：<br>普通点数：'+format(player.m.TWbp)
        a=a+'<br>普通点数增加量：'+format(player.m.TWbpPerRound)
        a=a+'<br>血量：'+format(player.m.TWhp)+'/'+format(tmp.m.goal[player.m.currentLevel.toNumber()].TimewallHP)
        if(player.m.TWPoison.gt(0)) a=a+'(剧毒buff：'+format(player.m.TWPoison,0)+')'
        a=a+'<br>攻击力：'+format(player.m.TWatk)+'<br>'
        }

        a=a+'<br>关卡难度：'+format(tmp.m.goal[player.m.currentLevel.toNumber()].Difficulty,1)+'<br>'
        a=a+'当前已操作次数：'+format(player.m.RoundUsed,0)
        if(tmp.m.goal[player.m.currentLevel.toNumber()].RoundLimit!==undefined) a=a+'/'+tmp.m.goal[player.m.currentLevel.toNumber()].RoundLimit
        a=a+'<br>关卡进行时间：'+format(player.m.allTimer,3)+'s'
        if(!tmp.m.LevelSucceed) a=a+'<br>操作剩余冷却时间：'+format(player.m.TimeToNext,3)+'s/'+format(0.5,3)+'s<br>'
        if(tmp.m.LevelFailed&&!tmp.m.LevelSucceed) a=a+'<br>关卡失败了！再接再厉，继续努力吧！'
        if(tmp.m.LevelSucceed) {a=a+'<br>关卡胜利了！基于你的普通点数'
            if(player.m.points.gte(41)) a=a+'与杀敌数量'
            a=a+'，你将获得'+format(tmp.m.LevelReward)+'点数'
            if(player.m.points.gte(14)) a=a+'<br>基于你的剩余血量与本关奖励，你将获得'+format(tmp.m.LevelReward2)+'防御点数'
            if(player.m.points.gte(26)) a=a+'<br>基于你的普通点数，你将获得'+format(tmp.m.LevelReward3)+'点击点数'
        }
        return a
    },
    Enemytext(){if(player.m.currentLevel.eq(0)||player.m.EnemyState.length==0) return ''
        a= ''
        if(player.m.EnemyState!=[]) {a='敌人列表：'
        for (let i = 0; i < player.m.EnemyState.length; i++) {
            a=a+'<br>编号:'+format(n(i),0)+',种类:'+player.m.EnemyState[i].Type+',等级:'+format(tmp.m.goal[player.m.currentLevel.toNumber()].EnemyLevel,0)+',血量:'+format(player.m.EnemyState[i].HP)+',攻击力:'+format(player.m.EnemyState[i].ATK)
            if(n(player.m.EnemyState[i].DEF).gt(0))a=a+',防御力:'+format(n(player.m.EnemyState[i].DEF).times(100))+'%'
            if(player.m.EnemyState[i].EVA>0) a=a+',闪避率:'+format(n(player.m.EnemyState[i].EVA).times(100))+'%'
        }}
        //a=a+'<br>'+player.m.EnemyState
        return a
    },
    ButtonCanBeSeen(){return player.m.currentLevel.neq(0)&&!tmp.m.LevelSucceed&&!tmp.m.LevelFailed},
    ButtonCanClick(){return player.m.TimeToNext.eq(0)&&player.devSpeed.gt(0)},
    CurrentATK(){a=tmp.p.ATK
        if(player.m.currentStrBuff.gt(0)) a=a.times(3)
        return a
    },
    LevelSucceed(){if(player.m.currentLevel.eq(0)) return false
        a=player.m.BasicPoint.gte(tmp.m.goal[player.m.currentLevel.toNumber()].BasicPoint)//BP要求
        a=a&&player.m.TWhp.lte(0)//TW要求
        a=a&&player.m.EnemyState.length == 0//敌人要求
        return a
    },
    LevelFailed(){if(player.m.currentLevel.eq(0)) return false
        a=player.m.RoundUsed.gte(tmp.m.goal[player.m.currentLevel.toNumber()].RoundLimit)
        a=a&&tmp.m.goal[player.m.currentLevel.toNumber()].RoundLimit!==undefined//回合要求
        a=a||player.m.currentHP.lte(0)//HP要求
        return a
    },
    LevelReward(){a=player.m.BasicPoint.div(10).add(player.m.currentLevel.times(10)).add(player.m.PendingPt)//Pt
        return a
    },
    LevelReward2(){a=player.m.currentHP.max(0).div(tmp.p.maxHP).times(10).times(tmp.m.LevelReward)//DeP
        return a
    },
    LevelReward3(){a=player.m.BasicPoint//DeP
        return a
    },
    HPActualLoss(){if(player.m.currentLevel.eq(0)||tmp.m.goal[player.m.currentLevel.toNumber()].DPS==undefined) return n(0)
        a=tmp.m.goal[player.m.currentLevel.toNumber()].DPS.times(n(1).sub(getBuyableAmount('p',31).times(0.01)))
        return a
    },
})

addLayer("p", {
    name: "PlayerInfo", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,

		points: new Decimal(1),

        DefensePoint:n(0),
        pointPoint:n(0),

        skillCrystal:n(0),
    }},
    color: "#29ff22",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "等级", // Name of prestige currency
    baseResource: "金币", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return new Decimal(1)
    },
    branches:['m'],
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        
    ],
    update(diff){
    },
    layerShown(){return player.m.points.gte(3)},
    passiveGeneration()
    {
        mult = 0
        return mult
    },
    tabFormat: {
    "PlayerPage": {
        content: [ "main-display",["display-text", () => tmp.p.Playertext],["clickables",[1]],
        ],
        unlocked(){return true},
    },
    "Shop": {
        content: [ "main-display",["display-text", () => tmp.p.Shoptext],["buyables",[1,2]],
        ],
        unlocked(){return player.m.points.gte(7)},
    },
    "Upgrades": {
        content: [ "main-display",["display-text", () => tmp.p.Upgtext],["buyables",[3]],
        ],
        unlocked(){return player.m.points.gte(14)},
    },
    "Skill Upgrades": {
        content: [ "main-display",["display-text", () => tmp.p.SUtext],["buyables",[4]],
        ],
        unlocked(){return player.m.points.gte(14)},
    },
    "Milestones": {
        content: [ "main-display","milestones",
        ],
        unlocked(){return player.m.points.gte(31)},
    },
    },
    clickables: {
        11: {
        title() {return "升级"},
        display() {a= "花费"+format(tmp.p.ptRequired)+'点数'
            if(player.m.currentLevel.neq(0)) a=a+'<br>无法在关卡内升级！'
            return a
        },
        unlocked() {return true},
        canClick() {return player.points.gte(tmp.p.ptRequired)&&player.m.currentLevel.eq(0)},
        onClick() {player.points = player.points.sub(tmp.p.ptRequired)
            player.p.points = player.p.points.add(1)
        },
    },
    },
    buyables:{
    11: {
        title() {return "惊喜礼盒("+format(getBuyableAmount(this.layer,this.id),0)+')'},
        cost(x){a= n(2).pow(x).times(100)
            return a
        },
        display() {a= "效果：使用后，在以下5种效果内随机选择一个：血量+100，技能点+20，普通点数+200，已操作次数-5，点数+50，但是有20%的概率使上述效果颠倒！"
            a=a+'<br>花费：'+format(this.cost())+'点数'
            return a
        },
        unlocked() {return player.m.points.gte(7)},
        canAfford(){return player.points.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.points=player.points.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        }
    },
    12: {
        title() {return "技能药水("+format(getBuyableAmount(this.layer,this.id),0)+')'},
        cost(x){a= n(2).pow(x).times(250)
            return a
        },
        display() {a= "效果：使用后回满技能点"
            a=a+'<br>花费：'+format(this.cost())+'点数'
            return a
        },
        unlocked() {return player.m.points.gte(9)},
        canAfford(){return player.points.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.points=player.points.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        }
    },
    13: {
        title() {return "力量药水("+format(getBuyableAmount(this.layer,this.id),0)+')'},
        cost(x){a= n(3).pow(x).times(300)
            return a
        },
        display() {a= "效果：使用后获得5回合的力量buff，攻击力变为原来的3倍"
            a=a+'<br>花费：'+format(this.cost())+'点数'
            return a
        },
        unlocked() {return player.m.points.gte(10)},
        canAfford(){return player.points.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.points=player.points.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        }
    },
    14: {
        title() {return "治疗药水("+format(getBuyableAmount(this.layer,this.id),0)+')'},
        cost(x){a= n(3).pow(x).times(300)
            return a
        },
        display() {a= "效果：使用后获得5回合的生命恢复buff，每回合恢复20%最大血量，无法超过上限"
            a=a+'<br>花费：'+format(this.cost())+'点数'
            return a
        },
        unlocked() {return player.m.points.gte(11)},
        canAfford(){return player.points.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.points=player.points.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        }
    },
    21: {
        title() {return "剧毒药水("+format(getBuyableAmount(this.layer,this.id),0)+')'},
        cost(x){a= n(3).pow(x).times(300)
            return a
        },
        display() {a= "效果：使用后使敌人获得5回合的剧毒buff，每回合受到你的攻击力x2的伤害"
            a=a+'<br>花费：'+format(this.cost())+'点数'
            return a
        },
        unlocked() {return player.m.points.gte(13)},
        canAfford(){return player.points.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.points=player.points.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        }
    },
    22: {
        title() {return "蜂蜜("+format(getBuyableAmount(this.layer,this.id),0)+')'},
        cost(x){a= n(2).pow(x).times(250)
            return a
        },
        display() {a= "效果：使用后清除你的剧毒buff"
            a=a+'<br>花费：'+format(this.cost())+'点数'
            return a
        },
        unlocked() {return player.m.points.gte(17)},
        canAfford(){return player.points.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.points=player.points.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        }
    },
    23: {
        title() {return "技能水晶("+format(this.effect(),0)+"个)"},
        cost(x){a= n(500)
            if(hasMilestone('p',1)) a= n(450)
            return a
        },
        effect(){a= n(15)
            if(hasMilestone('p',1)) a= n(45)
            return a},
        display() {a= "获得"+this.effect()+"个技能水晶"
            a=a+'<br>花费：'+format(this.cost())+'点数'
            return a
        },
        unlocked() {return player.m.points.gte(33)},
        canAfford(){return player.points.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.points=player.points.sub(this.cost())
            player.p.skillCrystal=player.p.skillCrystal.add(this.effect())
        },
    },
    //Upg tab
    31: {
        title() {return "抗血量流失("+format(getBuyableAmount(this.layer,this.id),0)+'/75)'},
        cost(x){a= x.add(1).times(1000)
            return a
        },
        display() {a= "每次升级使血量流失造成的伤害-1%<br>当前：-"+format(getBuyableAmount(this.layer,this.id))+'%'
            a=a+'<br>花费：'+format(this.cost())+'防御点数'
            return a
        },
        unlocked() {return player.m.points.gte(14)},
        canAfford(){return player.p.DefensePoint.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.DefensePoint=player.p.DefensePoint.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(75),
    },
    32: {
        title() {return "抗剧毒("+format(getBuyableAmount(this.layer,this.id),0)+'/50)'},
        cost(x){a= x.add(1).times(2000)
            return a
        },
        display() {a= "每次升级使我方剧毒buff造成的伤害-1%<br>当前：-"+format(getBuyableAmount(this.layer,this.id))+'%'
            a=a+'<br>花费：'+format(this.cost())+'防御点数'
            return a
        },
        unlocked() {return player.m.points.gte(16)},
        canAfford(){return player.p.DefensePoint.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.DefensePoint=player.p.DefensePoint.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(50),
    },
    33: {
        title() {return "点击普通点数("+format(getBuyableAmount(this.layer,this.id),0)+'/50)'},
        cost(x){a= x.add(1).times(1500)
            return a
        },
        display() {a= "每次升级使点击获得的普通点数+1<br>当前：+"+format(getBuyableAmount(this.layer,this.id))
            a=a+'<br>花费：'+format(this.cost())+'点击点数'
            return a
        },
        unlocked() {return player.m.points.gte(26)},
        canAfford(){return player.p.pointPoint.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.pointPoint=player.p.pointPoint.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(50),
    },
    34: {
        title() {return "轻度点击普通点数("+format(getBuyableAmount(this.layer,this.id),0)+'/50)'},
        cost(x){a= x.add(1).times(1500)
            return a
        },
        display() {a= "每次升级使轻度点击获得的普通点数+1<br>当前：+"+format(getBuyableAmount(this.layer,this.id))
            a=a+'<br>花费：'+format(this.cost())+'点击点数'
            return a
        },
        unlocked() {return player.m.points.gte(26)},
        canAfford(){return player.p.pointPoint.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.pointPoint=player.p.pointPoint.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(50),
    },
    //skill upg tab
    41: {
        title() {return "超级点击("+format(getBuyableAmount(this.layer,this.id),0)+'/50)'},
        cost(x){a= x.add(1).times(10)
            return a
        },
        display() {a= "每次升级使超级点击倍率+0.1<br>当前："+format(clickableEffect('m',61),1)+'x'
            a=a+'<br>此技能到达10级：超级点击时有20%的概率触发一次额外的微型点击'
            a=a+'<br>此技能到达20级：每10回合自动进行一次倍率为5的超级点击'
            a=a+'<br>此技能到达30级：超级点击消耗的技能点与点数-5'
            a=a+'<br>此技能到达40级：点击或微型点击时有5%概率触发一次倍率为5的超级点击'
            a=a+'<br>花费：'+format(this.cost())+'技能水晶'
            return a
        },
        unlocked() {return player.m.points.gte(33)},
        canAfford(){return player.p.skillCrystal.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.skillCrystal=player.p.skillCrystal.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(50),
    },
    42: {
        title() {return "暴击("+format(getBuyableAmount(this.layer,this.id),0)+'/50)'},
        cost(x){a= x.add(1).times(10)
            return a
        },
        display() {a= "每次升级使暴击倍率+0.1<br>当前："+format(clickableEffect('m',62),1)+'x'
            a=a+'<br>此技能到达10级：暴击后有20%的概率恢复自身5%最大血量'
            a=a+'<br>此技能到达20级：暴击恢复血量的概率提升至50%'
            a=a+'<br>此技能到达30级：暴击消耗的技能点与点数-5'
            a=a+'<br>此技能到达40级：普通攻击时有5%概率触发一次倍率为5的暴击（仅对时间墙生效）'
            a=a+'<br>花费：'+format(this.cost())+'技能水晶'
            return a
        },
        unlocked() {return player.m.points.gte(33)},
        canAfford(){return player.p.skillCrystal.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.skillCrystal=player.p.skillCrystal.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(50),
    },
    43: {
        title() {return "偷袭("+format(getBuyableAmount(this.layer,this.id),0)+'/50)'},
        cost(x){a= x.add(1).times(10)
            return a
        },
        display() {a= "每次升级使偷袭倍率+0.2%<br>当前："+format(clickableEffect('m',63).times(100),1)+'%'
            a=a+'<br>此技能到达10级：偷袭时额外进行一次普通攻击（仅对时间墙生效）'
            a=a+'<br>此技能到达20级：每5回合自动进行一次倍率为5%的偷袭（仅对时间墙生效）'
            a=a+'<br>此技能到达30级：偷袭消耗的技能点-10，点数-25'
            a=a+'<br>此技能到达40级：此技能20级效果的倍率提升至10%'
            a=a+'<br>花费：'+format(this.cost())+'技能水晶'
            return a
        },
        unlocked() {return player.m.points.gte(33)},
        canAfford(){return player.p.skillCrystal.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.skillCrystal=player.p.skillCrystal.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(50),
    },
    44: {
        title() {return "点数夺取("+format(getBuyableAmount(this.layer,this.id),0)+'/50)'},
        cost(x){a= x.add(1).times(10)
            return a
        },
        display() {a= "每次升级使点数夺取倍率+0.5%<br>当前："+format(clickableEffect('m',64).times(100),1)+'%'
            a=a+'<br>此技能到达10级：点数夺取时额外夺取100普通点数'
            a=a+'<br>此技能到达20级：点数夺取时额外夺取50点数'
            a=a+'<br>此技能到达30级：点数夺取消耗的技能点-5，点数-20'
            a=a+'<br>此技能到达40级：每10回合自动进行一次倍率为20%的点数夺取'
            a=a+'<br>花费：'+format(this.cost())+'技能水晶'
            return a
        },
        unlocked() {return player.m.points.gte(33)},
        canAfford(){return player.p.skillCrystal.gte(this.cost())&&player.m.currentLevel.eq(0)},
        buy(){player.p.skillCrystal=player.p.skillCrystal.sub(this.cost())
            addBuyables(this.layer,this.id,n(1))
        },
        purchaseLimit:n(50),
    },
    },
    milestones: {
    0: {
        requirementDescription: "通过关卡30",
        effectDescription: "减少升级所需要的点数花费",
        done() { return player.m.points.gt(30) },
    },
    1: {
        requirementDescription: "通过关卡35",
        effectDescription: "技能水晶价格小幅降低",
        done() { return player.m.points.gt(35) },
        unlocked() { return hasMilestone('p',0)},
    },
    2: {
        requirementDescription: "通过关卡45",
        effectDescription: "技能水晶获取量x3",
        done() { return player.m.points.gt(45) },
        unlocked() { return hasMilestone('p',1)},
    },
    3: {
        requirementDescription: "通过关卡50",
        effectDescription: "再次减少升级所需要的点数花费",
        done() { return player.m.points.gt(50) },
        unlocked() { return hasMilestone('p',2)},
    },
    },
    Playertext(){a='玩家信息：<br>等级：'+format(player.p.points,0)
        a=a+'<br>初始血量：'+format(tmp.p.maxHP)
        a=a+'<br>初始技能点：'+format(tmp.p.maxSP)
        a=a+'<br>攻击力：'+format(tmp.p.ATK)
        a=a+'<br>（随等级提升而提升）'
        return a
    },
    maxHP(){a=player.p.points.times(15).add(85)
        return a
    },
    maxSP(){a=player.p.points.times(5).add(15)
        return a
    },
    ATK(){a=player.p.points.times(2).add(8)
        return a
    },
    ptRequired(){b=n(200)
        if(hasMilestone('p',0)) b=n(180)
        if(hasMilestone('p',3)) b=n(100)
        a=player.p.points.times(b).add(-100)
        return a
    },
    Shoptext(){a='你可以在这里购买关卡内使用的各种道具！更多道具将在后面的关卡中解锁。与升级类似，在关卡内你不能购买道具！'
        return a
    },
    Upgtext(){a='你可以在这里购买各种加点升级，使你的推关进度更容易！与升级类似，在关卡内你不能购买加点升级！'
        a=a+'<br>你有'+format(player.p.DefensePoint)+'防御点数'
        if(player.m.points.gte(26)) a=a+'<br>你有'+format(player.p.pointPoint)+'点击点数'
        return a
    },
    SUtext(){a='你可以在这里使用技能水晶升级各种技能，增加技能的数值，并获得更多的额外效果！（现版本所有额外效果都已实现）与升级类似，在关卡内你不能进行技能升级！'
        a=a+'<br>你有'+format(player.p.skillCrystal)+'技能水晶'
        return a
    },
})