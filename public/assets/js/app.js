$('#burgerSubmit').on('click', event => {
  // event.preventDefault()
  let newBurgerName = $('#burgerInput').val()
  let payload = {
    burgerName: newBurgerName
  }
  $.post('/api/burgers', payload)
})