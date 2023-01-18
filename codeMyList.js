let i = 0
function daftar(){
  const textList = document.getElementsByTagName('input')[0].value;
  const tempatList = document.getElementsByTagName("a")[0];
  const barisLi = document.createElement('li');
  const listIng = document.createTextNode(textList);
  const deleteBtn = document.createElement('span');
  const killBtn = document.createAttribute("onclick");
  const killClass= document.createAttribute("class");
 
  barisLi.appendChild(listIng);
  tempatList.appendChild(barisLi);

  // barisLi.innerText = textList;
  // tempatList.insertAdjacentElement("afterend", barisLi);
  
  
  killBtn.value = 'deleteX()';
  deleteBtn.innerText = 'X';
  killClass.value = 'button';
  
  barisLi.insertAdjacentElement("beforeend",deleteBtn);
  deleteBtn.setAttributeNode(killClass);
  deleteBtn.setAttributeNode(killBtn);
}

function deleteX() {
  let nmrList = document.getElementsByTagName("li");
  nmrList.remove
}