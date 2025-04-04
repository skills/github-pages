function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};
	function millis() // Get Milliseconds
	{
		//var d = new Date();
		//return d.getMilliseconds() + d.getSeconds() * 1000 + d.getMinutes() * 1000 * 60 + d.getHours() * 1000 * 60 * 24; // This counter for single day.
		return new Date().getTime();
	}

	class TimerItem_Class
	{
		time_ms=1000;
		timeStart=0;
		timeEnd=0;
		complete=0; // 0..1
		onUpdate = undefined; // function (this);
		
		setArg(arg, value)
		{
			if(arg=="time_ms") this.time_ms=value;
			return this;
		}
		Update()
		{
			if(this.onUpdate) this.onUpdate(this);
			return this;
		}
		set_onUpdate(value)
		{
			this.onUpdate = value;
			return this;
		}
		protected_Update()
		{
			var lMillis = millis();
			var lComplete=this.complete;
			if(lMillis<this.timeStart) {lComplete=0; } else if (lMillis>this.timeEnd) {lComplete=1;} else
			{
				lComplete = 1 - ((this.timeEnd - lMillis) / this.time_ms);
			}
			if(lComplete!=this.complete)
			{
				this.complete=lComplete;
				this.Update();
			}
			return this;
		}
	}

	class Timer_Class 
	{
		static timers = new Array();
		items = new Array();
		timeStart=0;
		timeEnd=0;
		userFunc = null;
		isRunning = false;
		refresh_ms = 250; // 
		internal_timer=true;
		internal_timer_ms=80;
		onUpdate = undefined;
  		constructor()
		{
			Timer_Class.timers.push(this);
			return this;
		}
		internal_test_complete()
		{
			var i1=0;
			var i2=0;
			
			for(var TimerItem of this.items) 
			{
				i1++;
				i2+=TimerItem.complete;
			}
			if(i2>=i1) return true;
			return false;
		}
		internal_onTimer( Value )
		{
			if(Value.internal_test_complete()) { Value.stop(); return;} 
			Value.Update();
			setTimeout(Value.internal_onTimer, Value.internal_timer_ms, Value);
		}
		start()
		{
			if(this.isRunning) return this;
			this.isRunning=true;
			var sTime=millis();
			for(var TimerItem of this.items) // Update Start & End Timers
			{
				TimerItem.timeStart=sTime;
				TimerItem.timeEnd=sTime+TimerItem.time_ms;
				sTime = TimerItem.timeEnd;
			}
			if(this.internal_timer) 
					this.internal_onTimer(this);
				else
					this.Update();
			return this;
		}
		stop()
		{
			if(!this.isRunning) return this; 
			this.Update();
			this.isRunning=false;
			return this;
		}
		Update()
		{
			if(!this.isRunning) return this;
			for(var TimerItem of this.items) TimerItem.protected_Update();
			if(this.onUpdate) this.onUpdate(this);
			// refresh items
			return this;
		}
		remove()
		{
			var index = Timer_Class.timers.indexOf(this);
			if (index > -1) Timer_Class.timers.splice(index, 1);
		}
		addItem( Value )
		{
			//if(this.isRunning) return this;
			this.items.push(Value);
			return this;
		}
	}

