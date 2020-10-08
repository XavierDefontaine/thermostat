# thermostat

notes

1. Termostat starts with 20

2. Increase Temp with Up function
   assume that when you use up function temeprature increases by 1

3. Decrease Temp with Down function
   assume that when we use the down function it decreases temp by 1
4. Set minimum temperature to 18 degrees.

5. Set maximum temperature to 25 degrees with POWERSAVING mode on.

6. Maximum temperature is 32 when POWERSAVING mode is off.


Steps to setup Sinatra

- roots (index, temperature(GET/POST) )
- model (Thermostat class with temperature and update method)
- Javascript (update Thermostat.js to add:
> a getLatestTemp method sending a get to Sinatra
> then a post with an updateTemp method 
- update interface.js