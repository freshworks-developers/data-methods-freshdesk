document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      client.events.on('app.activated', renderSidebar);
    })
    .catch(console.error);
}

function renderSidebar() {
  const dataMethBtn = document.querySelector('.btn-ticket-details');
  const space = document.querySelector('.space');
  dataMethBtn.addEventListener('fwClick', function getTktDetails() {
    /** ~ playground start of ticket details page ~ */
    /** ~  end ~ */
  });
}
