$('#burgerSubmit').on('click', event => {
  // event.preventDefault()
  let newBurgerName = $('#burgerInput').val()
  let payload = {
    burgerName: newBurgerName
  }
  $.post('/api/burgers', payload)
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