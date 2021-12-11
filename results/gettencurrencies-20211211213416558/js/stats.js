var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "24",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "857",
        "ok": "857",
        "ko": "10036"
    },
    "maxResponseTime": {
        "total": "13570",
        "ok": "13570",
        "ko": "10048"
    },
    "meanResponseTime": {
        "total": "8046",
        "ok": "7548",
        "ko": "10041"
    },
    "standardDeviation": {
        "total": "3102",
        "ok": "3284",
        "ko": "4"
    },
    "percentiles1": {
        "total": "8478",
        "ok": "7478",
        "ko": "10040"
    },
    "percentiles2": {
        "total": "10039",
        "ok": "9535",
        "ko": "10044"
    },
    "percentiles3": {
        "total": "13236",
        "ok": "13308",
        "ko": "10047"
    },
    "percentiles4": {
        "total": "13504",
        "ok": "13518",
        "ko": "10048"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.875",
        "ok": "1.5",
        "ko": "0.375"
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
        "ok": "24",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "857",
        "ok": "857",
        "ko": "10036"
    },
    "maxResponseTime": {
        "total": "13570",
        "ok": "13570",
        "ko": "10048"
    },
    "meanResponseTime": {
        "total": "8046",
        "ok": "7548",
        "ko": "10041"
    },
    "standardDeviation": {
        "total": "3102",
        "ok": "3284",
        "ko": "4"
    },
    "percentiles1": {
        "total": "8478",
        "ok": "7478",
        "ko": "10040"
    },
    "percentiles2": {
        "total": "10039",
        "ok": "9535",
        "ko": "10044"
    },
    "percentiles3": {
        "total": "13236",
        "ok": "13308",
        "ko": "10047"
    },
    "percentiles4": {
        "total": "13504",
        "ok": "13518",
        "ko": "10048"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.875",
        "ok": "1.5",
        "ko": "0.375"
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
