var fs = require('fs'),
  xml2js = require('xml2js');

console.log('start');
var parser = new xml2js.Parser();

fs.writeFile('items.ddl', '', () => { });

fs.readFile(__dirname + '/items.xml', function (err, data) {
  parser.parseString(data, function (err, result) {

    result.table.tbody[0].tr.forEach(item => {

      const itemName = item.td[1].a[0]._.trim();
      console.log(itemName);

      const iconPath = item.td[0].a[0].img[0].$.src;
      const quote = item.td[3].trim();
      const type = item.td[2].trim(); // Passive / Active
      const quality = item.td[4].a[0].img[0].$.alt.replace(' Quality Item.png', '').replace('1', '');
      const wikiPage = itemName.replace(/ /g, '_').replace(/'/g, '%27');

      const insertSQL = `INSERT INTO ${type.toLowerCase()}s (created_at, updated_at, name, icon_path, quote, quality, wiki_page, elo_rating) 
            VALUES (CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), "${itemName}", "${iconPath}", "${quote}", "${quality}", "${wikiPage}", 1200);

`;

      fs.appendFile('items.ddl', insertSQL, (err) => {
        if (err) console.log(err);
        console.log(`${itemName} written successfully`);
      });

    });

    console.log('Done');
  });
});