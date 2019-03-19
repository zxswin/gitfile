import { ApiConfig } from '@app-types/http';


export const API_CONFIG: ApiConfig = {
  produceInfo: {
    method: 'get',
    url: '/api/produce/info',
    options: {
      params: {
        field1: 'field1',
        field2: 'field2',
      }
    },
  }
};
