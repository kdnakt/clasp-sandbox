function callSetDND(token: string, hours: number, team: string) {
  const url = `https://slack.com/api/dnd.setSnooze`;
  const headers = {
    'Content-type': 'application/x-www-form-urlencoded'
  };
  const options = {
    'method' : 'post',
    'headers' : headers,
    'followRedirects' : false,
    'payload': {
      'token': token,
      'num_minutes': 60 * hours
    }
  };
  const response = UrlFetchApp.fetch(url, options).getContentText("UTF-8");
  console.log(team, response);
}