let daftarObjek = [];
let output, panjangList, i;

function inputBtn() {   
  let objekInput = document.getElementsByTagName("input")[0].value;
  if ( objekInput != 0 ) {
    daftarObjek.push(objekInput);
    panjangList = daftarObjek.length;
    output = "<a>";
    for (i = 0; i < panjangList; i++) {                
      output += '<span class="daftarList">' + [i+1] + '. ' + daftarObjek[i] + '<span class="delList" onclick="delBtn(' + [i] +')">' + 'delete' + '</span>' + '</span>';
    };  
    output += "</a>";
    document.getElementById("this").innerHTML = output;
  } else {
    alert("Please input your list (:" )
  }
}   

function delBtn(i){
  daftarObjek.splice(i,1);
  panjangList = daftarObjek.length;
  output = "<a>";
  for (i = 0; i < panjangList; i++) {                
    output += '<span class="daftarList">' + [i+1] + '. ' + daftarObjek[i] + '<span class="delList" onclick="delBtn(' + [i] +')">' + 'delete' + '</span>' + '</span>';
  };
  output += "</a>";
  document.getElementById("this").innerHTML = output;
}