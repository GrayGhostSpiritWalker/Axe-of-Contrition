import yaml from 'https://cdn.jsdelivr.net/npm/yaml@2.8.1/+esm'

fetch ( 'years.yaml' )
  .then ( response => response.text () )
  .then ( text => yaml.parse ( text ) )
  .then ( years = {
    for ( const year of Object.entries ( years ) ) {
      // generate years list
      // ...
      // fetch and display most recent year ( current month )
    }
    fetch ( 'tags.yaml' )
      .then ( response => response.text () )
      .then ( text => yaml.parse ( text ) )
      .then ( tags = {
        // generate search options ( to find other articles )
      } )
  } )
