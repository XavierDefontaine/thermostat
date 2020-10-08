class Thermostat

attr_reader :temperature

  def initialize()
    @temperature = 21
  end

  def self.instance
    @thermostat ||= self.new
  end

end