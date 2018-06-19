import http from '@/utils/http';
import * as api from '@/config/apiUrl';

export default {
  getInfo(params) {
    return http.get(api.test.user, { params })
      .then(({ status, data }) => ({ status, data }))
      .catch(({ response }) => ({ status: response.status, data: response.data }));
  },

}
