# Jewish Timer

## Overview

Jewish Timer allows you to set schedules by weekday, Gregorian Calendar and Jewish Calendar.

Schedules can be set to a specific time or based on Jewish Zmanim.

It allows for up to 10 schedules per day, and lets you set up to 10 date selections, 
each date selection can either include, exclude or limit to a specific date (or group dates).

It also allows chaining timers one on top of the other. 
The top one can silence the next one, this allows you to 
set a default weekly schedule and then add custom schedules for special dates.

## Options
### Lat (required)
The Latitude to calculate the Zmanim.
### Lon (required)
The Longitude to calculate the Zmanim.
### Topic 
A MQTT topic to post to
### On Msg
The Msg to send on the ON event
### Off Msg
The Msg to send on the OFF event
### Force subsequent Nodes to be inactive
### Force Inactive for full day(00:00 - 11:59:59)
### Inactive Offset after last msg
We can force schdules node behind this one to be inactive, eihter for a set time after the last schedule or for the full day.'

-------------------------------------------------------------------------------
### Set Schedule Times
This is where you set the time and action for a schedule
#### Active
Allows you to temporarily inactivate a schedule
#### Action 
The Action to happen at the set time
#### Time Type 
You can set a specific time or a zman based time
#### Time (depending on earlier selection)
The time for the event
#### Zman (depending on earlier selection)
At which zman the event should run
#### Offset (depending on earlier selection)
You can set A positive or negetive offset to a zman

### Set Schedule Dates
This is where you set the date a schedule should be active
#### Active
Allows you to temporarily inactivate a selection
#### Action
whether the selected date should be added to the active dates or excluded, from the second date selection and on you can also choose to "only include", which will limit the schedule to only the current date selection (given it was enabled by a previous selection). 
>***With these Date selection options you can combine date filters across different selections (Ex: only run on Summer Sundays, or just Shabbos Erev Pasech).***
#### Date Type
Which type of Date to use for the filter (greg, jewish, or weekday).
Based on the date type you can either select weekdays or months and the days in a Month. 
>Note: Days in month needs to be a comma delimited list (an empty list will be not be active)