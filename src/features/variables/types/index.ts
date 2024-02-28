interface ImageGen {
  getPlaceholdersWithoutConditions: string[];
  getConditionsPlaceholders: string[];
  __typename: 'ImageGen';
}

interface AdditionalSource {
  id: number;
  __typename: 'AdditionalSource';
}

export interface Variable {
  id: string;
  name: string;
  placeholderName: string;
  showValueType: 'text' | 'number' | 'array' | 'image' | 'date';
  getPlaceholdersWithoutConditions: string[];
  getConditionsPlaceholders: string[];
  imageGen: ImageGen | null;
  additionalSource: AdditionalSource | null;
  __typename: 'DataSourceVariable';
}
