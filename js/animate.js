// animate is a little helper library I came up to help with the transitions
var animate = {}

animate.Transition = function(duration, action) {
  this.duration = duration;
  this.action = action;
};

animate.Segue = function(duration, buildIn, buildOut) {
  this.duration = duration;
  this.buildIn = buildIn;
  this.buildOut = buildOut;
};

animate.Animation = function(segues) {
  this.segues = segues;
};

animate.Animation.prototype.start = function() {
  var delay = 0;
  for (var i = 0; i < this.segues.length; i++) {
    var s = this.segues[i];
    setTimeout(s.buildIn.action, delay);
    delay += s.buildIn.duration + s.duration;
    setTimeout(s.buildOut.action, delay);
    delay += s.buildOut.duration;
  }
};
