import request from "request";

// # load environment variables
import dotenv from "dotenv";
// dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const getByIngredient = async (req, res) => {
  const query = req.params.query;

  const api_key = `${process.env.EXPRESSJS_EDAMAN_API_KEY}`;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.EXPRESSJS_EDAMAN_APP_ID}&app_key=${api_key}`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.json(data.hits);
    } else {
      console.log(error);
    }
  });
};
