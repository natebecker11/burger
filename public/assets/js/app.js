$('#burgerSubmit').on('click', event => {
  event.preventDefault()
  let newBurgerName = $('#burgerInput').val()
  $.post('/api/burgers', newBurgerName)
})