/** Source: https://stackoverflow.com/a/2117523 */
export function newUuidv4(): string {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

export interface HasUuid {
  readonly uuid: string;
}

export function augmentUuid<T>(t: T): T & HasUuid {
  return { ...t, uuid: newUuidv4() };
}
