// (c) Enroute 2018
//
//     Prepared by AMG
//

// Another way to define an Object
const organPrototype = {
  condition: function() {
    return `Hello, I'm a ${this.isHealthy ? "healthy" : "sick"} ${
      this.organName
    } of the ${this.organSystem} system`;
  },
  getSick: function(disease) {
    this.disease = disease;
    this.isHealthy = false;
  },
  getCured: function() {
    this.disease = null;
    this.isHealthy = true;
  }
};

// Instanciate an Organ using Object
const liver = Object.create(organPrototype);
liver.organName = "liver";
liver.organSystem = "digestive";
liver.isHealthy = true;

// Create another organ
const heart = Object.create(organPrototype, {
  organName: { value: "heart" },
  organSystem: { value: "cardiovascular" },
  isHealthy: { value: true }
});
