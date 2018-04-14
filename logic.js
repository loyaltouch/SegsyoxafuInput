const SegsyoxafuDict = {
  a: "あ",
  ka: "か",
  kaw: "こ",
  kwai: "怪",
};

$(()=>{
  setup_input("");
  $("#input").keyup(()=>{
    const input_tail = $("#input").val().match("[a-z]+$");
    if(input_tail){
      setup_input(input_tail);
    }else{
      setup_input("");
    }
  });
});

function setup_input(filter_text){
  let list_text = "";
  let list_count = 0;
  let last_item = "";
  for(let key in SegsyoxafuDict){
    if(filter_text == "" || key.match("^" + filter_text)){
      list_text += `<tr><td>${key}</td><td>${SegsyoxafuDict[key]}</td></tr>`;
      last_item = SegsyoxafuDict[key];
      list_count++;
      if(list_count > 10){
        break;
      }
    }
  }
  $("#list").html(list_text);
  if(list_count == 1){
    $("#input").val(last_item);
  }
}
