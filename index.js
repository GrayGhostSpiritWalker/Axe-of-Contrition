import yaml from 'https://cdn.jsdelivr.net/npm/yaml@2.8.1/+esm'

fetch ( 'tags.yaml' )
  .then ( response => response.text () )
  .then ( text => yaml.parse ( text ) )
  .then ( tags = {
    
  } )
