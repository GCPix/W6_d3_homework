const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation)
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => journey.transport)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport===transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance>=minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => totalDistance+journey.distance,0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // const all_transport = this.getModesOfTransport();
  //   const uniqueTransport = all_transport.filter(function(transport, index) {
  //     return all_transport.indexOf(transport) === index;
  //   });
  //   return uniqueTransport;

  return this.getModesOfTransport().filter((transport, index) => {return this.getModesOfTransport().indexOf(transport) === index});
};


module.exports = Traveller;
