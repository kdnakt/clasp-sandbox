function main() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const props = PropertiesService.getScriptProperties();
  let sheetName = props.getProperty('SHEET_NAME');
  if (!sheetName) {
    sheetName = 'Sheet1';
  }
  const sheet = spreadsheet.getSheetByName(sheetName);

  const dndHours = parseInt(props.getProperty('DND_HOURS'));
  const lastRow = sheet.getLastRow();
  const values = sheet.getSheetValues(1, 1, lastRow, 1);
  for (let i in values) {
    const oauthToken = values[i][0];
    callSetDND(oauthToken, dndHours);
  }
}
