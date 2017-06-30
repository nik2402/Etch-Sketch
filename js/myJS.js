gridSize = 16;
defaultColor = 'black'; //default color
colorArray = ['violet','blue','indigo','green','yellow','red'];
rainbowPenSelected = 0;

$(document).ready(function(){
  produceGridArray(gridSize);

  // change the grid size when the 'Change Grid' button is clicked
  $('#changeGrid').on('click',gridChange);

  // toggle the grid on 'Toggle Grid' button click
  $('#toggleGrid').on('click',gridToggle);

  // hover the mouse over divs
  $('.grid-container').on('mouseenter','div',divHighlight);

  // rainbow pen clicked
  $('#rainbowPen').on('click',function(){
    rainbowPenSelected = 1;
  });

  // Select the default pen color from the color picker based on user selection and make it default
  $('#pen').on('click',function(){
    defaultColor = 'black';
    rainbowPenSelected =0;
  })

  //clear on button click
  $('#clear').on('click',gridClear);
});

// clearing is done by recreating the grid
function gridClear(){
  produceGridArray(gridSize);
}

// highlight the DIV that the mouse entered upon
function divHighlight(){

  // if rainbowPenSelected is true then choose the color from color Array, else use the defaultColor
  if(rainbowPenSelected)
  {
    $(this).css({'background-color':colorArray[(Math.floor(Math.random()*7))]});
  }
  else{
    $(this).css({'background-color':defaultColor});
  }

}

// change the grid size, by taking input from user
function gridChange(){
  gridSize = prompt('New Grid Size ???');
  // update the grid
  produceGridArray(parseInt(gridSize));
}

// show or unshow the borders of grid
function gridToggle(){
  // check if the inner-div class already exist
  if($('.grid-container').find('div').hasClass('inner-div'))
  {
    $('.grid-container').find('div').removeClass('inner-div')
  }
  else {
    $('.grid-container').find('div').addClass('inner-div')
  }
}

// first clear all the children under the grid-container node and then add new elements under it
function produceGridArray(gridSize){
  console.log(gridSize);
  var widthDiv = 480/gridSize;
  var heightDiv = 480/gridSize;
  $('.grid-container').empty();
  for(var i=0;i<gridSize*gridSize;i++){
    $('.grid-container').append("<div></div>");
    //$('.grid-container').find("div").css({'width':+widthDiv,'height':+heightDiv,'float':'left'});
  }
  $('.grid-container').find("div").css({'width':+widthDiv,'height':+heightDiv,'float':'left'});
}
