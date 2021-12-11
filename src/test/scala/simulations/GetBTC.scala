package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class GetBTC extends BaseSimulation {
  def Get() =
    exec(
      http("BTC data")
        .post("/pubinfo?exchange&json&coursid=1")
        .check(status.is(200))
    )

  val scn = scenario("Get currency info (buy/sale)")
    .exec(Get())

  setUp(scn.inject(
    rampUsers(30) during 10)
    .protocols(httpConf))
}
