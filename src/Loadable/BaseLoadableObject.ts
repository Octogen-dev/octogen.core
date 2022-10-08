import {LoadStatus} from './LoadStatus';
import {ILoadable} from './ILoadable';
import {Log} from '../Logging/Log';

/**
 * Abstract loadable class
 */
export abstract class BaseLoadableObject implements ILoadable {
  public RawData?: any | undefined;
  public LoadStatus: LoadStatus;
  public Dependencies?: ILoadable[] | undefined;
  Logs: Log[] = [];

  /** Load method */
  public async loadAsync() {
    throw new Error('Method not implemented.');
  }
}
