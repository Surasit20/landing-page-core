window.addEventListener('resize', function () {
  if (window.innerWidth < 1400) {
    removeComponent();
    addFont();
    addBackGround();
  } else {
    addComponent();
    removeFont();
    removeBackGround();
  }
});

const removeComponent = () => {
  var element1 = document.getElementById('component1');
  var element2 = document.getElementById('component2');
  var element3 = document.getElementById('component3');
  var element4 = document.getElementById('component4');
  var element5 = document.getElementById('component5');
  element1.classList.add('hidden-component');
  element2.classList.add('hidden-component');
  element3.classList.add('hidden-component');
  element4.classList.add('hidden-component');
  element5.classList.add('hidden-component');
};

const addComponent = () => {
  var element1 = document.getElementById('component1');
  var element2 = document.getElementById('component2');
  var element3 = document.getElementById('component3');
  var element4 = document.getElementById('component4');
  var element5 = document.getElementById('component5');
  element1.classList.remove('hidden-component');
  element2.classList.remove('hidden-component');
  element3.classList.remove('hidden-component');
  element4.classList.remove('hidden-component');
  element5.classList.remove('hidden-component');
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

const addBackGround = () => {
  document.getElementById('bgId').src = './images/part-3-mobile/bg3-mobile.png';
  var element1 = document.getElementById('bgId');
  var element2 = document.getElementById('part3mobile');
  element1.classList.add('content-bg-img-2');
  element1.classList.remove('content-bg-img-1');
  element2.classList.add('position-mobile');
  element2.classList.remove('top-50');
};

const removeBackGround = () => {
  document.getElementById('bgId').src = './images/part-3/bg3.png';
  var element1 = document.getElementById('bgId');
  var element2 = document.getElementById('part3mobile');
  element1.classList.add('content-bg-img-1');
  element1.classList.remove('content-bg-img-2');
  element2.classList.add('top-50');
  element2.classList.remove('position-mobile');
};
