import {LoadStatus} from './LoadStatus';
import {Log} from './../Logging/Log';

export interface ILoadable {
  RawData?: any | undefined;
  LoadStatus: LoadStatus;
  Dependencies?: ILoadable[] | undefined;
  Logs: Log[];
  loadAsync (): any;
}
