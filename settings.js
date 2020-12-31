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
				<div class="js-timerentry timerentry expanded-vis" >
					<div class="form-row"  data-nodetype="Active">
						<label for="node-input-sc${idx}Active" >Active</label>
						<input type="checkbox" id="node-input-sc${idx}Active" class="js-timer-active" />
					</div>
					<div class="form-row"  data-nodetype="Action">
						<label for="node-input-sc${idx}Action" >Action:</label>
						<select id="node-input-sc${idx}Action" >
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
	})()
}