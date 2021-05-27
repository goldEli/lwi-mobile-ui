interface IImgUrlItem {
  uid: string;
  name: string;
  status: string;
  url: string;
}

export interface IImgListItem {
  id: string;
  title: string;
  desc: string;
  link: string;
  type?: number;
  clickHref?: string;
  openType?: string;
  wxapplink?: string;
  imgUrl: IImgUrlItem[];
  data?: any;
}
