window.EagerUploadcare = {
  init: function(options) {
    if (!options || !options.publicKey) {
      return;
    }

    var loadScript = function() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://ucarecdn.com/widget/2.5.1/uploadcare/uploadcare.full.min.js';
      script.charset = 'utf-8';
      document.body.appendChild(script);
    };

    var container = Eager.createElement(options.container);
    var element = document.createElement('div');
    element.innerHTML = '<input type="hidden" role="uploadcare-uploader" ' +
        'data-public-key="' + options.publicKey + '"/>';
    container.appendChild(element);

    loadScript();
  }
};