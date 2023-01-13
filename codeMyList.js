let i = 0
function daftar(){
  const textList = document.getElementsByTagName('input')[0].value;
  const tempatList = document.getElementsByTagName("a")[0];
  const barisLi = document.createElement('li');
  const deleteBtn = document.createElement('button');
  const killBtn = document.createAttribute("onclick");
  

  killBtn.value = 'deleteX()';
  deleteBtn.innerText = 'X';
  barisLi.innerText = textList;

  
  tempatList.insertAdjacentElement("afterend", barisLi);
  barisLi.insertAdjacentElement("beforeend",deleteBtn);
  deleteBtn.setAttributeNode(killBtn);
}

function deleteX() {
  let nmrList = document.getElementsByTagName("li");
  nmrList.remove
}