document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      client.events.on('app.activated', renderUI);
    })
    .catch(console.error);
}

function renderUI() {
  const dataMethBtn = document.querySelector('.btn-contact-details');
  dataMethBtn.addEventListener('fwClick', function getTktDetails() {
    /** ~ playground start of ticket details page ~ */
    /** ~  end ~ */
  });
}
