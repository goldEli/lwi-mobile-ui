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
  clickHref?: ["kefu", "wxapp"];
  openType?: string;
  wxapplink?: string;
  imgUrl: IImgUrlItem[];
  data?: any;
}

export interface IProductListItem {
  id: string;
  name: string;
  cover_path: string;
  price: number;
  sales_volume: number;
  description: string;
  wxapplink?: string;
}
