class Thermostat {

  constructor() {
    this.temperature = 20
    this.powerSaving = true
    this.LOW_USAGE_TEMP = 17
    this.HIGH_USAGE_TEMP = 26
  }

  up(degrees) {
    if (this.powerSaving === true && this.temperature + degrees > 25) {
      this.temperature = 25
    } else if (this.powerSaving === false && this.temperature + degrees > 32) {
      this.temperature = 32
    } else {
      this.temperature += degrees
    }
  }

  down(degrees) {
    if (this.temperature - degrees < 10) {
      this.temperature = 10
    } else {
      this.temperature -= degrees
    }
  }

  switchPowerSaving() {
    this.powerSaving = !this.powerSaving
  }

  reset() {
    this.temperature = 20
  }

  usage() {
    if (this.temperature <= this.LOW_USAGE_TEMP) {
      return 'low-usage' 
    } else if (this.temperature >= this.HIGH_USAGE_TEMP) {
      return 'high-usage'
    } else {
      return 'medium-usage'
    }
  }


}

