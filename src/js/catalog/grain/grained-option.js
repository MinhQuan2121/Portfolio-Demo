document.addEventListener('DOMContentLoaded', () => {
  // Options for the grain effect
  var options = {
    animate: true,
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.08,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1,
  };

  // Initialize Grained with the container ID and options
  grained('#header', options);
  grained('#service', options);
});
