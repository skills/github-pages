const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const creditButton = document.getElementById('credit-button');
const creditInput = document.getElementById('input-cost');
let avalue;
let arg = undefined;

item1.onclick = function(){
    item1.style.border = '7px groove #451cff';
    item2.style.border = 'none';
    avalue = 15;
}

item2.onclick = function(){
    item2.style.border = '7px groove #451cff';
    item1.style.border = 'none';
    avalue = 21;
}

creditButton.onclick = function() {
    arg='credits';
    bank.Append(arg, creditInput.value, avalue); 
    creditInput.value = '';
}

const credBtn = document.getElementById('bank-credit-button');
const invBtn = document.getElementById('bank-invvest-button');
const windowBank = document.getElementById('bank');

invBtn.addEventListener('click', ()=>{
    windowBank.classList.add('active');
})

credBtn.addEventListener('click', ()=>{
    windowBank.classList.remove('active');
})

const invItem1 = document.getElementById('invitem1');
const invItem2 = document.getElementById('invitem2');
const getInvBtn = document.getElementById('invest-button');
const investInputPhr = document.getElementById('input-phrase');
const investInputCost = document.getElementById('input-invcost');

invItem1.onclick = function(){
    invItem1.style.border = '7px groove #1c6bff';
    invItem2.style.border = 'none';
    avalue = 12;
    windowBank.classList.add('phractive');
}

invItem2.onclick = function(){
    invItem2.style.border = '7px groove #1c6bff';
    invItem1.style.border = 'none';
    avalue = 20;
    windowBank.classList.remove('phractive');
}

getInvBtn.onclick = function(){
    console.log(avalue, ' 1');
    arg ='invests';
    console.log(investInputPhr.value);
    bank.Append(arg, investInputCost.value, avalue, investInputPhr.value); 
    investInputCost.value = '';
    investInputPhr.value = '';
}

const windowInventory = document.getElementById('inventory');
const inventoryBtn = document.getElementById('inventoryBtn');

const inventoryBankBtn = document.getElementById('inventBankBtn');
const inventoryItemBtn = document.getElementById('inventItemBtn');
const inventoryJobBtn = document.getElementById('inventJobBtn');
const inventoryProdBtn = document.getElementById('inventProdBtn');

const inventoryBoxBank = document.getElementById('inventoryBank');
const inventoryBoxItem = document.getElementById('inventoryItem');
const inventoryBoxJob = document.getElementById('inventoryJob');
const inventoryBoxProd = document.getElementById('inventoryProd');

let countClickInventoryBtn = 0;
let countClickBankBtn = 0;

inventoryBtn.addEventListener('click', ()=> {
    if(countClickInventoryBtn==0){
        windowInventory.classList.add('active');
        countClickInventoryBtn = 1;
    }else{
        windowInventory.classList.remove('active');
        countClickInventoryBtn = 0;
    }
})

inventoryBankBtn.addEventListener('click', ()=>{
    inventoryBoxBank.style.display = 'block';
    inventoryBoxItem.style.display = 'none';
    inventoryBoxJob.style.display = 'none';
    inventoryBoxProd.style.display = 'none';
})

inventoryItemBtn.addEventListener('click', ()=>{
    inventoryBoxItem.style.display = 'block';
    inventoryBoxBank.style.display = 'none';
    inventoryBoxJob.style.display = 'none';
    inventoryBoxProd.style.display = 'none';
})

inventoryJobBtn.addEventListener('click', ()=>{
    inventoryBoxJob.style.display = 'block';
    inventoryBoxItem.style.display = 'none';
    inventoryBoxBank.style.display = 'none';
    inventoryBoxProd.style.display = 'none';
})

inventoryProdBtn.addEventListener('click', ()=>{
    inventoryBoxProd.style.display = 'block';
    inventoryBoxItem.style.display = 'none';
    inventoryBoxJob.style.display = 'none';
    inventoryBoxBank.style.display = 'none';
})


const JI1 = document.getElementById('JI1');
const JI2 = document.getElementById('JI2');
const JI3 = document.getElementById('JI3');
const JI4 = document.getElementById('JI4');
const JI5 = document.getElementById('JI5');
let jact;

