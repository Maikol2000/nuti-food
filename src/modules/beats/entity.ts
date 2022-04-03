import moment from "moment";

class BeatsEntity {
  beatName: string ="";
  beatThumbnail:any = null;
  beatContent: string="";
  beatAuthor: string="";
  beatSinger: string="";
  beatLyric: string="";
  beatTag:any = null;
  beatTotalCover: number = 0;
  id: string ="";
  createAt: string ="";
  updateAt: string ="";

  constructor(beats:any) {
    if(!beats) return ;
    Object.assign(this, beats);
    this.updateAt = beats.updateAt? moment(beats.updateAt).format("DD/MM/YYYY"):"";
    this.createAt = beats.createAt? moment(beats.createAt).format("DD/MM/YYYY"):"";
  }
  static createListBeats(listBeats:Array<any>){
    if (!Array.isArray(listBeats)) return [];
    return listBeats.map((beats:BeatsEntity) => {
      return new BeatsEntity(beats);
    });
  }
}
export default BeatsEntity;
