'use strict';

describe("Thermostat", function() {

    it('starts at 20 degrees by default', function() {
      var thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20)
    });

    it('temperature can be increased', function() {
      var thermostat = new Thermostat();
      thermostat.up(5);
      expect(thermostat.temperature).toEqual(25)
    });

    it('temperature can be decreased', function() {
      var thermostat = new Thermostat();
      thermostat.down(4);
      expect(thermostat.temperature).toEqual(16)
    });

    it('minimum temperature is 10 degrees', function() {
      var thermostat = new Thermostat();
      thermostat.down(15);
      expect(thermostat.temperature).toEqual(10)
    });

    it('switchPowerSaving changes the power saving mode', function() {
      var thermostat = new Thermostat();
      thermostat.switchPowerSaving();
      expect(thermostat.powerSaving).toBe(false)
    });

    it('max temperature is 25 degrees when power saving mode on', function() {
      var thermostat = new Thermostat();
      thermostat.up(15);
      expect(thermostat.temperature).toEqual(25)
    });

    it('max temperature is 32 degrees when power saving mode off', function() {
      var thermostat = new Thermostat();
      thermostat.switchPowerSaving();
      thermostat.up(15);
      expect(thermostat.temperature).toEqual(32)
    });

    it('the reset function returns the temperature to 20', function() {
      var thermostat = new Thermostat();
      thermostat.up(15);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });
});