const reporter = require ('k6-html-reporter');

const options = {
    jsonFile: 'G:/K6/summary.json',
    output: 'G:/K6/report',
};

reporter.generateSummaryReport(options);