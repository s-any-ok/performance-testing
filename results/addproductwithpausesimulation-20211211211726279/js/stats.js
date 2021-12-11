var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "3",
        "ko": "27"
    },
    "minResponseTime": {
        "total": "8049",
        "ok": "8049",
        "ko": "10026"
    },
    "maxResponseTime": {
        "total": "10100",
        "ok": "9548",
        "ko": "10100"
    },
    "meanResponseTime": {
        "total": "9915",
        "ok": "8759",
        "ko": "10043"
    },
    "standardDeviation": {
        "total": "432",
        "ok": "615",
        "ko": "13"
    },
    "percentiles1": {
        "total": "10042",
        "ok": "8679",
        "ko": "10042"
    },
    "percentiles2": {
        "total": "10043",
        "ok": "9114",
        "ko": "10044"
    },
    "percentiles3": {
        "total": "10056",
        "ok": "9461",
        "ko": "10056"
    },
    "percentiles4": {
        "total": "10088",
        "ok": "9531",
        "ko": "10089"
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
    "count": 3,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 27,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "0.2",
        "ko": "1.8"
    }
},
contents: {
"req_add-product-req-c0289": {
        type: "REQUEST",
        name: "Add product request",
path: "Add product request",
pathFormatted: "req_add-product-req-c0289",
stats: {
    "name": "Add product request",
    "numberOfRequests": {
        "total": "30",
        "ok": "3",
        "ko": "27"
    },
    "minResponseTime": {
        "total": "8049",
        "ok": "8049",
        "ko": "10026"
    },
    "maxResponseTime": {
        "total": "10100",
        "ok": "9548",
        "ko": "10100"
    },
    "meanResponseTime": {
        "total": "9915",
        "ok": "8759",
        "ko": "10043"
    },
    "standardDeviation": {
        "total": "432",
        "ok": "615",
        "ko": "13"
    },
    "percentiles1": {
        "total": "10042",
        "ok": "8679",
        "ko": "10042"
    },
    "percentiles2": {
        "total": "10043",
        "ok": "9114",
        "ko": "10044"
    },
    "percentiles3": {
        "total": "10056",
        "ok": "9461",
        "ko": "10056"
    },
    "percentiles4": {
        "total": "10088",
        "ok": "9531",
        "ko": "10089"
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
    "count": 3,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 27,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "0.2",
        "ko": "1.8"
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