const popSchoolBtn = document.getElementById('schoolBtn');
const popMarketBtn = document.getElementById('marketBtn');
const popJobBtn = document.getElementById('jobBtn');

function JobSearch(el1, el2, el3, el4, el5)
{
    el1.style.border='1px solid rgb(24, 0, 161)';
    el2.style.border='none';
    el3.style.border='none';
    el4.style.border='none';
    el5.style.border='none';
    Engine.player.Job.RefreshInfo(el1);
    jact = el1;
}

JI1.addEventListener('click', ()=>{
    JobSearch(JI1, JI2, JI3, JI4, JI5);
})

JI2.addEventListener('click', ()=>{
    JobSearch(JI2, JI1, JI3, JI4, JI5);
})
JI3.addEventListener('click', ()=>{
    JobSearch(JI3, JI2, JI1, JI4, JI5);
})
JI4.addEventListener('click', ()=>{
    JobSearch(JI4, JI2, JI3, JI1, JI5);
})
JI5.addEventListener('click', ()=>{
    JobSearch(JI5, JI2, JI3, JI4, JI1);
})

popJobBtn.onclick=function()
{
    Engine.player.Job.GetJob(jact);
}

const SI1 = document.getElementById('SI1');
const SI2 = document.getElementById('SI2');
const SI3 = document.getElementById('SI3');
const SI4 = document.getElementById('SI4');
const SI5 = document.getElementById('SI5');
let sact;
function SSearch(el1, el2, el3, el4, el5)
{
    el1.style.border='1px solid rgb(24, 0, 161)';
    el2.style.border='none';
    el3.style.border='none';
    el4.style.border='none';
    el5.style.border='none';
    Engine.School.Refresh(el1.querySelector('.school-text'));
    sact=el1;
}

SI1.onclick=function(){
    SSearch(SI1, SI2, SI3, SI4, SI5);
}

SI2.onclick=function(){
    SSearch(SI2, SI1, SI3, SI4, SI5);
}
SI3.onclick=function(){
    SSearch(SI3, SI2, SI1, SI4, SI5);
}
SI4.onclick=function(){
    SSearch(SI4, SI2, SI3, SI1, SI5);
}
SI5.onclick=function(){
    SSearch(SI5, SI2, SI3, SI4, SI1);
}

popSchoolBtn.onclick=function(){
    Engine.School.buy(sact);
}

const MI1 = document.getElementById('MI1');
const MI2 = document.getElementById('MI2');
const MI3 = document.getElementById('MI3');
const MI4 = document.getElementById('MI4');
const MI5 = document.getElementById('MI5');
let mact;
var RElem = new Array();

function MSearch(el1, el2, el3, el4, el5)
{
    el1.style.border='1px solid rgb(24, 0, 161)';
    el2.style.border='none';
    el3.style.border='none';
    el4.style.border='none';
    el5.style.border='none';
    Engine.market.Refresh(el1.querySelector('.market-text'));
    mact=el1;
}

MI1.onclick=function(){
    MSearch(MI1, MI2, MI3, MI4, MI5);
}
MI2.onclick=function(){
    MSearch(MI2, MI1, MI3, MI4, MI5);
}
MI3.onclick=function(){
    MSearch(MI3, MI2, MI1, MI4, MI5);
}
MI4.onclick=function(){
    MSearch(MI4, MI2, MI3, MI1, MI5);
}
MI5.onclick=function(){
    MSearch(MI5, MI2, MI3, MI4, MI1);
}
popMarketBtn.addEventListener('click', ()=>{
    Engine.market.buy(mact);
})

function Ddelit(el)
{
    let arrzn = Array.from(el);
    Engine.inventory.SellItem(arrzn[1].innerText);
}

function Uuse(el)
{
    let arru = Array.from(el);
    Engine.inventory.UseItem(arru[1].innerText);
}

function Wwork()
{
    Engine.player.Job.Work();
}

function SSleep()
{
    Engine.time.nextDay();
}

function Ssell(el)
{
    let arri = Array.from(el);
    Engine.handmade.Sell(arri[1].innerText);
}