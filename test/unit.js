var expect = require('chai').expect;
var apiDef = require('../lib/get-api-def');

describe('Test function getApiDef', function() {
  var sampleAppJs = require('./fixtures/app.js');

  it('No format specified', function() {
    var value = apiDef.getApiDef(sampleAppJs, {});
    expect(value).to.contain('swagger: \'2.0\'');
  });

  it('Yaml format', function() {
    var value = apiDef.getApiDef(sampleAppJs, {format: 'yaml'});
    expect(value).to.contain('swagger: \'2.0\'');
    expect(value).to.not.contain('!<tag:yaml.org,2002:js/undefined> \'\'');
  });

  it('JSON format', function() {
    var value = apiDef.getApiDef(sampleAppJs, {format: 'JSON'});
    expect(value).to.contain('"swagger":"2.0"');
  });

});
