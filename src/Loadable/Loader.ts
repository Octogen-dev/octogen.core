import {Log} from '../Logging/Log';
import {LogLevel} from '../Logging/LogLevel';
import {ILoadable} from './ILoadable';

/**
 * Represents a log
 */
export class Loader {
  public Loadables: ILoadable[] = [];

  /**
 * Constructor.
 * @param {ILoadable[]} loadables The list of objects to load
 */
  constructor(
      loadables: ILoadable[] = []) {
    this.Loadables = loadables;
  }

  /** Loads all objects */
  public async loadAsync() {
    await Promise.all(
        this.Loadables.map(async (l) => await this.loadSingleAsync(l)));
  }

  /**
 * Loads a single object.
 * @param {ILoadable} loadable The list of objects to load
 */
  private async loadSingleAsync(loadable: ILoadable) {
    try {
      this.addLog(loadable, LogLevel.INFO, 'Start loading');
      await loadable.loadAsync();
      this.addLog(loadable, LogLevel.INFO, 'Loading success');
    } catch (e) {
      this.addLog(loadable, LogLevel.ERROR, 'Failed to load', e);
    }
  }

  /**
 * Create and add a new log
 * @param {ILoadable} loadable The list of objects to load
 * @param {LogLevel} level The log level
 * @param {string} message The list of objects to load
 * @param {any | undefined} err The error to log if any
 */
  private addLog(
      loadable: ILoadable,
      level: LogLevel,
      message: string,
      err: any | undefined = undefined) {
    const log = new Log(level, message, 'loading', {
      source: loadable,
      err: err,
    });
    loadable.Logs.push(log);
  }
}
