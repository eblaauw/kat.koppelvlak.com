export interface CatData {
  uuid: string;
  name: string;
  age: number;
  breed: string;
  color: {
    primary_color: string;
    secondary_colors: string[];
    pattern: string;
  };
  gender: string;
  vaccination_status: {
    rabies: string;
    fvrcp: string;
  };
  status: string;
}
