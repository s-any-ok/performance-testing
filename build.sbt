enablePlugins(GatlingPlugin)

name := "pt"

version := "0.1"

scalaVersion := "3.0.2"

val gatlingVersion = "3.7.2"
libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % gatlingVersion % "test,it"
libraryDependencies += "io.gatling"            % "gatling-test-framework"    % gatlingVersion % "test,it"