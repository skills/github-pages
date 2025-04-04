class Class_Bank 
{
    // id = undefined
    tarfPlans = ['credits', 'invests'];
    credits = [];
    invests = [];

    Refresh(arr)
    {
        if (this.credits.length == 0 && this.invests.length == 0){return this;}
        let credList = document.querySelector('ol.credit-list');
        let investList = document.querySelector('ol.inv-list');
        
        if(arr[0]==this.tarfPlans[0]){
            let creditLstItem = document.querySelector('.credit-lst-item').cloneNode(true);
            creditLstItem.style.display = 'flex';
            creditLstItem.querySelector('.credit-procent').innerText=arr[2];
            creditLstItem.querySelector('.credit-sum').innerText=arr[1];
            creditLstItem.querySelector('.credit-cost').innerText=arr[3];
            credList.append(creditLstItem);
        }else{
            let investLstItem = document.querySelector('li.invest-lst-item').cloneNode(true);
            investLstItem.style.display = 'flex';
            investLstItem.querySelector('.inv-procent').innerText=arr[2];
            investLstItem.querySelector('.inv-sum').innerText=arr[1];
            investLstItem.querySelector('.inv-cost').innerText=arr[4];
            investList.append(investLstItem);
        }
    }

    CountCostInProcCred(arr)
    {
        arr.push((Number(arr[1])*(Number(arr[2])/100))/10);
        return arr;
    }

    CountCostInProcent(arr)
    {
        arr.push(Number(arr[1]) + (Number(arr[1]) * (Number(arr[2])/100/arr[3])));
        console.log(arr);
        return arr;
    }

    Append(arg, cost, procent, valueTime=undefined)
    {
        if(!Engine.time.NoTime()) {return this;}
        if(this.tarfPlans.includes(arg) && cost > 1) {
            let value = [arg, String(cost), String(procent)];
            if (arg==this.tarfPlans[0] && cost <=100  && this.credits.length < 3){
                value = this.CountCostInProcCred(value);
                this.credits.push(value);
                Engine.player.Money+=Number(cost);
                Engine.player.Apdate();
                alert('Вы взяли кредит!');
            }else{
                if (procent==20) {
                    if (!valueTime) {alert('Ошибка! Время не указано.');}else{value.push(valueTime);}
                }else{value.push(10);}
                if (cost <= Engine.player.Money) {
                    Engine.player.Money-=Number(cost);
                    value = this.CountCostInProcent(value);
                    this.invests.push(value);
                    Engine.player.Apdate();
                    alert('Вы открыли вклад!');
                }else{
                    if(cost>Engine.player.Money){alert('Ошибка! У вас не хватает денег.');}
                    if (this.invests.length >= 3) {alert('Ошибка! У вас максимальное количество вкладов!');}
                }
            }
            bank.Refresh(value);
        }else{
            if (cost > 201 | cost < 1){alert('Ошибка! Некоректная сумма!');}
            if (!this.tarfPlans.includes(arg)){alert('Ошибка! Такого кредита или вклада не существует!');}
            if (this.credits.length >= 3){alert('Ошибка! У вас максимальное количесиво кредитов');}
        }
        return this;
    }

    Delit(cost)
    {
        for(let i in Range(this.tarfPlans.length)) {
            if (this.tarfPlans[i].includes(cost)) 
            {
                if(arg=='credits') {
                    this.credits.splice(0, i);
                    alert('Кредит закрыт! Так держать!')
                }else{
                    this.invests.splice(0, i);
                    alert('Вклад закрыт.')
                }
            }
        }
        return this;
    }
}

bank = new Class_Bank();

class Class_Handmade_Cell
{
    handItem;
    handmadeLst = document.querySelector('ol.handmade');

    constructor(obj_name, obj_time, cost=undefined)
    {
        this._name = obj_name;
        this._time = obj_time;
        this._cost = cost;
        this._isTime = this._time * 60;
    }
    get isTime() {return this._isTime;}
    set isTime(inValue) {return this._isTime = inValue;}
    get Cost() {return this._cost;}
    get Name() {return this._name;}
    get Time() {return this._time;}
    set Time(inValue) {return this._time = inValue;}
    
