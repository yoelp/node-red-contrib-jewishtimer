const TIMER_COUNT = 10;
const DAYS_COUNT = 10;
module.exports = {
	TIMER_COUNT,
	DAYS_COUNT,
	TIMER_HTML: (()=>{
		const htmlArray = [];
		for (let i = 0; i < TIMER_COUNT; i++) {
			const idx = i + 1;
			htmlArray.push(`
				<div class="js-timerentry entry expanded-vis" >
					<div class="form-row"  data-nodetype="TimeActive">
						<label for="node-input-sc${idx}TimeActive" >Active</label>
						<input type="checkbox" id="node-input-sc${idx}TimeActive" class="js-timer-active" />
					</div>
					<div class="form-row"  data-nodetype="TimeAction">
						<label for="node-input-sc${idx}TimeAction" >Action:</label>
						<select id="node-input-sc${idx}TimeAction" >
							<option value="1">On</option>
							<option value="0">Off</option>
						</select>
					</div>
					<div class="form-row" data-nodetype="Timetype">
						<label for="node-input-sc${idx}Timetype" >Time Type</label>
						<select id="node-input-sc${idx}Timetype"  class="js-timetype">
							<option value="time">Time</option>
							<option value="zman">Zman</option>
						</select>
					</div>
					<div class="form-row time-selection"  data-nodetype="Time">
						<label for="node-input-sc${idx}Time" style="width:40px">Time:</label>
						<input type="time" id="node-input-sc${idx}Time" style="width:110px"/>
					</div>
					<div class="form-row zman-selection"  data-nodetype="Zman">
						<label for="node-input-sc${idx}Zman" style="width:56px">Zman <i title="Avaliable Zmanim are the basic zmanim from the KosherZmanim lib" class="fa fa-question-circle"></i>: </label>
						<select id="node-input-sc${idx}Zman" style="width:138px">
							<option value="BeginAstronomicalTwilight">BeginAstronomicalTwilight</option>
							<option value="AlosHashachar">AlosHashachar</option>
							<option value="Alos72">Alos72</option>
							<option value="BeginNauticalTwilight">BeginNauticalTwilight</option>
							<option value="BeginCivilTwilight">BeginCivilTwilight</option>
							<option value="SeaLevelSunrise">SeaLevelSunrise</option>
							<option value="Sunrise">Sunrise</option>
							<option value="SofZmanShmaMGA">SofZmanShmaMGA</option>
							<option value="SofZmanShmaGRA">SofZmanShmaGRA</option>
							<option value="SofZmanTfilaMGA">SofZmanTfilaMGA</option>
							<option value="SofZmanTfilaGRA">SofZmanTfilaGRA</option>
							<option value="Chatzos">Chatzos</option>
							<option value="CandleLighting">CandleLighting</option>
							<option value="SeaLevelSunset">SeaLevelSunset</option>
							<option value="Sunset">Sunset</option>
							<option value="EndCivilTwilight">EndCivilTwilight</option>
							<option value="Tzais">Tzais</option>
							<option value="EndNauticalTwilight">EndNauticalTwilight</option>
							<option value="Tzais72">Tzais72</option>
							<option value="EndAstronomicalTwilight">EndAstronomicalTwilight</option>
						</select>
					</div>
					<div class="form-row  zman-selection"  data-nodetype="Zmanoffset">
						<label for="node-input-sc${idx}Zmanoffset" style="width:40px;">Offset:</label>
						<input type="number" id="node-input-sc${idx}Zmanoffset" placeholder="0">
						<select id="node-input-sc${idx}Zmanoffsettype" name="node-input-sc${idx}Zmanoffsettype">
							<option value="1000">Seconds</option>
							<option value="60000" selected="selected">Minutes</option>
							<option value="3600000">Hours</option>
						</select>
					</div>
				</div>
			`);
		}
		return htmlArray.join("\n");
	})(),
	DAYS_HTML: (()=>{
		const htmlArray = [];
		for (let i = 0; i < DAYS_COUNT; i++) {
			const idx = i + 1;
			htmlArray.push(`
				<div class="js-dateentry entry expanded-vis" >
					<div class="form-row"  data-nodetype="DateActive">
						<label for="node-input-sc${idx}DateActive" >Active</label>
						<input type="checkbox" id="node-input-sc${idx}DateActive" class="js-timer-active" />
					</div>
					<div class="form-row"  data-nodetype="DateAction">
						<label for="node-input-sc${idx}DateAction" >Action:</label>
						<select id="node-input-sc${idx}DateAction" >
							<option value="1">Include</option>
							<option value="0">Exclude</option>
						</select>
					</div>
					<div class="form-row" data-nodetype="Datetype">
						<label for="node-input-sc${idx}Datetype" >Time Type</label>
						<select id="node-input-sc${idx}Datetype"  class="js-datetype">
							<option value="weekday">Weekdays</option>
							<option value="monthday">Dates</option>
						</select>
					</div>
					<div class="form-row weekday-selection"  data-nodetype="Weekday">
						Weekday
					</div>
					<div class="form-row monthday-selection"  data-nodetype="Weekday">
						Month
					</div>
				</div>
		`);
		}
		return htmlArray.join("\n");
	})()
}