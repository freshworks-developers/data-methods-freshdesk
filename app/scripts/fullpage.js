document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      client.events.on('app.activated', renderFullpage);
    })
    .catch(console.error);
}


function renderFullpage() {
  const dataMethBtn = document.querySelector('.btn-global-sidebar');
  dataMethBtn.addEventListener('fwClick', function getTktDetails() {
  /** ~ playground start of ticket details page ~ */

    /** ~  end ~ */
  });
}
