const SegsyoxafuDict = {
  a: "あ",
  ka: "か",
  kaw: "こ",
  kwai: "怪",
};

$(()=>{
  reflesh_list("");
  $("#input").keyup(()=>{
    reflesh_list($("#input").val());
  });
});

function reflesh_list(input_text){
  let filtered_list = {};
  let left_input = "";
  let right_input = "";
  if(input_text == ""){
    filtered_list = filter_list(SegsyoxafuDict, ".");
  }else{
    filtered_list = filter_list(SegsyoxafuDict, "^" + input_text + "$");
  }
  let list_text = "";
  for(let key in filtered_list){
    list_text += `<tr><td>${key}</td><td>${SegsyoxafuDict[key]}</td></tr>`;
  }
  $("#list").html(list_text);
}

function filter_list(list, regexp){
  let result = {};
  for(let key in list){
    if(key.match(regexp)){
      result[key] = list[key];
    }
  }
  return result;
}
