import http from '../api-client';

// only for example, i am using only get all API, for getting initial items.
class DesignDataService {
  getAll(): Promise<any> {
    return http.get("/designes");
  }

  get(id: any): Promise<any> {
    return http.get(`/designes/${id}`);
  }

  change(id: any, data: any): Promise<any> {
    return http.put(`/designes/${id}`, data);
  }

  create(data: any): Promise<any> {
    return http.post('/designes', data);
  }
}

export default new DesignDataService();