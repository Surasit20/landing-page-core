window.addEventListener('resize', function () {
  if (window.innerWidth < 1400) {
    removeComponent();
    addFont();
  } else {
    addComponent();
    removeFont();
  }
});

const removeComponent = () => {
  var element1 = document.getElementById('component1');
  var element2 = document.getElementById('component2');
  var element3 = document.getElementById('component3');
  element1.classList.add('hidden-component');
  element2.classList.add('hidden-component');
  element3.classList.add('hidden-component');
};

const addComponent = () => {
  var element1 = document.getElementById('component1');
  var element2 = document.getElementById('component2');
  var element3 = document.getElementById('component3');
  element1.classList.remove('hidden-component');
  element2.classList.remove('hidden-component');
  element3.classList.remove('hidden-component');
};

const addFont = () => {
  var element1 = document.getElementById('text-context');
  element1.classList.add('content-text-header-2', 'text-center');
  element1.classList.remove('content-text-header-1');
};

const removeFont = () => {
  var element1 = document.getElementById('text-context');
  element1.classList.add('content-text-header-1');
  element1.classList.remove('content-text-header-2', 'text-center');
};