    Work()
    {
        let count = 0
        const timer = setInterval(() => {
            this.handItem.querySelector('#hts').textContent = this.isTime == 0 
              ? clearInterval(timer)  // Останавливаем таймер, поскольку время истекло
              : this.isTime-=1; // С каждой секундой уменьшаем время
              if (this.handItem.querySelector('#hts').innerText==0) {
                  if(this.Cost==undefined) {
                    if(count == 0){
                        alert('Умение изучено!');
                        count++;
                    }
                  } else{
                    if(count == 0){
                        Engine.handmade.ReadyLst.push([this.Name, this.Cost]);
                        Engine.handmade.Update([this.Name, this.Cost]);
                        count++;
                    }
                  }
                  this.handItem.remove();
              }
        }, 1000)
    }

    AppendCell()
    {
        if(!Engine.time.NoTime()) {return this;}
        this.handItem = document.querySelector('.handmade-cell').cloneNode(true);
        this.handItem.style.display='flex';
        this.handItem.querySelector('.hand-name').innerText=this.Name;
        this.handmadeLst.append(this.handItem);
        this.Work();
    }
}

class Class_Handmade
{
    prodLstItem;
    productLst = document.querySelector('.product-lst');
    prodList = document.querySelector('.prod-lst');
    QueTasks = [];
    ReadyLst = [];
    indx = 0;

    Update(i_task) 
    {
        if (this.QueTasks.length == 0){return this;}
        
        this.prodLstItem=document.querySelector('li.prod-item').cloneNode(true);
        this.prodLstItem.style.display='block';
        this.prodLstItem.querySelector('.prodCost').innerText=i_task[1];
        this.prodLstItem.querySelector('.prodInfo').innerText=i_task[0];
        this.prodList.append(this.prodLstItem);
    }
    
    AddStek(name, time, cost=undefined)
    {
        if(!Engine.time.NoTime()) {return this;}
        if(this.QueTasks.length < 8){
            const cell = new Class_Handmade_Cell(name, time, cost, this.indx);
            this.indx++;
            this.QueTasks.push(cell);
            cell.AppendCell();
        }else{alert('У вас слишком много задач!');} 
    }

    Sell(elName){
        if(this.ReadyLst.length==0) {return this;}
        alert('Задача сдана!');
        Engine.player.Money += Number(this.prodLstItem.querySelector('.prodCost').innerText);
        Engine.player.Apdate();
        this.prodLstItem.remove();
        this.ReadyLst.slice(this.ReadyLst.indexOf(elName), 1);
        ocument.querySelector('li.prod-item').style.display='none'
    }
}


class Class_School
{
    myteachSkills=[];
    constructor()
    {
        this._list_skills = {
            'Настройка/сборка ПК':[
                "4", 'Умения и навыки позволяющие брать заказы на "Сборку и Настройку компьютеров". Весьма востребованные навыки в наше время.', 0.1
            ], 
            'Дизайн':[
                '10', 'Творческие способности и дизайнерское мастерство, с ними возможно брать заказы на "Дизайн".', 5
            ], 
            'Программирование':[
                '20', 'Навыками в программировании труднее всего овладеть, поэтому заказы "Кодинг" самые прибыльные.', 9
            ], 
            'Монтаж':[
                '6', 'Монтаж видео достаточно востребованный навык сейчас и ему не так уж и сложно научиться. С данным навыком доступны заказы на "Монтаж видео".', 4
            ], 
            'Маркетинг':['11', 'Очень полезный навык, который сейчас пользуется огромным спросом. С ним вы сможете брать заказы на "Создание рекламы".', 8]
        };   
    }

    get ListSkills() {return this._list_skills;}

