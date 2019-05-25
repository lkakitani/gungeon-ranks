var fs = require('fs'),
  xml2js = require('xml2js');

console.log('start');
var parser = new xml2js.Parser();

fs.writeFile('guns.ddl', '', () => { });

fs.readFile(__dirname + '/guns.xml', function (err, data) {
  parser.parseString(data, function (err, result) {
    // console.dir(result);

    console.log(result.table.tbody[0].tr[95]);

    result.table.tbody[0].tr.forEach(gun => {
      // console.log(gun);

      const gunName = gun.td[1].a[0]._.trim();
      console.log(gunName);

      const iconPath = gun.td[0].a[0].img[0].$.src;
      const quote = gun.td[2].trim();
      const quality = gun.td[3].a[0].img[0].$.alt.replace(' Quality Item.png', '').replace('1', '');
      const wikiPage = gunName.replace(/ /g, '_').replace(/'/g, '%27');

      const insertSQL = `INSERT INTO guns (created_at, updated_at, name, icon_path, quote, quality, wiki_page, boss_rating, room_rating) 
      VALUES (CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), "${gunName}", "${iconPath}", "${quote}", "${quality}", "${wikiPage}", 1200, 1200);

`;

      fs.appendFile('guns.ddl', insertSQL, (err) => {
        if (err) console.log(err);
        console.log(`${gunName} written successfully`);
      });


      console.log('\n');
    });

    console.log('Done');
  });
});