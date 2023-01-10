import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer AwYxJ8wMG2AdPha0LN7rIbnYM_k7usxAqJ19JQWpntd460T4_545TKf9piV5514s_lJDQ8t9HehDZIXfc6W-Tr57TvaX7oFqyZkezuwI7MBBhuvCQ5x9AVILTZ27Y3Yx",
  },
});
