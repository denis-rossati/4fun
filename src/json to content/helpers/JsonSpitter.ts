import { access, writeFile } from 'node:fs/promises';

class JsonSpitter {
  public static async spit(obj: { [key: string]: any }, pth?: string | undefined) {
    let path = pth;

    if (path !== undefined) {
      try {
        await access(path);
      } catch (e: any) {
        throw new Error(`The path is no accessible: ${e.message}`);
      }
    } else {
      path = __dirname;
    }

    await access(path);

    await writeFile('ObjectToJson.json', JSON.stringify(obj, null, 2));
  }
}

export default JsonSpitter;
