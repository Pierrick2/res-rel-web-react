import axios from "axios";

export default class RestClient {
  baseUrl = "https://api.victor-gombert.fr/api/v1/";
  token = "1|x6Y5BDn2kEBOHe1UATIejquEZFnP6zhbOhJRNpLT";

  async get(path, params) {
    const url = this.baseUrl + path;

    const response = await axios.get(url, { params });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(response.data.error || "Something went wrong");
    }
  }

  async post(path, body) {
    const url = this.baseUrl + path;
    const response = await axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(response.data.error || "Une erreur est survenue");
    }
  }

  async put(path, body) {
    const url = this.baseUrl + path;
    const response = await axios.put(url, body);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(response.data.error || "Something went wrong");
    }
  }

  async delete(path) {
    const url = this.baseUrl + path;
    const response = await axios.delete(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(response.data.error || "Something went wrong");
    }
  }

  async patch(path, body) {
    const url = this.baseUrl + path;
    const response = await axios.patch(url, body);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(response.data.error || "Something went wrong");
    }
  }
}
