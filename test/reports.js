var expect = require('chai').expect;
var assert = require('assert');
var hackerone = require('../index');
var Hackerone = new hackerone('api_example_company', 'Ke+2jinhe5jM87P95aAVOz7L3ZWrtSiERtyOkkh5tEQ=');

describe('Reports', function () {

    describe('Read a report', function () {
        it('respond with a report object', function (done) {
            Hackerone.reports.read(129329, function (err, res) {
                assert.equal(res.data.id, 129329);
                done();
            });
        });
    });

    describe('Query reports', function () {
        it('respond with paginated report objects', function (done) {
            Hackerone.reports.query({
                program: 'john_doe_example_company'
            }, function (err, res) {
                assert.equal(err, null);
                done();
            });
        });
    });

    describe('Reports ► Comments', function () {
        describe('Post a public comment', function () {
            it('respond without any error', function (done) {
                var _this = this;
                Hackerone.reports.comments.create(129329, {
                    message: 'A fix has been deployed. Can you retest, please?',
                    internal: false
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(err, null);
                    }
                    done();
                });
            });
        });

        describe('lock a report', function () {
            it('respond without any error', function (done) {
                var _this = this;
                Hackerone.reports.comments.close(129329, {
                    id: 129329
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(err, null);
                    }
                    done();
                });
            });
        });
    });

    describe('Reports ► Assignee', function () {
        describe('Assign a user', function () {
            it('respond with the updated report object', function (done) {
                var _this = this;
                Hackerone.reports.assignee.update(129329, {
                    id: 1337,
                    type: 'user',
                    message: '@member Please check this out!'
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(err, null);
                    }
                    done();
                });

            });
        });
    });

    describe('Reports ► State Changes', function () {
        describe('Mark a report as resolved', function () {
            it('respond without any error', function (done) {
                var _this = this;
                Hackerone.reports.state.create(129329, {
                    message: 'This vulnerability has been resolved. Thanks!',
                    state: 'resolved'
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(err, null);
                    }
                    done();
                });

            });
        });
    });

    describe('Reports ► Title', function () {
        describe('Update the title of a report', function () {
            it('respond without any error', function (done) {
                var _this = this;
                Hackerone.reports.title.update(129329, {
                    title: 'Report Title Updated!'
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(err, null);
                    }
                    done();
                });

            });
        });
    });

    describe('Reports ► Issue Tracker Reference IDs', function () {
        describe('Add a reference to a report', function () {
            it('respond without any error', function (done) {
                var _this = this;
                Hackerone.reports.issue.create(129329, {
                    reference: 'T7413'
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(err, null);
                    }
                    done();
                });

            });
        });
    });

    describe('Reports ► Summaries', function () {
        describe('The created report summary', function () {
            it('respond without any error', function (done) {
                var _this = this;
                Hackerone.reports.summaries.create(129329, {
                    content: 'There was a cross-site scripting vulnerability in our login form.'
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(err, null);
                    }
                    done();
                });

            });
        });
    });


});
