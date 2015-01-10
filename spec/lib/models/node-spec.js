// Copyright 2014, Renasar Technologies Inc.
/* jshint node: true */

'use strict';

var base = require('./base-spec');

describe('Node Model', function () {
    base.before(function (waterline, context) {
        context.model = waterline.nodes;
        context.attributes = context.model._attributes;
    });

    base.after();

    describe('Base', function () {
        base.examples();
    });

    describe('Attributes', function () {
        describe('profile', function () {
            beforeEach(function () {
                this.subject = this.attributes.profile;
            });

            it('should be a string', function () {
                expect(this.subject.type).to.equal('string');
            });

            it('should be required', function () {
                expect(this.subject.required).to.equal(true);
            });

            it('should default to diskboot.ipxe', function () {
                expect(this.subject.defaultsTo).to.equal('diskboot.ipxe');
            });
        });

        describe('name', function () {
            beforeEach(function () {
                this.subject = this.attributes.name;
            });

            it('should be a string', function () {
                expect(this.subject.type).to.equal('string');
            });

            it('should be required', function () {
                expect(this.subject.required).to.equal(true);
            });
        });

        describe('obmSettings', function () {
            beforeEach(function () {
                this.subject = this.attributes.obmSettings;
            });

            it('should be json', function () {
                expect(this.subject.type).to.equal('json');
                expect(this.subject.json).to.equal(true);
            });

            it('should not be required', function () {
                expect(this.subject.required).to.equal(false);
            });
        });

        describe('ipAddresses', function () {
            beforeEach(function () {
                this.subject = this.attributes.ipAddresses;
            });

            it('should be json', function () {
                expect(this.subject.type).to.equal('json');
                expect(this.subject.json).to.equal(true);
            });

            it('should not be required', function () {
                expect(this.subject.required).to.equal(false);
            });
        });

        describe('catalogs', function () {
            beforeEach(function () {
                this.subject = this.attributes.catalogs;
            });

            it('should be a relation to catalogs via node', function () {
                expect(this.subject.collection).to.equal('catalogs');
                expect(this.subject.via).to.equal('node');
            });
        });

        describe('sku', function () {
            beforeEach(function () {
                this.subject = this.attributes.sku;
            });

            it('should be a string', function () {
                expect(this.subject.type).to.equal('string');
            });

            it('should be required', function () {
                expect(this.subject.required).to.equal(true);
            });

            it('should default to unknown', function () {
                expect(this.subject.defaultsTo).to.equal('unknown');
            });
        });
    });
});