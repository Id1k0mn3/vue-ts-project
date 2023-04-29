type IdType = {
  id?: string | number;
}

type CodeType = IdType;

interface DesignImage {
  image: string;
  alt: string; 
}

export interface DesignItem {
  id?: IdType;
  code?: CodeType;
  designPreview?: string;
  designLink?: string;
  designName?: string;
  designes?: DesignImage[];
  isPublished?: boolean
}