import { Pipe, PipeTransform } from "@angular/core";
import { Building } from "../../@interface/Building.interface";

@Pipe({
    name: "BuildingsFilter"
})

export class BuildingsFilterPipe implements PipeTransform {

  public transform (buildings: Building[], searchText: string): Building[] {
    if (!buildings || !searchText) {
        return buildings;
    }

    return buildings.filter((building: Building) =>
      building.street_number.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      building.street_name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      building.city.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
  }
}
