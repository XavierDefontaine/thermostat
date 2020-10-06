'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
     thermostat = new Thermostat();
  });

    it('starts at 20 degrees by default', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('temperature can be increased', function() {
      thermostat.up(5);
      expect(thermostat.temperature).toEqual(25)
    });

    it('temperature can be decreased', function() {
      thermostat.down(4);
      expect(thermostat.temperature).toEqual(16)
    });

    it('minimum temperature is 10 degrees', function() {
      thermostat.down(15);
      expect(thermostat.temperature).toEqual(10)
    });
//current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
    it('returns low-usage if temp is < 18', function() {
      thermostat.down(3);
      expect(thermostat.usage()).toEqual('low-usage')
    });
    it('returns medium-usage if temp is <= 25', function() {
      expect(thermostat.usage()).toEqual('medium-usage')
    });
    it('returns high-usage if temp is > 25', function() {
      thermostat.switchPowerSaving();
      thermostat.up(6);
      expect(thermostat.usage()).toEqual('high-usage')
    });

  describe('PowerSaving ON', function() {
    it('switchPowerSaving changes the power saving mode', function() {
      thermostat.switchPowerSaving();
      expect(thermostat.powerSaving).toBe(false)
    });

    it('max temperature is 25 degrees when power saving mode on', function() {
      thermostat.up(15);
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe('PowerSaving OFF', function() {
    it('max temperature is 32 degrees when power saving mode off', function() {
      
      thermostat.switchPowerSaving();
      thermostat.up(15);
      expect(thermostat.temperature).toEqual(32)
    });

    it('the reset function returns the temperature to 20', function() {
     
      thermostat.up(15);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });
  });
});
