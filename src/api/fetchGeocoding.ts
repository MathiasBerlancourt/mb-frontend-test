import { IGeoCodingBody } from "../types/geoCodingAPI";
import axios from "axios";

export default class GeoCoding {
  /**
   * Lister les annonces sur une zone géographique donnée et sur tous les portails (LeBonCoin, SeLoger, etc...)
   * @param address Adresse en string
   */
  static fetchCoordinates(address: string): Promise<IGeoCodingBody> {
    return axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${address}&limit=5`)
      .then((r) => r.data);
  }
}
