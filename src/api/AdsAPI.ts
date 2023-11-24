import { AdAPIResponse } from "../types/AdAPIResponse";
import { IAdAPIBody } from "../types/AdAPIBody";
import axios from "axios";

export default class AdsAPI {
  /**
   * Lister les annonces sur une zone géographique donnée et sur tous les portails (LeBonCoin, SeLoger, etc...)
   * @param latitude Latitude du centre de la zone géographique
   * @param longitude Longitude du centre de la zone géographique
   * @param radius Rayon de la zone géographique en kilomètres
   * @param type Type d'annonce (location ou vente)
   */
  static listAds({
    latitude,
    longitude,
    type,
    radius,
  }: IAdAPIBody): Promise<AdAPIResponse> {
    console.log("API params", latitude, longitude);

    return axios
      .post(
        "https://api.meilleursbiens.com/api/v1/saas/technical-tests/frontend",
        {
          lat: latitude,
          lng: longitude,
          type,
          radius,
        },
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((r) => r.data);
  }
}
