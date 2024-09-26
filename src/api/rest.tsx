import CONSTANTS from '../constants/constants';
import { TData, TMarketProps } from '../definitions/main';
import { getQueryStringByObject } from '../utils/utils';

class RestAPI {
  private readonly base_uri: string;

  constructor() {
    this.base_uri = CONSTANTS.baseUri;
  }

  async getMarkets(payload: TMarketProps): Promise<TData[]> {
    return await fetch(
      `${this.base_uri}/${CONSTANTS.markets}${getQueryStringByObject({
        ...payload,
      })}`
    )
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

const restApi = new RestAPI();
export default restApi;
