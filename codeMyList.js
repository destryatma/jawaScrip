function Daftar(){
  let textList = document.getElementsByTagName('input')[0].value;
  const tempatList = document.getElementsByTagName("a")[0];
  tempatList.insertAdjacentText("beforeend", textList);


//  const textNode = document.createTextNode(textList);
//  const barisLi = document.createElement('li');
  // barisLi.textContent = textList;
  // tempatList.insertAdjacentText('afterbegin', barisLi);
  
  
  
  }