    Refresh(skill)
    {
        if(!this.ListSkills.hasOwnProperty(skill.innerText)){alert('Такого навыка не существует!'); return this;}
        document.querySelector('.scost').innerText=this.ListSkills[skill.innerText][0];
        document.querySelector('.fssp').innerText=this.ListSkills[skill.innerText][1];
        document.querySelector('.tsc').innerText='Время на обучение:' + ' ' + this.ListSkills[skill.innerText][2] + 'мин.';
    }

    buy(skill)
    {
        if(!Engine.time.NoTime()) {return this;}
        if(!document.querySelector('.scost').innerText){alert('Ошибка, выберите умение.'); return this;}
        this.myteachSkills.push(skill.querySelector('.school-text').innerText); alert('Вы изучаете умение.');
        Engine.player.Money-=Number(this.ListSkills[skill.querySelector('.school-text').innerText][0]);
        Engine.player.Apdate();
        Engine.handmade.AddStek(skill.querySelector('.school-text').innerText, this.ListSkills[skill.querySelector('.school-text').innerText][2]);
        Engine.inventory.append_Skill(skill.innerText);
    }

}

class Class_Market 
{
    Products_list = {
        'Кодинг':['Программирование', 9, 14], 
        'Настройка/Сборка':['Настройка/сборка ПК', 2, 3],
        'Монтаж видео':['Монтаж', 4, 6], 
        'Создание рекламы':['Маркетинг', 5, 8], 
        'Web-дизайн':['Дизайн', 3, 5]
}; // Товары черного рынка;

    Refresh(elem)
    {
        if(!this.Products_list.hasOwnProperty(elem.innerText)) {alert('Такого заказа нет.'); return this;}
        document.querySelector('.mcost').innerText = 'Цена:' + ' ' +this.Products_list[elem.innerText][1];
        document.querySelector('.pft').innerText = 'Прибыль с одного заказа:' + ' ' + this.Products_list[elem.innerText][2];
        document.querySelector('.tw').innerText = 'Необходимый навык:' + ' ' + this.Products_list[elem.innerText][0];
    }

    buy(elem) {
        if(!Engine.time.NoTime()) {return this;}
        if(
            !document.querySelector('.mcost').innerText ||
            !document.querySelector('.tw').innerText
        ) {alert('Ошибка, выберите заказ.'); return this;}
        if(!Engine.inventory.Skills.includes(this.Products_list[elem.innerText][0])){alert('У вас нет данного умения'); return this;}
        Engine.player.Money -= Number(this.Products_list[elem.innerText][1]); Engine.player.Apdate();
        Engine.inventory.append_item(elem.innerText, this.Products_list[elem.innerText][1], this.Products_list[elem.innerText][2], this.Products_list[elem.innerText][0], 1);
        alert('Вы взялись за заказ!');
    }
}

class Class_Inventory 
{
    ItemLstPoint;
    NameProducts={
        'Кодинг': 9, 
        'Настройка/Сборка': 0.1, 
        'Монтаж видео': 5, 
        'Создание рекламы': 6, 
        'Web-дизайн': 5
    };//----Заполнить список!!!-----
    ItemLst = document.querySelector('ul.item-lst');
    constructor()
    {
        this.list_items = {};// бомж
        this.list_skills = [];
    }

    get Items() {return this.list_items;}
    get Skills() {return this.list_skills;}

    Update(inItem, inArr)
    {
        this.ItemLstPoint = document.querySelector('.item-point').cloneNode(true);
        this.ItemLstPoint.style.display='block';
        this.ItemLstPoint.querySelector('.prodInfo').innerText=inItem;
        this.ItemLstPoint.querySelector('.prodCost').innerText=inArr[2];
        this.ItemLst.append(this.ItemLstPoint);
    }

