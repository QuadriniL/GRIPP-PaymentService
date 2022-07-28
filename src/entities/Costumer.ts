import { randomUUID } from 'crypto';

/** A costumer of some aplication */
export class Costumer {
  /** id of the costumer */
  private readonly _id: string;
  /** Properties of the costumer */
  private readonly _properties: any;

  /** Creates a costumer instance
   * @constructor Costumer
   * @param {CostumerPropertiesDTO} properties - properties of the costumer
   * @param {string} id - id of the costumer
   * */
  constructor(properties: any, id?: string) {
    this._id = id || randomUUID();
    this._properties = properties;
  }

  /** Getter for the id of the costumer */
  get id(): string {
    return this._id;
  }

  /** Getter for the properties of the costumer */
  get properties(): any {
    return this._properties;
  }

  /** creates a new costumer instance from a json object
   * @param {any} dto - json object
   * @return {Costumer} - new costumer instance */
  static fromDTO(dto: any): Costumer {
    const { id } = dto;
    delete dto.id;
    return new Costumer(dto, id);
  }
}
