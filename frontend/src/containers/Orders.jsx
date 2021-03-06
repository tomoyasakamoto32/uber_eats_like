// --- 次でuseEffectを追加 ---
import React, { Fragment, useEffect, useReducer } from 'react';

import { fetchLineFoods } from '../apis/line_foods';
// --- ここから追加 ---
import {
  initialState,
  lineFoodsActionTypes,
  lineFoodsReducer,
} from '../reducers/lineFoods';
// --- ここまで追加 ---

export const Orders = () => {
  // --- ここから追加 ---
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);
  // --- ここまで追加 ---

// --- ここから追加 ---
  useEffect(() => {
    dispatch({ type: lineFoodsActionTypes.FETCHING });
    fetchLineFoods()
      .then((data) =>
        dispatch({
          type: lineFoodsActionTypes.FETCH_SUCCESS,
          payload: {
            lineFoodsSummary: data
          }
        })
      )
      .catch((e) => console.error(e));
  }, []);
// --- ここまで追加 ---

  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}