    append_item(name, buyCost, saleCost, inskil, value=1) 
    {
        if(!Engine.time.NoTime()) {return this;}
        if (name in this.Items) 
        {
            this.Items[name][0] += value;
        } else {
            this.Items[name] = [value, buyCost, saleCost, inskil];
        }
        this.Update(name, this.Items[name]);
    }
    remove_item(name)
    {
        delete this.list_items[name];
    }
    append_Skill(skill)
    {
        this.list_skills.push(skill);
    }

    SkillLevelUp(skill) {
        skill.Level += 1;
        skill.TimeWork -= (skill.TimeWork/100)*5;
    }

    SellItem(elName, arg='cell')
    {
        if(!this.Items.hasOwnProperty(elName)) {return this;}
        if(arg !='sell'){
            Engine.player.Money += Number(this.Items[elName][1]);
            Engine.player.Apdate();
            alert('Продано!');
        }
        this.ItemLstPoint.remove();
        if(this.Items[elName][0] > 1) {this.Items[elName][0] -= 1;}else{delete this.Items[elName];}
        return this;
    }

    UseItem(elName)
    {
        if(!this.Items.hasOwnProperty(elName)){return this;}
        if(!this.NameProducts.hasOwnProperty(elName)) {return this;}
        alert('Производство началось!');
        Engine.handmade.AddStek(elName, 
            this.NameProducts[elName],
            this.Items[elName][2]
        );
        this.SellItem(elName, 'sell');
    }
}

class Class_Time
{
    countSecond = 0;
    countMinuts = 0;
    countHours = 0;

    constructor() {
        this._check = true;
        this._countDays = 0;
    }

    get Check() {return this._check;}
    set Check(inValue) {return this._check = inValue;}
    get countDays() {return this._countDays;}
    set countDays(inValue) {return this._countDays = inValue;}

    NextHour(num)
    {
        this.countHours+=num;
        document.getElementById('hours').innerText = String(this.countHours).padStart(2,0);
    }

    countTime() 
    {
        const isTime = new Date();
        let TargetTime = new Date('2026-12-12T00:00:00')
        const remainingTime = TargetTime - isTime;

        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        this.countSecond = 60 - seconds;

        if (this.countSecond == 60) {
            this.countMinuts += 1;  
        }

        if (this.countMinuts == 10 && this.countSecond == 60) {
            this.NextHour(1);
        }

        if(this.countMinuts==undefined) {
            this.countMinuts = 0;
            this.countHours = 0;
        }

        if(this.countHours == 6)
        {
            this.Check = false;
            alert('День закончился. Отдохните и снова к новым веринам.');
        }

        document.getElementById('minutes').innerText = String(this.countMinuts).padStart(2,0);
        document.getElementById('second').innerText = String(this.countSecond).padStart(2,0);
    }

    NoTime()
    {
        if(this.Check == true) {return true;}
        alert('К сожалению игровой день закончился, чтобы продолжить поспите. PS: Кнопка "Спать"');
        return false;
    }

    nextDay() 
    {
        this.Check = true;
        this.countDays++;
        document.getElementById('days').innerText = String(this.countDays).padStart(2,0);
        this.countHours = 0;
        this.countMinuts = 0;
        this.countSecond = 0;
        alert('Вы выспались!')
        return this;
    }

}

class Class_Job 
{
    goToWorkCount = 0;
    jobs = {
        'Стройка':['9', 'Тяжелая, но хорошо оплачиваемая работа, для подростков. Конечно, если получиться устроиться', ''],
        'Уборка мусора':['4', 'Весьма противная работа, еще и скудно оплачиваемая, но к счастью шансов устроиться больше.', ''],
        'Продавец':['7', 'Продавщик в любом магазине. Устроиться не легко, но зато неплохая заработная плата.', ''],
        'Достващик':['6', 'Место куда точно возьмут. Весьма неплохой заработок', ''],
        'Грузчик':['10', 'Очень тяжелая работаю придется переносить тяелые вещи, но при этом большой заработок для подростка.', ''],
    };

    popJobs = document.querySelector('.job-menu');

    constructor(InName=undefined,Cost=0)
    {
        this._name=InName;//Лошара бу-га-га;
        this._cost=Cost;
    }

