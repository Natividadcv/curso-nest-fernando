import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapater implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    console.log("fetching data");
    
    const respuesta = await fetch(url);
    const data: T = await respuesta.json();
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    console.log("Axios data");
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, data: any) {
    return;
  }
  async path(url: string, data: any) {
    return;
  }
  async delete(url: number) {
    return;
  }
}
