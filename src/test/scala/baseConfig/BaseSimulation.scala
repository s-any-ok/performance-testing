package baseConfig

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class BaseSimulation extends Simulation {
    val httpConf = http
      .baseUrl("https://api.privatbank.ua/p24api")
      .header("Accept", "application/json")
}