    get Name() {return this._name};
    set Name(inValue) {this._name=inValue};
    get Cost() {return this._cost};
    set Cost(inValue) {this._cost=inValue};

    Refresh()
    {
        if(!this.Name){return this;}
        document.querySelector('.job-cont').style.display='flex';
        document.querySelector('.jname').innerText=this.Name;
        document.querySelector('.jcost').innerText=this.Cost;
        return this;
    }

    GetJob(elj)
    {
        if(!Engine.time.NoTime()) {return this;}
        if(this.Name){alert('Можно работать только на одной работе'); return this;}
        if(Number(this.Cost=document.querySelector('.job-cost').innerText) > 0) {
            this.Name=elj.querySelector('.job-name').innerText;
            this.Cost=document.querySelector('.job-cost').innerText;
        } else {
            alert('Неверная информация. Выберите работу');
            return this;
        }
        this.Refresh();
        alert('Вы устроились')
    }

    RefreshInfo(elem) 
    {   
        document.querySelector('.job-cost').innerText=this.jobs[elem.querySelector('.job-name').innerText][0];
        document.querySelector('.job-info').innerText=this.jobs[elem.querySelector('.job-name').innerText][1];
    }

    Work()
    {
        if(!this.Name){alert('Вы безработный! Устройтесь на работу.'); return this;}
        if(!Engine.time.NoTime()) {return this;}
        if(Engine.time.countHours >=3 && Engine.time.countMinuts >5) {alert('К сожалению у вас не хватает времени.'); return this;}
        if(this.goToWorkCount == 3)
        {
            this.goToWorkCount = 0;
            Engine.player.Money += Number(this.Cost); 
            Engine.player.Apdate();
            alert('Вы работаете.');
        } else{
            this.goToWorkCount += 1;
        }
        Engine.time.NextHour(5);
    }
}


class Class_Player
{
    checkPMoney;
    constructor(inName = "Джон", money = 0)
    {
        this._name=inName;
        this._job = new Class_Job();
        this._money = money;
    }

    get Name() { return this._name;}
    set Name(inValue) {this._name=inValue;}
    get Money() {return this._money;}
    set Money(inValue) {this._money = inValue;}
    get Job() {return this._job;}

    Apdate()
    {
        if(!this.Name){return this;}

        if(document.getElementById('userBalance')!=this.Money){document.getElementById('userBalance').innerText=this.Money;}
    }
}


class Class_Engine
{
    constructor(name_player, money)
    {
        // this._bank = new Class_Bank();
        this._school = new Class_School();
        this._handmade = new Class_Handmade();
        this._player = new Class_Player(name_player, money);
        this._time = new Class_Time();
        this._inventory = new Class_Inventory();
        this._market = new Class_Market();
        return this;
    }

    get market() {return this._market;}
    get handmade() {return this._handmade;}
    get player() { return this._player;}
    get time() {return this._time;}
    get inventory() {return this._inventory;}
    get School() {return this._school;}

    refresh()
    {
        const tmpB = document.getElementById("player_name").innerText.toString()!==Engine.player.Name;
        if(tmpB) document.getElementById("player_name").innerText=Engine.player.Name;
    }

    tick() {
        setInterval(this.time.countTime, 1000);
        setInterval(Action, 1000, this.player.Money, monye);
    } 
}


function Action(arg)
{
    if(arg=='') {
        //
    }
}

