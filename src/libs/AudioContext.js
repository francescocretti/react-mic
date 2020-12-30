const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let analyser;

const AudioContext = {

  initAnalyzer() {
    analyser = audioCtx.createAnalyser();
    return analyser;
  },

  getAudioContext() {
    return audioCtx;
  },

  getAnalyser() {
    return analyser;
  },

  resetAnalyser() {
    analyser = audioCtx.createAnalyser();
  },

  decodeAudioData() {
    audioCtx.decodeAudioData(audioData).then(function(decodedData) {
      // use the decoded data here
    });
  }

}

export default AudioContext;
