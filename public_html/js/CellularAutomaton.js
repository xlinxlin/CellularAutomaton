/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function drawTable(edge,n) {
  var ss = "";
  ss = ss+"<table id='cell_table' name='cell_table' border='1' height='" + edge + "' width='" + edge + "'>";
  for (var i = 0; i < n; i++) {
    ss = ss+"<tr>";
    for (var j = 0; j < n; j++) {
      ss = ss +"<td width='1' height='1' style='background-color:rgb(255, 255, 255)' onclick='setLive(this)'>";
      ss = ss+"</td>";
    }
    ss = ss+"</tr>";
  }
  ss = ss+"</table>";
  ss = ss +"<button type='button' class='btn btn-primary' onclick='run()'>run</button>";
  $('#cell_div').html(ss);
}

function setLive(obj){
  $(obj).css("background-color","rgb(255, 0, 0)");
}

function run(){
  setInterval(setLiveOrDie, 1000);
}

function setLiveOrDie(){
  $('#cell_table > tbody > tr > td').each(function() {
    var col = $(this).index();
    var row = $(this).closest('tr').index();
    
    if(($(this).css("background-color")==="rgb(255, 0, 0)"&&count(row+1,col+1) > 1&&count(row+1,col+1) < 4) || ($(this).css("background-color")==="rgb(255, 255, 255)"&&count(row+1,col+1) === 3)){
      $('#cell_table tr:nth-child('+(row+1)+') td:nth-child('+(col+1)+')').attr('class','live');
    } else {
      $('#cell_table tr:nth-child('+(row+1)+') td:nth-child('+(col+1)+')').attr('class','dead');
    }    
  });
  
  $('#cell_table > tbody > tr > td').each(function() {
    if($(this).attr('class')==='live'){
      $(this).css('background-color','rgb(255, 0, 0)');
    }else {
      $(this).css('background-color','rgb(255, 255, 255)'); 
    }
  });
}

function count(i,j){
  var c = 0;
  if($('#cell_table tr:nth-child('+(i-1)+') td:nth-child('+(j-1)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  if($('#cell_table tr:nth-child('+(i-1)+') td:nth-child('+(j)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  if($('#cell_table tr:nth-child('+(i-1)+') td:nth-child('+(j+1)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  if($('#cell_table tr:nth-child('+(i)+') td:nth-child('+(j-1)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  if($('#cell_table tr:nth-child('+(i)+') td:nth-child('+(j+1)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  if($('#cell_table tr:nth-child('+(i+1)+') td:nth-child('+(j-1)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  if($('#cell_table tr:nth-child('+(i+1)+') td:nth-child('+(j)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  if($('#cell_table tr:nth-child('+(i+1)+') td:nth-child('+(j+1)+')').css('background-color')==='rgb(255, 0, 0)'){
    c=c+1;
  }
  return c;
}