var countTittle = 0;
let arrayInPhrases = [
    [
        'Привет!', 
        'Привет, дорогой игрок! Я уверен ты уже знаешь очень много о финансах и уже умеешь ими пользоваться. В этой игре ты проверишь или укрепишь свои знания, и возможно узнаешь о том, как можно сохранить или увеличить свои финансы. Главная задача достичь 1000 игровой валюты.',
        'Давай мы расскажем тебе об игре. Ты сможешь бодрствовать только 6 игровых часов. Каждый час равен 10 минутам. То есть бодрствовать ты можешь 60 минут, после чего тебе нужно обязательно поспать, нажав на красную кнопку сверху. После чего вы сможете продолжить игру.',
        'В правом верхнем углу счет ваших денег. Наша валюта называется «маны».  Изначально у тебя их 5. Ниже расположена дверь. Это кнопка, чтобы сходить на работу. Игрок может сходить на работу только 2 раза за день, а заработную плату сможешь получить за 3 дня. Ведь редко, когда выплачивают заработную плату за 1 рабочий день.'
    ],
    [
        'Навыки и заказы.',
        'А теперь немного об основных механиках. Навыки – это необходимые знания и умения для определенной работы в игре. Ведь даже в реальности ты не сможешь стать космонавтом если не получишь должного обучения. У нас так же. С разными навыками можно выполнять разные виды заказов (о них чуть позже).',
        'В игре представлены 5 видов навыков: монтаж видео, программирование, настройка/сборка ПК, дизайнерские способности, и маркетинг. В реальной жизни их у вас может быть намного больше, все зависит от вас.',
        'Заказы. Предположим вы обучились чему-то и рассказали друзьям, а также разместили объявление со своими услугами на любой площадке. И тут вы либо сразу, либо через время начинаете получать заказы. В игре они представлены в виде списка, где выбираете их вы. Естественно, на разные заказы нужны разные навыки. При взятии заказа с вас спишут определенную сумму, ее можно считать налогом и прочими тратами которые понадобятся за заказ. Налог - Это регулярная плата, взимающаяся с организации или гражданина безвозмездно в принудительном порядке.',
        'После того как взяли заказ, он отобразиться в инвентаре, где его можно будет либо не выполнить и сдать обратно, либо выполнить и получить выполненный заказ. За который естественно можно получить вознаграждение.'
    ],
    [
        'Вклады и кредиты.',
        'А если вам не хватает средств на оплату обучения или же взятия заказа, вы можете взять кредит. Кредит - это деньги которые берутся в долг у банка и выплачиваются с процентами. Проценты - считается платой за использование денег банка. Кредит не всегда зло, в правильных руках это великолепный инструмент для получения средств. У нас представлено 2 вида. У первого проценты выплачиваются общей суммой вместе с телом. А у второго проценты будут выплачиваться только после выплаты тела, что делает платеж меньше. Так же они различаются по процентной ставке.',
        'Но если вам не нужно брать в долг, а хочется просто сохранить средства, а может и приумножить, то у нас есть вклады. Кстати ими можно пользоваться уже с 14 лет. У нас их тоже 2 вида. Один с ограниченным сроком, но с большим процентом, а второй с неограниченным сроком и меньшим процентом. Так к примеру, можно попробовать сохранить деньги при инфляции. Инфляция – это обесценивание денег, которое влечет за собой подорожание товаров и услуг.',
        'После вложения или взятия кредита, они у вас появятся в инвентаре.'
    ]
];

function SearchForValueInPopup()
{

    if (arrayInPhrases[countTittle][1]) {
        PopupWindow(arrayInPhrases[countTittle][0] , arrayInPhrases[countTittle][1]);
        arrayInPhrases[countTittle].splice(1, 1);

    } else{
        countTittle++; 
        PopupWindow(arrayInPhrases[countTittle][0] , arrayInPhrases[countTittle][1]);
    }
}

function PopupWindow(text, bottomText=undefined)
{    
    let myWindow = document.getElementById('popup_window');
    myWindow.showModal();

    const checkText = document.getElementById('text-up-text').innerText.toString()!==text;
    if (checkText) document.getElementById('text-up-text').innerText=text;
    
    const checkBText = document.getElementById('text-niz-text').innerText.toString()!==bottomText;
    if (checkBText) document.getElementById('text-niz-text').innerText=bottomText;
}

var monye = 0;
const Engine = new Class_Engine('tima', 5);
Engine.player.Apdate();
Engine.tick();