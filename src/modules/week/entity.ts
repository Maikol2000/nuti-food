import moment from "moment";

class WeekEntity {
  weekName: string = "";
  weekFrom: string = "";
  weekTo: string = "";
  id: string = "";
  createAt: string = "";
  updateAt: string = "";
  constructor(week: any) {
    if (!week) return;
    Object.assign(this, week);
    this.createAt = week.createAt
      ? moment(week.createAt).format("DD/MM/YYYY")
      : "";
    this.updateAt = week.updateAt
      ? moment(week.updateAt).format("DD/MM/YYYY")
      : "";
  }
  static createListWeek(listWeek: Array<any>) {
    if (!Array.isArray(listWeek)) return [];
    return listWeek.map((week: WeekEntity) => {
      return new WeekEntity(week);
    });
  }
}
export default WeekEntity;
