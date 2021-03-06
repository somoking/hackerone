/*!
 * hackerone.reports.issue.create (https://github.com/xc0d3rz/hackerone)
 * Copyright 2016-2017 xc0d3rz(x.c0d3rz000@gmail.com)
 * Licensed under the MIT license
 */

/**
 *
 * @param id
 * @param param
 * @param callback
 */
module.exports = function (id, param, callback) {
    this.post('reports/' + id + '/issue_tracker_reference_id', {
        data: {
            type: 'issue-tracker-reference-id',
            attributes: {
                reference: param.reference,
                message: param.message || ''
            }
        }
    }, callback);
};