// --- ここから追加 ---
import axios from 'axios';
import { lineFoods, lineFoodsReplace } from '../urls/index'

export const replaceLineFoods = (params) => {
  return axios.put(lineFoodsReplace,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => { throw e; })
};
// --- ここまで追加 ---
// --- ここから追加 ---
export const postLineFoods =(params) => {
  return axios.post(lineFoods,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => { throw e; })
};
// --- ここまで追加 ---

// --- ここから追加 ---
export const fetchLineFoods = () => {
  return axios.get(lineFoods)
  .then(res => {
    return res.data
  })
  .catch((e) => { throw e; })
};
// --- ここまで追加 ---
