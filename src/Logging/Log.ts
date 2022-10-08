import {LogLevel} from './LogLevel';

/**
 * Represents a log
 */
export class Log {
  public Level: LogLevel = LogLevel.INFO;
  public Message: string;
  public Category: string;
  public AdditionalData?: any | undefined;
  public Timestamp: number;

  /**
 * Constructor.
 * @param {LogLevel} level The severity of the log
 * @param {string} message The log message
 * @param {string} category The category of the message
 * @param {any | undefined} AdditionalData Additionnal data for the log message
 */
  constructor(
      level: LogLevel,
      message: string,
      category: string,
      AdditionalData?: any | undefined) {
    this.Level = level;
    this.Message = message;
    this.Category = category;
    this.AdditionalData = AdditionalData;
    this.Timestamp = Date.now();
  }
}
