// Custom TimerItem class
class DemoTimerItem_Class extends TimerItem_Class
{
    info="";
    Update()
    {
        this.info+="+"; // Test Ticks
        return super.Update();
    }
    setArg(arg, value)
    {
        // Filter Arg 
        if(arg=="info") {this.info+=value; return this;}
        return super.setArg(arg, value);
    }
}


// Test Timer

function Console_Tick(TimerItem) 
{
console.info('Console_Tick: '+ TimerItem.complete);
}

MyTimer = new Timer_Class();

//MyTimer.internal_timer=false;

MyTimer.addItem( new  TimerItem_Class());
MyTimer.addItem( new  DemoTimerItem_Class().setArg("info","Tick: ").setArg("time_ms",3000).set_onUpdate(Console_Tick));
MyTimer.addItem( new  TimerItem_Class());

// Programm

console_window = document.getElementById("console_window");

function RenderItems()
{
vStr = '';
for(TimerItem of MyTimer.items)
{
    //vStr+="Item.complete: "+ TimerItem.complete + "<br>\r\n";
    vStr+=var_export(TimerItem,true)+"\r\n";
}
// console_window.innerText = vStr;
}


AllTimerEnd = millis()+10*1000; // 10 sec * (1000 millis = 1 sec)
console.info('Millis: '+ millis());
console.info('AllTimerEnd: ' + (AllTimerEnd-millis()));

function Timer_Tick()
{
if(!(millis()<AllTimerEnd)) { RenderItems(); return ;};
setTimeout(Timer_Tick,200);
if(!MyTimer.internal_timer) MyTimer.Update();
    
RenderItems();
// console_window.innerText += "Complete: " + (MyTimer.internal_test_complete() ? "ok" :"wait") +"\r\n";
// console_window.innerText +="Millis: " + millis() + "\r\n";
//sleep(500);
}

MyTimer.start();
Timer_Tick();


console.info('timers: '+ Timer_Class.timers.length);

//console.info('item: '+ invalid(Item));




// ----- Async Delay -----
const delay = (delayInms) => {
return new Promise(resolve => setTimeout(resolve, delayInms));
};
const sample = async () => {
console.log('a');
console.log('waiting...')
let delayres = await delay(500);
console.log('b');
};
sample();

//]]>