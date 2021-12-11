import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder
import simulations.*

@main def main =
  val gatling = new GatlingPropertiesBuilder

  val classNames = List(
    classOf[GetTenCurrencies].getName,
    //classOf[GetFourCurrencies].getName,
    //classOf[GetBTC].getName
  )

  classNames.foreach(s =>
    gatling.simulationClass(s)
      Gatling.fromMap(gatling.build)
  )






