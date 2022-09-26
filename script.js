//size screnn for change
window.addEventListener('resize', function () {
  if (window.innerWidth < 1400) {
    removeComponent();
    addFont();
    if (window.innerWidth < 768) {
      addBackGround();
    }
    if (window.innerWidth < 1018) {
      addContentFPPT();
      console.log('test1');
    }
  } else {
    addComponent();
    removeFont();

    if (window.innerWidth > 768) {
      removeBackGround();
    }
    if (window.innerWidth > 1018) {
      removeContentFPPT();
    }
  }
});

const removeComponent = () => {
  //logic remove image component
  let element = document.getElementsByClassName('component');
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add('hidden-component');
  }
};

const addComponent = () => {
  //logic add image component
  let element = document.getElementsByClassName('component');
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove('hidden-component');
  }
};

const addFont = () => {
  //logic text
  let element1 = document.getElementById('text-context');
  element1.classList.add('content-text-header-2', 'text-center');
  element1.classList.remove('content-text-header-1');

  //remove  bracket
  let bracket = document.getElementsByClassName('bracket');
  for (let i = 0; i < bracket.length; i++) {
    bracket[i].innerHTML = '';
  }
};

const removeFont = () => {
  //logic text
  let element1 = document.getElementById('text-context');
  element1.classList.add('content-text-header-1');
  element1.classList.remove('content-text-header-2', 'text-center');
  let bracket = document.getElementsByClassName('bracket');

  //add bracket
  bracket[0].innerHTML = '{';
  bracket[1].innerHTML = '}';
};

const addBackGround = () => {
  //logic change background
  document.getElementById('bgId').src = './images/part-3-mobile/bg3-mobile.png';
  let element1 = document.getElementById('bgId');
  let element2 = document.getElementById('part3mobile');
  element1.classList.add('content-bg-img-2');
  element1.classList.remove('content-bg-img-1');
  element2.classList.add('position-mobile');
  element2.classList.remove('top-50', 'mt-5', 'pt-5');
};

const removeBackGround = () => {
  //logic change background
  document.getElementById('bgId').src = './images/part-3/bg3.png';
  let element1 = document.getElementById('bgId');
  let element2 = document.getElementById('part3mobile');
  element1.classList.add('content-bg-img-1');
  element1.classList.remove('content-bg-img-2');
  element2.classList.add('top-50', 'mt-5', 'pt-5');
  element2.classList.remove('position-mobile');
};

const addContentFPPT = () => {
  let element1 = document.getElementById('text-context-fppt-wide');
  let element2 = document.getElementById('text-context-fppt-mobile');
  let element3 = document.getElementById('text-context-abbc-mobile');
  element1.innerHTML = '';
  element3.classList.add('text-center', 'fs-6');
  element2.classList.add('text-center', 'fs-6');
  element3.innerHTML =
    'ด้วยการนำ<br>   <b style="color:rgba(15, 26, 92, 1); font-family: Anantason-Medium; font-size: 1rem;">เทคโนโลยี ABBC (เอดับเบิ้ลบีซี)</b><br>เข้ามาบริหารจัดการธุรกิจให้เกิดการ Sharing Economic บน Eco system<br>ของตนเอง เพื่อสร้างสังคมแห่งการแบ่งปัน<br>พร้อมทั้งต่อยอดธุรกิจในหลากหลายแพลตฟอร์ม ยกระดับธุรกิจให้เติบโต<br>และสร้างรากฐานที่มั่นคง เตรียมศักยภาพความพร้อมในการแข่งขัน<br>ที่เพิ่มขึ้นในอนาคต';
  element2.innerHTML =
    ' คอร์ แอสเซท มุ่งเน้นบริหารจัดการดิจิตอลแอสเซท<br>   <b style="color:rgba(15, 26, 92, 1); font-family: Anantason-Medium; font-size: 1rem;">สร้างระบบด้วยแนวคิด FPPT (เอฟ ดับเบิ้ลพี ที)</b><br>เพื่อจัดการบริหารธุรกิจและส่งเสริมการสร้างผลิตภัณฑ์<br>ในเครือของบริษัทคอร์ แอสเซท';
  element2.classList.add('text-center');
};

const removeContentFPPT = () => {
  let element1 = document.getElementById('text-context-fppt-wide');
  let element2 = document.getElementById('text-context-fppt-mobile');
  let element3 = document.getElementById('text-context-abbc-mobile');
  element3.classList.remove('text-center', 'fs-6');
  element2.classList.remove('text-center', 'fs-6');
  element3.classList.remove('text-center');
  element2.innerHTML = '';
  element1.innerHTML =
    ' คอร์ แอสเซท มุ่งเน้นบริหารจัดการดิจิตอลแอสเซท<br>   <b style="color:rgba(15, 26, 92, 1); font-family: Anantason-Medium; font-size: 1.5rem;">สร้างระบบด้วยแนวคิด FPPT (เอฟ ดับเบิ้ลพี ที)</b><br>เพื่อจัดการบริหารธุรกิจและส่งเสริมการสร้างผลิตภัณฑ์<br>ในเครือของบริษัทคอร์ แอสเซท';
};
/*
const addFlexContent = () => {
  let element1 = document.getElementById('flex-content');
  element1.classList.add('flex-column-reverse');
};
*/
