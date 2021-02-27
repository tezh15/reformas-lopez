import axios from 'axios';
const baseUrl = "http://localhost:3001";
const sendEmailUrl = "/api/formContact";

export async function sendEmailApi(data) {
  try {
    const response = await axios({
      url: baseUrl + sendEmailUrl,
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      data: data,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}