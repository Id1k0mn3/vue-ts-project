type IdType = {
  id: string | number;
}

type CodeType = {
  code: string | number;
}

export interface DesignImage {
  image: string;
  alt: string; 
}

export interface DesignItem {
  id: IdType['id'];
  code: CodeType['code'];
  designPreview: string;
  designLink: string;
  designName: string;
  designes: Array<DesignImage>;
  isPublished: boolean
}