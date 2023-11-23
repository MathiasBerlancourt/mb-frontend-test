export interface IAdAPIBody {
  latitude: number;
  longitude: number;
  radius: number;
  type: "rent" | "sale";
}
