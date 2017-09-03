$(function() {
  $.get('/a', renderList)
  function renderList(fetchedeList) {
    var list = [];
    for(var i in fetchedeList)
      list.push($('<li>', {text: i}))
    $('.list').appendFrom(list)
  }

})
