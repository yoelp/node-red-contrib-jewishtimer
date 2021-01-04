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
				<div class="js-entry entry expanded-vis" >
					<div class="form-row"  data-nodetype="TimeActive">
						<label for="node-input-sc${idx}TimeActive" >Active</label>
						<input type="checkbox" id="node-input-sc${idx}TimeActive" class="js-active" />
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
				<div class="js-entry entry expanded-vis" >
					<div class="form-row"  data-nodetype="DateActive">
						<label for="node-input-sc${idx}DateActive" >Active</label>
						<input type="checkbox" id="node-input-sc${idx}DateActive" class="js-active" />
					</div>
					<div class="form-row"  data-nodetype="DateAction">
						<label for="node-input-sc${idx}DateAction" >Action:</label>
						<select id="node-input-sc${idx}DateAction" >
							<option value="1" class="reginclude">Include</option>
							<option value="2" class="specialinclude">Include</option>
							<option value="2" class="onlyinclude">Only Include</option>
							<option value="0">Exclude</option>
						</select>
					</div>
					<div class="form-row" data-nodetype="Datetype">
						<label for="node-input-sc${idx}Datetype" >Date Type</label>
						<select id="node-input-sc${idx}Datetype"  class="js-datetype">
							<option value="weekday">Weekdays</option>
							<option value="jmonthday">Jewish Dates</option>
							<option value="gmonthday">Gregorian Dates</option>
						</select>
					</div>
					<div class="form-row weekday-selection"  data-nodetype="Weekday">
						<span class="inline">
							<label for="node-input-sc${idx}Sun" >Sunday</label>
							<input type="checkbox" id="node-input-sc${idx}Sun" />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Mon" >Monday</label>
							<input type="checkbox" id="node-input-sc${idx}Mon"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Tue" >Tuesday</label>
							<input type="checkbox" id="node-input-sc${idx}Tue"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Wed" >Wednesday</label>
							<input type="checkbox" id="node-input-sc${idx}Wed"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Thu" >Thursday</label>
							<input type="checkbox" id="node-input-sc${idx}Thu" />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Fri" >Friday</label>
							<input type="checkbox" id="node-input-sc${idx}Fri" />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Sat" >Saturday</label>
							<input type="checkbox" id="node-input-sc${idx}Sat"  />
						</span>
					</div>
					<div class="form-row gmonthday-selection"  data-nodetype="gMonthday">
						<span class="inline">
							<label for="node-input-sc${idx}Jan" >Jan</label>
							<input type="checkbox" id="node-input-sc${idx}Jan"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Feb" >Feb</label>
							<input type="checkbox" id="node-input-sc${idx}Feb"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Mar" >Mar</label>
							<input type="checkbox" id="node-input-sc${idx}Mar"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Apr" >Apr</label>
							<input type="checkbox" id="node-input-sc${idx}Apr"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}May" >May</label>
							<input type="checkbox" id="node-input-sc${idx}May"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Jun" >Jun</label>
							<input type="checkbox" id="node-input-sc${idx}Jun"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Jul" >Jul</label>
							<input type="checkbox" id="node-input-sc${idx}Jul"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Aug" >Aug</label>
							<input type="checkbox" id="node-input-sc${idx}Aug"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Sep" >Sep</label>
							<input type="checkbox" id="node-input-sc${idx}Sep"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Oct" >Oct</label>
							<input type="checkbox" id="node-input-sc${idx}Oct"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Nov" >Nov</label>
							<input type="checkbox" id="node-input-sc${idx}Nov"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Dec" >Dec</label>
							<input type="checkbox" id="node-input-sc${idx}Dec"  />
						</span>
						<br />
						<label for="node-input-sc${idx}gmonthdays" title="Leave empty for all">Select Days</label>
						<input type="text" patteran="\d{1,2}(\,\d{1,2})*" id="node-input-sc${idx}gmonthdays" placeholder="1,4,5,8,29"/>
					</div>
					<div class="form-row jmonthday-selection"  data-nodetype="jMonthday">
						<span class="inline">
							<label for="node-input-sc${idx}Nisan" >Nisan</label>
							<input type="checkbox" id="node-input-sc${idx}Nisan"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Iyar" >Iyar</label>
							<input type="checkbox" id="node-input-sc${idx}Iyar"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Sivan" >Sivan</label>
							<input type="checkbox" id="node-input-sc${idx}Sivan"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Tamuz" >Tamuz</label>
							<input type="checkbox" id="node-input-sc${idx}Tamuz"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Av" >Av</label>
							<input type="checkbox" id="node-input-sc${idx}Av"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Elul" >Elul</label>
							<input type="checkbox" id="node-input-sc${idx}Elul"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Tishri" >Tishri</label>
							<input type="checkbox" id="node-input-sc${idx}Tishri"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Heshvan" >Cheshvan</label>
							<input type="checkbox" id="node-input-sc${idx}Heshvan"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Kislev" >Kislev</label>
							<input type="checkbox" id="node-input-sc${idx}Kislev"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Tevet" >Tevet</label>
							<input type="checkbox" id="node-input-sc${idx}Tevet"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Shevat" >Shevat</label>
							<input type="checkbox" id="node-input-sc${idx}Shevat"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Adar1" >Adar I</label>
							<input type="checkbox" id="node-input-sc${idx}Adar1"  />
						</span>
						<span class="inline">
							<label for="node-input-sc${idx}Adar2" >Adar, Adar II</label>
							<input type="checkbox" id="node-input-sc${idx}Adar2"  />
						</span>
						<br />
						<label for="node-input-sc${idx}jmonthdays" title="Leave empty for all">Select Days</label>
						<input type="text" patteran="\d{1,2}(\,\d{1,2})*" id="node-input-sc${idx}jmonthdays" placeholder="1,4,5,8,29"/>
					</div>
				</div>
		`);
		}
		return htmlArray.join("\n");
	})()
}