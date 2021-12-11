var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "28",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "671",
        "ok": "671",
        "ko": "8184"
    },
    "maxResponseTime": {
        "total": "10594",
        "ok": "10594",
        "ko": "9180"
    },
    "meanResponseTime": {
        "total": "5504",
        "ok": "5277",
        "ko": "8682"
    },
    "standardDeviation": {
        "total": "3163",
        "ok": "3151",
        "ko": "498"
    },
    "percentiles1": {
        "total": "5313",
        "ok": "5143",
        "ko": "8682"
    },
    "percentiles2": {
        "total": "8018",
        "ok": "7434",
        "ko": "8931"
    },
    "percentiles3": {
        "total": "10423",
        "ok": "10448",
        "ko": "9130"
    },
    "percentiles4": {
        "total": "10577",
        "ok": "10578",
        "ko": "9170"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1.867",
        "ko": "0.133"
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
        "ok": "28",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "671",
        "ok": "671",
        "ko": "8184"
    },
    "maxResponseTime": {
        "total": "10594",
        "ok": "10594",
        "ko": "9180"
    },
    "meanResponseTime": {
        "total": "5504",
        "ok": "5277",
        "ko": "8682"
    },
    "standardDeviation": {
        "total": "3163",
        "ok": "3151",
        "ko": "498"
    },
    "percentiles1": {
        "total": "5313",
        "ok": "5143",
        "ko": "8682"
    },
    "percentiles2": {
        "total": "8018",
        "ok": "7434",
        "ko": "8931"
    },
    "percentiles3": {
        "total": "10423",
        "ok": "10448",
        "ko": "9130"
    },
    "percentiles4": {
        "total": "10577",
        "ok": "10578",
        "ko": "9170"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1.867",
        "ko": "0.133"
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
