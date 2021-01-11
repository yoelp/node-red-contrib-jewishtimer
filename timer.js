const { DAYS_COUNT, TIMER_COUNT} =  require("./settings");

module.exports = function(RED) {
	"use strict"
	const HeDate = require('he-date');
	const kosherZmamin = require('kosher-zmanim');
	function getMonth(month){
		return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][month];
	}
	function getWeekday(weekday){
		return ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][weekday];
	}
	function getHeDateMonth(hedate) {
		let month = hedate.toDateString().match(/^.+?\d\d (.+) \d{4}$/)[1];
		// for adar we'll only deal with adar1 and adar2.
		if(month == "Adar I") return "Adar1";
		if(month.startsWith("Adar")) return "Adar2";
		return month;
	}
	
    function Timer(config) {
        RED.nodes.createNode(this,config);
        const node = this;
		node.state = {
			msg: {
				topic: config.topic,
			},
			delay: Number(config.delay) && Number(config.delaytype) * Number(config.delay),
			timeout: null,
			startTime: new Date(),
			todaysSchedules: [],
			active: true,
			incomingMsg: null,
		}
		function sendMsg(){
			node.send(node.state.msg);
		}
		function startSchedule(){
			// starts the process when node starts
			startTodaysScheules();
		}
		function execSchedule(){
			// execeutes a schedule and schedules the next one 
			clearTimeout(node.state.timeout);
			const evt = node.state.todaysSchedules.shift();
			node.state.msg.payload = Number(evt.action) ? config.onmsg : config.offmsg;
			sendMsg();
			scheduleNextEvt();
		}
		function scheduleNextEvt(){
			// schedules next evt for today or tomorrows day start
			if(node.state.todaysSchedules.length){
					node.state.timeout = setTimeout(execSchedule, node.state.todaysSchedules[0].time - Date.now() );
			} else {
				const tom = new Date();
				tom.setDate(tom.getDate()+1);
				tom.setHours(0);
				tom.setMinutes(0);
				tom.setSeconds(0);
				tom.setMilliseconds(0);
				node.state.timeout = setTimeout(startTodaysScheules,tom.getTime() - Date.now());
			}
		}
		function startTodaysScheules(){
			if(!node.state.active) return;
			// collects schedules, runs last past due schedule for today, and sets timer
			node.state.todaysSchedules = getTodaysSchedules();
			let i = 1;
			while(i < node.state.todaysSchedules.length && node.state.todaysSchedules[i].time <= Date.now()){
				node.state.todaysSchedules.shift();
				++i;
			}
			if(node.state.todaysSchedules.length){
				if(config.forceinactive){
					if(config.forceinactivefullday){
						const date = new Date();
						date.setHours(23);
						date.setMinutes(59);
						date.setSeconds(59);
						node.state.msg.forceInactiveUntil = date.getTime();
						// send msg right away to force inactive
						sendMsg();
					} else {
						const time = node.state.todaysSchedules[node.state.todaysSchedules.length -1].time + Number(config.inactiveoffset) * Number(config.inactiveoffsettype);
						node.state.msg.forceInactiveUntil = time;
						// not sending msg now, it will go with next schedule;
					}
				}
			}
			if(node.state.todaysSchedules[0].time <= Date.now()){
				execSchedule();
			} else {
				scheduleNextEvt();
			}
		}
		function getTodaysSchedules(){
			//maybe change to get 2 days schedules
			const date = new Date();
			const jDate = new HeDate();
			const weekday = getWeekday(date.getDay());
			const gDay = date.getDate();
			const gMonth = getMonth(date.getMonth());
			const jDay = jDate.getDate();
			const jMonth = getHeDateMonth(jDate);
			let dayActive = true;
			const events = [];
			for(let i=0;i<DAYS_COUNT;i++){
				if(config[`sc${i}DateActive`]) {
					// Rule is Active
					switch(config[`sc${i}DateAction`]){
						case 0:
							// exclude
							dayActive = dayActive && !( 
									config[`sc${i}Datetype`] === "gmonthday" && 
									config[`sc${i}${gMonth}`] && 
									config[`sc${i}gmonthdays`].split(",").includes(gDay)
								) && !( 
									config[`sc${i}Datetype`] === "jmonthday" && 
									config[`sc${i}${jMonth}`] && 
									config[`sc${i}jmonthdays`].split(",").includes(jDay)
								) && !( 
									config[`sc${i}Datetype`] === "weekday" && 
									config[`sc${i}${weekday}`]
								);
							break;
						case 1:
							// include
							dayActive = dayActive || ( 
									config[`sc${i}Datetype`] === "gmonthday" && 
									config[`sc${i}${gMonth}`] && 
									config[`sc${i}gmonthdays`].split(",").includes(gDay)
								) || ( 
									config[`sc${i}Datetype`] === "jmonthday" && 
									config[`sc${i}${jMonth}`] && 
									config[`sc${i}jmonthdays`].split(",").includes(jDay)
								) || ( 
									config[`sc${i}Datetype`] === "weekday" && 
									config[`sc${i}${weekday}`]
								);
							break;
						case 2:
							// only include;
							dayActive = dayActive && ( 
									config[`sc${i}Datetype`] === "gmonthday" && 
									config[`sc${i}${gMonth}`] && 
									config[`sc${i}gmonthdays`].split(",").includes(gDay)
								) && ( 
									config[`sc${i}Datetype`] === "jmonthday" && 
									config[`sc${i}${jMonth}`] && 
									config[`sc${i}jmonthdays`].split(",").includes(jDay)
								) && ( 
									config[`sc${i}Datetype`] === "weekday" && 
									config[`sc${i}${weekday}`]
								);
							break;
						default:
							// act as if inactive
							continue;
					}
				}
			}
			if(dayActive){
				// gather events
					for(let i = 0; i< TIMER_COUNT; i++){
						// TODO check if its a bool
						if(config[`sc${i}TimeActive`]){
							if(config[`sc${i}Timetype`] == "time"){
								const [hrs,mins] = config[`sc${i}Time`].split(":");
								const time = new Date();
								time.setHours(hrs);
								time.setMinutes(mins);
								events.push({
									time: time.getTime(),
									action: config[`sc${i}TimeAction`]
								})
							}else if(config[`sc${i}Timetype`] == "zman"){
								const zmanim = kosherZmamin.getZmanimJson({
									latitude: config.lat,
									longitude: config.lon
								}).BasicZmanim;	
								const time = (new Date(zmanim[config[`sc${i}Zman`]])).getTime() + Number(config[`sc${i}Zmanoffset`]) * Number(config[`sc${i}Zmanoffsettype`]);
								events.push({
									time,
									action: config[`sc${i}TimeAction`]
								})
							}
						}
					}
			}
			return events.sort((a,b)=>{return a.time - b.time });
		}
		function setInactiveUntil(time){
			if(time > Date.now()){
				node.state.active = false;
				clearTimeout(node.state.timeout);
				node.state.timeout = setTimeout(()=>{
					node.state.active = true;
					startSchedule();
				}, time - Date.now());
				node.send(node.state.incomingMsg);
			}
		}
		// entry point
		startSchedule();
		
        node.on('input', function(msg) {
			node.state.incomingMsg = msg;
			if(msg.forceInactiveUntil){
				setInactiveUntil(msg.forceInactiveUntil);
			}
			if(!config.topic && msg.topic){
				node.state.msg.topic = msg.topic;
			}
        });
		node.on('close', function(){
			clearTimeout(node.state.timeout);
		});
    }
    RED.nodes.registerType("jewish-timer",Timer);
}