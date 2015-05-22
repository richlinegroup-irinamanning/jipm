function toggleMenuPanel(visible, target) {
  // determine target position
  var targetTabPos = (visible == true ? "250px" : "0px");
  var targetMenuPos = (visible == true ? "0px" : "-250px");

  // animate in the menu to target position
  $('#menu-tab').animate({ right: targetTabPos }, 250, 'swing', function() {
    //$('#nav-menu-icon').toggle(!visible);
  });
  $('#menu-panel').animate({ right: targetMenuPos }, 250, 'swing', function() {
    //$('#nav-menu-icon').toggle(!visible);
  });
} 
$(function() {
  // open menu panel event
  $('#menu-tab').click(function(e) {
    if ($('#menu-tab').css('right') != '0px') {
      toggleMenuPanel(false);    
    } else {
      toggleMenuPanel(true);  
    }
    
  });
});