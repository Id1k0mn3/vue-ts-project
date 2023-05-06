type IdType = {
  id: string | number;
}

type CodeType = {
  code: string | number;
}

type IdDesignImage = {
  id: string | number;
}

export interface DesignImage {
  id: IdDesignImage['id'];
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