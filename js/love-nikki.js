$(function() {

  var columns = [
    {"data": "Item Type", "title": "Type"},
    {"data": "Item Name", "title": "Name"},
    {"data": "Rarity", "title": "Rarity"},
    {"data": "Gorgeous", "title": "Gorgeous"},
    {"data": "Elegant", "title": "Elegant"},
    {"data": "Simple", "title": "Simple"},
    {"data": "Lively", "title": "Lively"},
    {"data": "Mature", "title": "Mature"},
    {"data": "Cute", "title": "Cute"},
    {"data": "Sexy", "title": "Sexy"},
    {"data": "Pure", "title": "Pure"},
    {"data": "Cool", "title": "Cool"},
    {"data": "Warm", "title": "Warm"},
    {"data": "Tags", "title": "Tags"}
  ]

  var setup = function() {
    Tabletop.init( { key: '1AjZyyqItfPIpzFLj7E76Rl2EqFNBQqPnqZCCAKJVFA4',
                     callback: create_table,
                     simpleSheet: true } )
  }

  var create_table = function(data, tabletop) {
    console.log('Successfully processed!')
    console.log(data)

    $('#the-table').DataTable( {
      'data': data,
      'columns': columns,
      'pageLength': 25
    } )

  }

  setup()
  
})
