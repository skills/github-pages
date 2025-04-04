console_window = document.getElementById("console_window");

// Custom TimerItem class
	class TimerItem_MoveXY_Class extends TimerItem_Class
	{
		x=0;
		y=0;
  		constructor( Value = undefined)
		{
			super();
			return this;
		}
		Update()
		{
			return super.Update();
		}
		setArg(arg, value)
		{
			// Filter Arg 
			if(arg=="x") {this.x=value; return this;}
			if(arg=="y") {this.y=value; return this;}
			return super.setArg(arg, value);
		}
		getX()
		{
			return  Math.round(this.complete * this.x);
		}
		getY()
		{
			return  Math.round(this.complete * this.y);
		}
	}
class Animation_Class extends Timer_Class 
{
	id=undefined;
	constructor()
	{
		super();
		this.onUpdate = this.refresh; // Attach Event
		return this;
	}
	refresh(Anim)
	{
		if(!Anim.id) return this;
		var tag = document.getElementById(Anim.id);
		var x=0; var y=0;
		for(var Item of Anim.items)
		{
			x+=Item.getX();
			y+=Item.getY();
		}
		tag.style.left=x;
		tag.style.top=y;
		return this;
	}
}

MyTimer = new Animation_Class();
MyTimer.internal_timer_ms=20;
MyTimer.id="fatigue";
console.log(MyTimer.id);

MyTimer.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",0).setArg("x",100).setArg("y",100)); 
MyTimer.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",150).setArg("y",150));
MyTimer.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",200).setArg("y",200));
MyTimer.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",250).setArg("y",250));
MyTimer.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",100).setArg("y",100));

// MyTimer1 = new Animation_Class();
// MyTimer1.internal_timer_ms=20;
// MyTimer1.id="sleep-btn";
// console.log(MyTimer1.id);

// MyTimer1.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",0).setArg("x",100).setArg("y",100)); 
// MyTimer1.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",250).setArg("y",250));
// MyTimer1.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",0).setArg("y",0));
// MyTimer1.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",-250).setArg("y",-250));
// MyTimer1.addItem( new  TimerItem_MoveXY_Class().setArg("time_ms",1000).setArg("x",0).setArg("y",0));

// console.log(MyTimer1.items);

function run_anim()
{
	if(!MyTimer.isRunning)
	{
		MyTimer.start();
		// MyTimer1.start();
	}
}


// Programm
setInterval(run_anim,50);