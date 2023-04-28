import http from '../api-client';

class DesignDataService {
  getAll(): Promise<any> {
    return http.get("/designes");
  }

  get(id: any): Promise<any> {
    return http.get(`/designes/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post('/designes', data);
  }
}

export default new DesignDataService();