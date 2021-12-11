package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class GetFourCurrencies extends BaseSimulation {
  def Get() =
    exec(
      http("USD, EUR, RUR, BTC")
        .post("/pubinfo?exchange&json&coursid=5")
        .check(status.is(200))
    )

  val scn = scenario("Get four currencies info (buy/sale)")
    .exec(Get())

  setUp(scn.inject(
    rampUsers(30) during 10)
    .protocols(httpConf))
}
