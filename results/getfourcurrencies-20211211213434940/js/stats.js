var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "21",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "2130",
        "ok": "2130",
        "ko": "10029"
    },
    "maxResponseTime": {
        "total": "14912",
        "ok": "14912",
        "ko": "10059"
    },
    "meanResponseTime": {
        "total": "8942",
        "ok": "8468",
        "ko": "10046"
    },
    "standardDeviation": {
        "total": "2457",
        "ok": "2807",
        "ko": "9"
    },
    "percentiles1": {
        "total": "9535",
        "ok": "8288",
        "ko": "10046"
    },
    "percentiles2": {
        "total": "10047",
        "ok": "9561",
        "ko": "10047"
    },
    "percentiles3": {
        "total": "12104",
        "ok": "12323",
        "ko": "10059"
    },
    "percentiles4": {
        "total": "14161",
        "ok": "14394",
        "ko": "10059"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.765",
        "ok": "1.235",
        "ko": "0.529"
    }
},
contents: {
"req_usd--eur--rur---1a0e3": {
        type: "REQUEST",
        name: "USD, EUR, RUR, BTC",
path: "USD, EUR, RUR, BTC",
pathFormatted: "req_usd--eur--rur---1a0e3",
stats: {
    "name": "USD, EUR, RUR, BTC",
    "numberOfRequests": {
        "total": "30",
        "ok": "21",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "2130",
        "ok": "2130",
        "ko": "10029"
    },
    "maxResponseTime": {
        "total": "14912",
        "ok": "14912",
        "ko": "10059"
    },
    "meanResponseTime": {
        "total": "8942",
        "ok": "8468",
        "ko": "10046"
    },
    "standardDeviation": {
        "total": "2457",
        "ok": "2807",
        "ko": "9"
    },
    "percentiles1": {
        "total": "9535",
        "ok": "8288",
        "ko": "10046"
    },
    "percentiles2": {
        "total": "10047",
        "ok": "9561",
        "ko": "10047"
    },
    "percentiles3": {
        "total": "12104",
        "ok": "12323",
        "ko": "10059"
    },
    "percentiles4": {
        "total": "14161",
        "ok": "14394",
        "ko": "10059"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.765",
        "ok": "1.235",
        "ko": "0.529"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
