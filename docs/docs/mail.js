  const scriptURL = 'https://script.google.com/macros/s/AKfycbycIZPyakvukYR2oR8mbUuI57QfZn8X5c-Xtz5f1AiZNN7ZyFnMTvli58sjGkJ76GhcQw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
                msg.innerHTML = "Thanks for connecting...😁"
                setTimeout(function(){
                        msg.innerHTML = ""
                },5000)
                form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
