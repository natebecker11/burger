$('#burgerSubmit').on('click', event => {
  event.preventDefault()
  let newBurgerName = $('#burgerInput').val().trim()
  let payload = {
    burgerName: newBurgerName
  }
  if (!newBurgerName || newBurgerName.length >= 50) {
    $('.form-alert').removeClass('invis')
    $('#burgerInput').val('')
  } else {
    $.post('/api/burgers', payload)
  }
})

$('#burgerInput').on('click', event => {
  $('.form-alert').addClass('invis')
})

$('.devourBtn').on('click', event => {
  // event.preventDefault()
  let id = $(event.target).attr('data-id')
  let payload = {
    id: id,
    devoured: 1
  }
  $.ajax({
    url: '/api/burgers',
    data: payload,
    method: 'PUT',
    complete: () => location.reload()
  })
})

// Listener to show/hide burger content areas on button click
$('#burgerButtons button').on('click', (event) => {
  event.preventDefault()
  let shownDiv = `#${$(event.target).attr('data-id')}Div`
  $('.burger-content').css('display', 'none')
  $(shownDiv).css('display', 'block')
  $('#burgerButtons button').removeClass('active')
  $(event.target).addClass('active')
})