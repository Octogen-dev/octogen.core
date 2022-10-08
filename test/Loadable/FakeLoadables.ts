import {BaseLoadableObject} from '../../src/Loadable/BaseLoadableObject';

/**
 * Loader that works with no error
 */
export class WorkingLoadable extends BaseLoadableObject {
  /** Load method */
  public async loadAsync() {
    this.RawData = 1;
  }
}

/**
 * Loader that fails to load
 */
export class FailingLoadable extends BaseLoadableObject {
}
