import { IFolderReadSupplyConnectorRequest as IActionRequest,
  IFolderReadSupplyConnectorResponse as IActionResponse } from '@0xcert/connector';
import { Connector } from '../core/connector';
import * as env from '../config/env';

/**
 * Connector request resolver for ActionId.FOLDER_READ_SUPPLY.
 * @param con Connector class instance.
 * @param req Protocol request object.
 */
export default async function(connector: Connector, req: IActionRequest): Promise<IActionResponse> {

  const instance = new connector.web3.eth.Contract(env.xcertAbi, req.folderId);

  return {
    totalCount: await instance.methods.totalSupply().call().then((s) => parseInt(s)),
  };
}