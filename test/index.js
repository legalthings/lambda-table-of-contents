"use strict";

const LambdaTester = require( 'lambda-tester' );
const tocHandler = require( '../index' ).handler;
const testEvent = require('../event.json');
const expected = require('./result.json');
const expectedSkip = require('./result-skip.json');
const expectedHeader = require('./result-header.json');
const expect = require('chai').expect;

describe( 'handler', () => {

  it( 'should return html with added toc', () => {

    return LambdaTester( tocHandler )
      .event( testEvent )
      .expectResult((res) => {

        expect(res).to.equal(expected);
      });
  });

  it( 'should return html with added toc skipping the title page', () => {

    const event = Object.assign({}, testEvent);
    event.options = {
      skipHeader: 2
    };

    return LambdaTester( tocHandler )
      .event( event )
      .expectResult((res) => {

        expect(res).to.equal(expectedSkip);
      });
  });

  it( 'should return html with added toc header', () => {

    const event = Object.assign({}, testEvent);
    event.options = {
      tocHeader: 'Table of Contents'
    };

    return LambdaTester( tocHandler )
      .event( event )
      .expectResult((res) => {

        expect(res).to.equal(expectedHeader);
      });
  });
});